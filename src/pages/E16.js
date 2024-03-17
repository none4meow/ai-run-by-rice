import React, { useRef, useState } from "react";
import { templates } from "../configs/templates";
import { Modal } from "@mui/material";
import { PickFontModal } from "./E05";
import { PickColorModal } from "./G87";
import { colors } from "../constants/colors";
import { PickEarModal } from "./G98/G98";

const E16 = () => {
  const [customName, setCustomName] = useState("");
  const onChangeCustomName = (e) => {
    const value = e.target.value;
    setCustomName(value);
  };

  const [customYear, setCustomYear] = useState("");
  const specialChars = {
    "&": "&amp;",
    "<": "&lt;",
  };

  const onChangeCustomYear = (e) => {
    let value = e.target.value;
    setCustomYear(value.replace(/[&<]/g, (c) => specialChars[c]));
  };

  const [openColor, setOpenColor] = useState(false);
  const onCloseColor = () => setOpenColor(!openColor);

  const [customColor, setCustomColor] = useState(null);
  const onPickColor = (color) => {
    setCustomColor(colors[color]);
    onCloseColor();

    handleONCFontModal();
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

  const [openEar, setOpenEar] = useState(false);
  const onCloseEar = () => {
    setOpenEar(!openEar);
  };

  const [earNumber, setEarNumber] = useState("");
  const handlePickEar = (earNumber) => {
    setEarNumber(earNumber);
    onCloseEar();
  };

  const onChangeEar = (e) => {
    const value = e.target.value;
    setEarNumber(value);
  };

  const resetCustom = () => {
    setCustomColor(null);
    setFontNumber("");
    setEarNumber("");
    setCustomName("");
    setCustomYear("");
  };

  const sizeRef = useRef(null);

  const getCode = () => {
    try {
      return templates.E16.svg(
        customColor,
        fontNumber,
        customName,
        earNumber,
        customYear
      );
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="d-flex justify-content-center w-100">
      <div className="w-50">
        <PickColorModal
          open={openColor}
          title={"Pick background color"}
          onPickColor={onPickColor}
          onClose={onCloseColor}
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

        <Modal open={openEar} onClose={onCloseEar}>
          <div>
            <PickEarModal
              earNumber={earNumber}
              onChangeEar={onChangeEar}
              handlePickEar={handlePickEar}
              onClose={onCloseEar}
            />
          </div>
        </Modal>

        <div className="w-100 d-flex mb-3 pointer" onClick={onCloseColor}>
          {customColor ? (
            <>
              <label
                htmlFor="color"
                className="form-label col-auto col-form-label pointer me-3"
              >
                Color
              </label>
              <input
                value={customColor.name}
                className="form-control pointer"
                onClick={onCloseColor}
                onChange={() => {}}
              />
            </>
          ) : (
            <button className="w-100 btn btn-secondary">Pick Color</button>
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

        <div className="w-100 d-flex flex-column mt-3 mb-3">
          <label htmlFor="Name" className="form-label text-start">
            Name
          </label>
          <textarea
            type="text"
            id="Name"
            className={`form-control`}
            autoComplete="off"
            value={customName}
            onChange={(e) => onChangeCustomName(e)}
          />
        </div>

        <div className="w-100 d-flex mb-3 pointer" onClick={() => onCloseEar()}>
          <label htmlFor="ear-number" className="form-label pointer">
            Ear number
          </label>
          <div className="d-flex ms-3">
            <span># </span>
            <input
              value={earNumber}
              className="ms-2 form-control pointer"
              onChange={() => onChangeEar()}
            />
          </div>
        </div>

        <div className="w-100 d-flex flex-column mt-3 mb-3">
          <label htmlFor="Year" className="form-label text-start">
            Year
          </label>
          <textarea
            type="text"
            id="Year"
            className={`form-control`}
            autoComplete="off"
            value={customYear}
            onChange={(e) => onChangeCustomYear(e)}
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
        src="https://i.etsystatic.com/28538313/r/il/ebbea3/5603826044/il_794xN.5603826044_iy16.jpg"
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

export default E16;
