import React, { useRef, useState } from "react";
import { templates } from "../configs/templates";
import { colors } from "../configs/constants";
import { PickColorModal } from "./G87";

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
    <div className="d-flex justify-content-center w-100">
      <div className="w-50">
        <PickColorModal
          open={boxColorModal}
          title={"Pick box color"}
          onPickColor={handlePickBoxColor}
          onClose={handleONCBoxColorModal}
        />

        <PickColorModal
          open={nameColorModal}
          title={"Pick name color"}
          onPickColor={handlePickNameColor}
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
                {ele} inches
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
      </div>{" "}
      <img
        src="https://i.etsystatic.com/28538313/r/il/fa4cfb/5639787383/il_794xN.5639787383_g8jz.jpg"
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

export default E13;
