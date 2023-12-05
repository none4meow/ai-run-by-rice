import React, { useRef, useState } from "react";
import { templates } from "../configs/templates";
import { colors } from "../configs/constants";
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

const E13 = () => {
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
  };

  const [nameColorModal, setNameColorModal] = useState(false);
  const handleONCNameColorModal = () => setNameColorModal(!nameColorModal);

  const [boxColorModal, setBoxColorModal] = useState(false);
  const handleONCBoxColorModal = () => setBoxColorModal(!boxColorModal);

  const [customName, setCustomName] = useState("");
  const onChangeCustomName = (e) => {
    let value = e.target.value;
    value = value.charAt(0).toUpperCase() + value.slice(1);
    setCustomName(value);

    setFirstChar(value.trim().charAt(0).toUpperCase());
  };

  const [firstChar, setFirstChar] = useState(null);

  const [sizes] = useState([7, 9, 11]);
  const [customSize, setCustomSize] = useState(sizes[0]);
  const onChangeCustomSize = (e) => {
    const value = e.target.value;
    setCustomSize(parseInt(value));
  };

  const resetCustom = () => {
    setCustomBoxColor(null);
    setCustomNameColor(null);
    setCustomName("");
    setCustomSize(sizes[0]);
  };

  const sizeRef = useRef(null);

  const getCode = () => {
    if (!customName.length > 0 || !customBoxColor || !customNameColor) return;

    switch (customSize) {
      case sizes[0]:
        return templates.E13[firstChar](
          customName,
          customBoxColor,
          customNameColor,
          customSize
        );

      case sizes[1]:
        return templates.E13[firstChar](
          customName,
          customBoxColor,
          customNameColor,
          customSize
        );
      case sizes[2]:
        return templates.E13[firstChar](
          customName,
          customBoxColor,
          customNameColor,
          customSize
        );
      default:
        break;
    }
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
  );
};

export default E13;
