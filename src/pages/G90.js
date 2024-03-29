import React, { useEffect, useRef, useState } from "react";
import { templates } from "../configs/templates";
import { colors } from "../constants/colors";
import { Modal } from "@mui/material";
import { PickAnimalModal, PickColorModal } from "./G87";

const G90 = () => {
  const [customColor, setCustomColor] = useState(null);
  const onPickColor = (color) => {
    setCustomColor(colors[color]);
    onClose();

    onCloseAnimal();
  };

  const [customName, setCustomName] = useState("");
  const onChangeCustomName = (e) => {
    const value = e.target.value;
    setCustomName(value);
  };

  const [customText, setCustomText] = useState("");
  const onChangeCustomText = (e) => {
    setCustomText(e.target.value);
  };

  const [animalNumber, setAnimalNumber] = useState("");
  const handlePickAnimal = (animalNumber) => {
    setAnimalNumber(animalNumber);
    onCloseAnimal();
  };

  const onChangeCustomAnimal = (e) => {
    const value = e.target.value;
    // const intValue = parseInt(value);
    // if (0 < intValue && intValue <= 30)
    setAnimalNumber(value);
  };

  const [openColor, setOpenColor] = useState(false);
  const onClose = () => setOpenColor(!openColor);

  const [openAnimal, setOpenAnimal] = useState(false);
  const onCloseAnimal = () => {
    setOpenAnimal(!openAnimal);
  };

  useEffect(() => {
    sizeRef.current?.focus();
  }, [openAnimal]);

  const sizes = ["S", "M", "L"];
  const [customSize, setCustomSize] = useState("S");
  const onChangeCustomSize = (e) => {
    setCustomSize(e.target.value);
  };

  const resetCustom = () => {
    setCustomColor(null);
    setCustomName("");
    setCustomText("");
    setAnimalNumber("");
    setCustomSize("S");
  };

  const sizeRef = useRef(null);

  const getCode = () => {
    if (!customColor) return;

    // if (animalNumber.length <= 0) {
    //   if (Math.round(Math.random()) === 0) setAnimalNumber("12");
    //   else setAnimalNumber("14");
    // }

    switch (customSize) {
      case "S":
        return templates.G90.sizeS(
          customName,
          customColor,
          animalNumber,
          customText
        );

      case "M":
        return templates.G90.sizeM(
          customName,
          customColor,
          animalNumber,
          customText
        );

      case "L":
        return templates.G90.sizeL(
          customName,
          customColor,
          animalNumber,
          customText
        );

      default:
        break;
    }
  };

  return (
    <div className="d-flex justify-content-center w-100">
      <div className="w-50">
        <Modal open={openAnimal} onClose={onCloseAnimal}>
          <div>
            <PickAnimalModal
              animalModal={openAnimal}
              animalNumber={animalNumber}
              onChangeAnimal={onChangeCustomAnimal}
              onPickAnimal={handlePickAnimal}
              onClose={onCloseAnimal}
            />
          </div>
        </Modal>
        <PickColorModal
          open={openColor}
          title={"Pick box color"}
          onPickColor={onPickColor}
          onClose={onClose}
        />

        <div className="w-100 d-flex mb-3 pointer" onClick={onClose}>
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
                onClick={onClose}
                onChange={() => {}}
              />
            </>
          ) : (
            <button className="w-100 btn btn-secondary">Pick Color</button>
          )}
        </div>
        <div className="w-100 d-flex mb-3 pointer" onClick={onCloseAnimal}>
          {animalNumber.length > 0 ? (
            <>
              <label htmlFor="animal-number" className="form-label pointer">
                Animal number
              </label>
              <div className="d-flex ms-3">
                <span># </span>
                <input
                  value={animalNumber}
                  className="ms-2 form-control pointer"
                  onClick={onCloseAnimal}
                  onChange={() => {}}
                />
              </div>
            </>
          ) : (
            <button className="w-100 btn btn-secondary">Pick Animal</button>
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
        src="https://i.etsystatic.com/28538313/r/il/34caae/5563795073/il_794xN.5563795073_adrc.jpg"
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

export default G90;
