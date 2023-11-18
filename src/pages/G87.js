import React, { useState } from "react";
import { templates } from "../configs/templates";
import { colors } from "../configs/constants";
import { Modal } from "@mui/material";

const G87 = () => {
  const [customColor, setCustomColor] = useState(null);
  const handlePickColor = (color) => {
    setCustomColor(colors[color]);
    handleONCColorModal();
  };

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

  const [animalNumber, setAnimalNumber] = useState("");
  const handlePickAnimal = (animalNumber) => {
    setAnimalNumber(animalNumber);
    handleONCAnimalModal();
  };

  // ${templates.G87.animals[animalNumber].tag(900, 400, 1)}

  const generateG87 = () => {
    return `<svg xmlns="http://www.w3.org/2000/svg">
      <defs>
        <style>
          ${templates.G87.sizeMStyles}
        </style>
      </defs>
      ${templates.G87.animals[animalNumber].tag(860, 500, 1.4)}
      ${templates.G87.sizeM(
        customName,
        customText,
        `#${animalNumber} - ${customColor.name}`,
        customColor.hexCode
      )}
    </svg>`;
  };

  const [colorModal, setColorModal] = useState(false);
  const handleONCColorModal = () => setColorModal(!colorModal);

  const [animalModal, setAnimalModal] = useState(false);
  const handleONCAnimalModal = () => {
    setAnimalModal(!animalModal);
  };

  const PickColorModal = () => {
    return (
      <Modal open={colorModal} onClose={handleONCColorModal}>
        <div className={"custom-modal"}>
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

  const PickAnimalModal = () => {
    return (
      <Modal open={animalModal} onClose={handleONCAnimalModal}>
        <div className={"custom-modal"}>
          <div className="grid-container">
            {Object.keys(templates.G87.animals).map((key, index) => (
              <div
                key={index}
                className="grid-item"
                onClick={() => handlePickAnimal(key)}
              >
                <div className="d-block m-auto">
                  <svg
                    dangerouslySetInnerHTML={{
                      __html: templates.G87.animals[key].tag(0, 0, 1),
                    }}
                  ></svg>
                </div>
                <span>{key}</span>
              </div>
            ))}
          </div>
        </div>
      </Modal>
    );
  };

  return (
    <>
      <PickColorModal />
      <PickAnimalModal />
      <div
        className="align-items-center mb-3 pointer"
        onClick={handleONCColorModal}
      >
        {customColor ? (
          <>
            <label
              htmlFor="color"
              className="form-label col-auto col-form-label pointer"
            >
              Color
            </label>
            <input value={customColor.name} className="form-control" disabled />
          </>
        ) : (
          <button className="btn btn-secondary">Pick Color</button>
        )}
      </div>
      <div className="row g-3 align-items-center mb-3">
        <label htmlFor="name" className="form-label col-auto col-form-label">
          Name
        </label>
        <textarea
          type="text"
          id="name"
          className={`form-control col-auto`}
          autoComplete="off"
          value={customName}
          onChange={(e) => onChangeCustomName(e)}
        />
      </div>
      <div className="row g-3 align-items-center mb-3">
        <label
          htmlFor="custom-text"
          className="form-label col-auto col-form-label"
        >
          Custom text
        </label>
        <textarea
          type="text"
          id="custom-text"
          className={`form-control col-auto`}
          autoComplete="off"
          value={customText}
          onChange={(e) => onChangeCustomText(e)}
        />
      </div>
      <div
        className="row g-3 align-items-center mb-3 pointer"
        onClick={handleONCAnimalModal}
      >
        {animalNumber.length > 0 ? (
          <>
            <label
              htmlFor="animal-number"
              className="form-label col-auto col-form-label pointer"
            >
              Animal number
            </label>
            <input value={animalNumber} className="form-control" disabled />
          </>
        ) : (
          <button className="btn btn-secondary">Pick Animal</button>
        )}
      </div>
      <button
        className="btn btn-secondary"
        onClick={() => {
          navigator.clipboard.writeText(generateG87());
        }}
      >
        Generate
      </button>
    </>
  );
};

export default G87;
