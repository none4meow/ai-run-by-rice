import React, { useEffect, useRef, useState } from "react";
import { templates } from "../configs/templates";
import { colors } from "../configs/constants";
import { Modal } from "@mui/material";

const PickColorModal = ({
  colorModal,
  handlePickColor,
  handleONCColorModal,
}) => {
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

const PickAnimalModal = ({
  animalNumber,
  animalModal,
  onChangeCustomAnimal,
  handlePickAnimal,
  handleONCAnimalModal,
}) => {
  const onEnter = (e) => {
    if (e.key === "Enter") {
      handleONCAnimalModal();
    }
  };

  const numberRef = useRef(null);

  useEffect(() => {
    // inputRef.current?.focus();
    numberRef.current?.select();
  }, [animalModal]);

  return (
    <div className={"custom-modal"}>
      <input
        type="number"
        autoFocus={true}
        ref={numberRef}
        autoComplete="off"
        className="form-control dark-input mt-3 mb-3"
        value={animalNumber}
        onKeyDown={(e) => onEnter(e)}
        onChange={(e) => onChangeCustomAnimal(e)}
      />
      <div className="grid-container">
        {Object.keys(templates.G87.animals).map((key, index) => (
          <div
            key={index}
            className="grid-item"
            onClick={() => handlePickAnimal(key)}
          >
            <div className="d-block m-auto">
              <svg
                style={{ width: "182px" }}
                dangerouslySetInnerHTML={{
                  __html: templates.G87.animals[key].tag(23, 0, 0.8),
                }}
              ></svg>
            </div>
            <span>{key}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

const G87 = () => {
  const [customColor, setCustomColor] = useState(null);
  const handlePickColor = (color) => {
    setCustomColor(colors[color]);
    handleONCColorModal();

    handleONCAnimalModal();
  };

  const [customName, setCustomName] = useState("");
  const onChangeCustomName = (e) => {
    const value = e.target.value;
    setCustomName(value);
  };

  const [customText, setCustomText] = useState("");
  const onChangeCustomText = (e) => {
    const value = e.target.value;

    setCustomText(value.replace("&", "&amp;"));
  };

  const [animalNumber, setAnimalNumber] = useState("");
  const handlePickAnimal = (animalNumber) => {
    setAnimalNumber(animalNumber);
    handleONCAnimalModal();
  };

  const onChangeCustomAnimal = (e) => {
    const value = e.target.value;
    // const intValue = parseInt(value);
    // if (0 < intValue && intValue <= 30)
    setAnimalNumber(value);
  };

  const [colorModal, setColorModal] = useState(false);
  const handleONCColorModal = () => setColorModal(!colorModal);

  const [animalModal, setAnimalModal] = useState(false);
  const handleONCAnimalModal = () => {
    setAnimalModal(!animalModal);
  };

  useEffect(() => {
    sizeRef.current?.focus();
  }, [animalModal]);

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

  const generateG87 = () => {
    if (!customColor) return;

    const styling = () => {
      switch (customSize) {
        case "S":
          return templates.G87.sizeSStyles;
        case "M":
          return templates.G87.sizeMStyles;
        case "L":
          return templates.G87.sizeLStyles;
        default:
          break;
      }
    };

    const sizing = () => {
      // if (animalNumber.length <= 0) {
      //   if (Math.round(Math.random()) === 0) setAnimalNumber("12");
      //   else setAnimalNumber("14");
      // }

      switch (customSize) {
        case "S":
          return (
            templates.G87.animals[animalNumber].tag(900, 360, 1) +
            templates.G87.sizeS(
              customName,
              customText,
              `# ${animalNumber}`,
              customColor
            )
          );

        case "M":
          return (
            templates.G87.animals[animalNumber].tag(860, 500, 1.4) +
            templates.G87.sizeM(
              customName,
              customText,
              `# ${animalNumber}`,
              customColor
            )
          );
        case "L":
          return (
            templates.G87.animals[animalNumber].tag(800, 600, 1.69) +
            templates.G87.sizeL(
              customName,
              customText,
              `# ${animalNumber}`,
              customColor
            )
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
      <Modal open={animalModal} onClose={handleONCAnimalModal}>
        <div>
          <PickAnimalModal
            animalModal={animalModal}
            animalNumber={animalNumber}
            onChangeCustomAnimal={onChangeCustomAnimal}
            handlePickAnimal={handlePickAnimal}
            handleONCAnimalModal={handleONCAnimalModal}
          />
        </div>
      </Modal>
      <PickColorModal
        colorModal={colorModal}
        handlePickColor={handlePickColor}
        handleONCColorModal={handleONCColorModal}
      />

      <div className="w-100 d-flex mb-3 pointer" onClick={handleONCColorModal}>
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
              onClick={handleONCColorModal}
              onChange={() => {}}
            />
          </>
        ) : (
          <button className="w-100 btn btn-secondary">Pick Color</button>
        )}
      </div>
      <div className="w-100 d-flex mb-3 pointer" onClick={handleONCAnimalModal}>
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
                onClick={handleONCAnimalModal}
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
        className="btn btn-secondary"
        onClick={() => {
          navigator.clipboard.writeText(generateG87());
          resetCustom();
        }}
      >
        Get code
      </button>
    </div>
  );
};

export default G87;
