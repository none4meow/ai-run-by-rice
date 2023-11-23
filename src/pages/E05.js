import React, { useEffect, useRef, useState } from "react";
import { templates } from "../configs/templates";
import { colors, fonts } from "../configs/constants";
import { Modal } from "@mui/material";

const PickColorModal = ({ open, title, handlePickColor, onClose }) => {
  return (
    <Modal open={open} onClose={onClose}>
      <div className={"custom-modal"}>
        <h3 className="text-center">{title}</h3>
        <div className="grid-container">
          {Object.keys(colors).map((key, index) => (
            <div
              key={index}
              className="grid-item"
              onClick={() => handlePickColor(key)}
            >
              <div
                className="circle"
                style={{ background: `${colors[key].hexCode}` }}
              ></div>
              <span>{colors[key].name}</span>
            </div>
          ))}
        </div>
      </div>
    </Modal>
  );
};

const PickFontModal = ({
  fontNumber,
  handlePickFont,
  onChangeCustomFont,
  onClose,
}) => {
  const onEnter = (e) => {
    if (e.key === "Enter") onClose();
  };

  const numberRef = useRef(null);

  useEffect(() => {
    // inputRef.current?.focus();
    numberRef.current?.select();
  }, []);

  return (
    <div className={"custom-modal"}>
      <input
        type="number"
        autoFocus={true}
        ref={numberRef}
        autoComplete="off"
        className="form-control dark-input mt-3 mb-3"
        value={fontNumber}
        onKeyDown={(e) => onEnter(e)}
        onChange={(e) => onChangeCustomFont(e)}
      />
      <div className="grid-container">
        {Object.keys(fonts).map((font, index) => (
          <div
            key={index}
            className="grid-item"
            onClick={() => handlePickFont(font)}
          >
            <span className="me-3"># {font} -</span>
            <span style={{ fontFamily: `'${fonts[font].name}'` }}>
              {fonts[font].name}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

const E05 = () => {
  const [customBoxColor, setCustomBoxColor] = useState(null);
  const handlePickBoxColor = (color) => {
    setCustomBoxColor(colors[color]);
    handleONCBoxColorModal();

    handleONCNameColorModal();
  };

  const [customNameColor, setCustomNameColor] = useState(null);
  const handlePickNameColor = (color) => {
    setCustomNameColor(colors[color]);
    handleONCNameColorModal();

    handleONCFontModal();
  };

  const [nameColorModal, setNameColorModal] = useState(false);
  const handleONCNameColorModal = () => setNameColorModal(!nameColorModal);

  const [boxColorModal, setBoxColorModal] = useState(false);
  const handleONCBoxColorModal = () => setBoxColorModal(!boxColorModal);

  const [customName, setCustomName] = useState("");
  const onChangeCustomName = (e) => {
    const value = e.target.value;
    setCustomName(value);
  };

  const [customText, setCustomText] = useState("");
  const onChangeCustomText = (e) => {
    const value = e.target.value;
    setCustomText(value);
  };

  const [fontNumber, setFontNumber] = useState("");
  const handlePickFont = (fontNumber) => {
    setFontNumber(fontNumber);
    handleONCFontModal();
  };
  const onChangeCustomFont = (e) => {
    const value = e.target.value;
    // const intValue = parseInt(value);
    // if (0 < intValue && intValue <= 30)
    setFontNumber(value);
  };

  const [fontModal, setFontModal] = useState(false);
  const handleONCFontModal = () => {
    if (fontModal) sizeRef.current?.focus();

    setFontModal(!fontModal);
  };

  const sizes = ["S", "M", "L"];
  const [customSize, setCustomSize] = useState("S");
  const onChangeCustomSize = (e) => {
    setCustomSize(e.target.value);
  };

  const resetCustom = () => {
    setCustomBoxColor(null);
    setCustomNameColor(null);
    setFontNumber("");
    setCustomName("");
    setCustomText("");
    setCustomSize("S");
  };

  const sizeRef = useRef(null);

  const generateE05 = () => {
    if (customName.length <= 0) return;

    const styling = () => {
      switch (customSize) {
        case "S":
          return templates.E05.sizeSStyles;
        case "M":
          return templates.E05.sizeMStyles;
        case "L":
          return templates.E05.sizeLStyles;
        default:
          break;
      }
    };

    const sizing = () => {
      switch (customSize) {
        case "S":
          return templates.E05.sizeS(
            customName,
            customText,
            customBoxColor.name,
            customBoxColor.hexCode,
            customNameColor.name,
            fontNumber,
            fonts[fontNumber].name
          );

        case "M":
          return templates.E05.sizeM(
            customName,
            customText,
            customBoxColor.name,
            customBoxColor.hexCode,
            customNameColor.name,
            fontNumber,
            fonts[fontNumber].name
          );
        case "L":
          return templates.E05.sizeL(
            customName,
            customText,
            customBoxColor.name,
            customBoxColor.hexCode,
            customNameColor.name,
            fontNumber,
            fonts[fontNumber].name
          );
        default:
          break;
      }
    };

    return `<svg xmlns="http://www.w3.org/2000/svg">
      <defs>
        <style>
          ${styling()}
        </style>
      </defs>
      ${sizing()}
    </svg>`;
  };

  return (
    <div className="w-50">
      <PickColorModal
        open={boxColorModal}
        title={"Pick your box color"}
        handlePickColor={handlePickBoxColor}
        onClose={handleONCBoxColorModal}
      />

      <PickColorModal
        open={nameColorModal}
        title={"Pick your name color"}
        handlePickColor={handlePickNameColor}
        onClose={handleONCNameColorModal}
      />

      <Modal open={fontModal} onClose={handleONCFontModal}>
        <div>
          <PickFontModal
            fontNumber={fontNumber}
            handlePickFont={handlePickFont}
            onChangeCustomFont={onChangeCustomFont}
            onClose={handleONCFontModal}
          />
        </div>
      </Modal>

      <div className="w-100 d-flex mb-3 pointer">
        {customBoxColor ? (
          <>
            <label
              htmlFor="color"
              className="form-label col-auto col-form-label pointer me-3"
            >
              Box Color
            </label>
            <input
              value={customBoxColor.name}
              className="form-control pointer"
              onClick={handleONCBoxColorModal}
              onChange={() => {}}
            />
          </>
        ) : (
          <button
            className="w-100 btn btn-secondary"
            onClick={handleONCBoxColorModal}
          >
            Pick Box Color
          </button>
        )}
      </div>

      <div className="w-100 d-flex mb-3 pointer">
        {customNameColor ? (
          <>
            <label
              htmlFor="color"
              className="form-label col-auto col-form-label pointer me-3"
            >
              Name Color
            </label>
            <input
              value={customNameColor.name}
              className="form-control pointer"
              onClick={handleONCNameColorModal}
              onChange={() => {}}
            />
          </>
        ) : (
          <button
            className="w-100 btn btn-secondary"
            onClick={handleONCNameColorModal}
          >
            Pick Name Color
          </button>
        )}
      </div>

      <div className="w-100 d-flex mb-3 pointer" onClick={handleONCFontModal}>
        <label htmlFor="font-number" className="form-label pointer">
          Font number
        </label>
        <div className="d-flex ms-3">
          <span># </span>
          <input
            value={fontNumber}
            className="ms-2 form-control pointer"
            onChange={() => {}}
          />
        </div>
      </div>

      <div className="d-flex">
        <label htmlFor="sku" className="form-label col-form-label me-3">
          Size
        </label>
        <select
          ref={sizeRef}
          className="form-control form-select"
          value={customSize}
          onChange={(e) => onChangeCustomSize(e)}
        >
          {sizes.map((ele) => (
            <option key={ele} value={ele}>
              {ele}
            </option>
          ))}
        </select>
      </div>
      <div className="w-100 d-flex flex-column mt-3 mb-3">
        <label htmlFor="name" className="form-label text-start">
          Name
        </label>
        <textarea
          type="text"
          id="name"
          className={`form-control`}
          autoComplete="off"
          value={customName}
          onChange={(e) => onChangeCustomName(e)}
        />
      </div>
      <div className="w-100 d-flex flex-column mt-3 mb-3">
        <label htmlFor="custom-text" className="text-start form-label">
          Text
        </label>
        <textarea
          type="text"
          id="custom-text"
          className={`form-control`}
          autoComplete="off"
          value={customText}
          onChange={(e) => onChangeCustomText(e)}
        />
      </div>
      <button
        className="btn btn-secondary"
        onClick={() => {
          navigator.clipboard.writeText(generateE05());
          resetCustom();
        }}
      >
        Generate
      </button>
    </div>
  );
};

export default E05;
