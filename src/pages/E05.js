import React, { useEffect, useRef, useState } from "react";
import { templates } from "../configs/templates";
import { fonts } from "../configs/constants";
import { Modal } from "@mui/material";
import { PickColorModal } from "./G87";
import { colors } from "../constants/colors";

export const PickFontModal = ({
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
    onCloseBoxColor();

    onCloseNameColor();
  };

  const [customNameColor, setCustomNameColor] = useState(null);
  const handlePickNameColor = (color) => {
    setCustomNameColor(colors[color]);
    onCloseNameColor();

    handleONCFontModal();
  };

  const [openNameColor, setOpenNameColor] = useState(false);
  const onCloseNameColor = () => setOpenNameColor(!openNameColor);

  const [openBoxColor, setOpenBoxColor] = useState(false);
  const onCloseBoxColor = () => setOpenBoxColor(!openBoxColor);

  const [customName, setCustomName] = useState("");
  const onChangeCustomName = (e) => {
    const value = e.target.value;
    setCustomName(value);
  };

  const [customText, setCustomText] = useState("");

  const specialChars = {
    "&": "&amp;",
    "<": "&lt;",
  };

  const onChangeCustomText = (e) => {
    const value = e.target.value;
    setCustomText(value.replace(/[&<]/g, (c) => specialChars[c]));
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

  // eslint-disable-next-line no-unused-vars
  const [sizes, _] = useState(["S", "M", "L"]);

  const [customSize, setCustomSize] = useState(sizes[0]);
  const onChangeCustomSize = (e) => {
    setCustomSize(e.target.value);
  };

  const resetCustom = () => {
    setCustomBoxColor(null);
    setCustomNameColor(null);
    setFontNumber("");
    setCustomName("");
    setCustomText("");
    setCustomSize(sizes[0]);
  };

  const sizeRef = useRef(null);

  const getCode = () => {
    if (!customBoxColor || !customNameColor) return;

    switch (customSize) {
      case "S":
        return templates.E05.sizeS(
          customName,
          customText,
          customBoxColor,
          customNameColor,
          fontNumber,
          fonts[fontNumber].name
        );

      case "M":
        return templates.E05.sizeM(
          customName,
          customText,
          customBoxColor,
          customNameColor,
          fontNumber,
          fonts[fontNumber].name
        );
      case "L":
        return templates.E05.sizeL(
          customName,
          customText,
          customBoxColor,
          customNameColor,
          fontNumber,
          fonts[fontNumber].name
        );
      default:
        break;
    }
  };

  return (
    <div className="d-flex justify-content-center w-100">
      <div className="w-50">
        <PickColorModal
          open={openBoxColor}
          title={"Pick box color"}
          onPickColor={handlePickBoxColor}
          onClose={onCloseBoxColor}
        />

        <PickColorModal
          open={openNameColor}
          title={"Pick name color"}
          onPickColor={handlePickNameColor}
          onClose={onCloseNameColor}
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
                onClick={onCloseBoxColor}
                onChange={() => {}}
              />
            </>
          ) : (
            <button
              className="w-100 btn btn-secondary"
              onClick={onCloseBoxColor}
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
                onClick={onCloseNameColor}
                onChange={() => {}}
              />
            </>
          ) : (
            <button
              className="w-100 btn btn-secondary"
              onClick={onCloseNameColor}
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
          className="btn btn-secondary mb-5 w-100"
          onClick={() => {
            navigator.clipboard.writeText(getCode());
            resetCustom();
          }}
        >
          Get code
        </button>
      </div>

      <img
        src="https://i.etsystatic.com/28538313/r/il/20c958/5465082206/il_794xN.5465082206_qsw8.jpg"
        alt=""
        style={{
          height: "fit-content",
          width: "300px",
          marginLeft: "60px",
          borderRadius: "12px",
        }}
      />
    </div>
  );
};

export default E05;
