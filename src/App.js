import logo from "./logo.svg";
import "./App.css";
import { templates } from "./configs/templates";
import { colors } from "./configs/constants";
import { useState } from "react";
import { Modal } from "@mui/material";

const O50Generator = () => {
  const [bigInput, setBigInput] = useState("");
  const onChangeBigInput = (e) => {
    const value = e.target.value;
    setBigInput(value);
  };

  const [smallInput, setSmallInput] = useState("");
  const onChangeSmallInput = (e) => {
    const value = e.target.value;
    setSmallInput(value);
  };

  const [splitByWhom, setSplitByWhom] = useState(0);
  const onChangeSplitByWhom = (e) => {
    setSplitByWhom(parseInt(e.target.value));
  };

  const generate = () => {
    const bigArray = bigInput.split(",");

    let smallArray =
      splitByWhom === 0 ? smallInput.split(",") : smallInput.split("\n");

    smallArray = smallArray.filter((ele) => ele.length > 0);

    let body = "";
    const bigTranslate = { x: 0, y: 0 };
    const smallTranslate = { x: templates.O50.bigHeartTransform.W, y: 0 };

    let maxSmallInRow = 1;
    let smallCurrentIndex = 0;

    for (let index = 0; index < bigArray.length; index++) {
      body += templates.O50.bigHeart(
        bigTranslate.x,
        bigTranslate.y,
        bigArray[index]
      );
      bigTranslate.y += templates.O50.bigHeartTransform.H;
    }

    for (let index = 0; index < smallArray.length; index++) {
      if (smallCurrentIndex < maxSmallInRow) {
        body += templates.O50.smallHeart(
          smallTranslate.x,
          smallTranslate.y,
          smallArray[index]
        );
        smallTranslate.x += templates.O50.smallHeartTransform.W;
        smallCurrentIndex++;
      } else {
        smallTranslate.x = templates.O50.bigHeartTransform.W;
        smallTranslate.y += templates.O50.smallHeartTransform.H;
        body += templates.O50.smallHeart(
          smallTranslate.x,
          smallTranslate.y,
          smallArray[index]
        );

        smallTranslate.x += templates.O50.smallHeartTransform.W;
        smallCurrentIndex = 1;
      }
    }

    return `<svg xmlns="http://www.w3.org/2000/svg">
      <defs>
        <style>
          ${templates.O50.bigHeartStyles}
          ${templates.O50.smallHeartStyles}
          ${templates.O50.whiteFlagStyles}
        </style>
      </defs>
      ${body}
      ${templates.O50.whiteFlag(0, -20)} 
    </svg>`;
  };

  const generateO50 = () => {
    const bigArray = bigInput
      .split(",")
      .filter((ele) => ele.length > 0)
      .map((ele) => (ele.indexOf(".") > -1 ? ele.replace(/\s/g, "") : ele));

    let smallArray =
      splitByWhom === 0 ? smallInput.split(",") : smallInput.split("\n");

    smallArray = smallArray.filter((ele) => ele.length > 0);

    let body = "";
    const bigTranslate = { x: 0, y: 0 };

    for (let index = 0; index < bigArray.length; index++) {
      body += templates.O50.bigHeart(
        bigTranslate.x,
        bigTranslate.y,
        bigArray[index]
      );
      bigTranslate.y += templates.O50.bigHeartTransform.H;
    }

    const smallTranslate = { x: 0, y: bigTranslate.y };

    for (let index = 0; index < smallArray.length; index++) {
      body += templates.O50.smallHeart(
        smallTranslate.x,
        smallTranslate.y,
        smallArray[index]
      );
      smallTranslate.y += templates.O50.smallHeartTransform.H;
    }

    return `<svg xmlns="http://www.w3.org/2000/svg">
      <defs>
        <style>
          ${templates.O50.bigHeartStyles}
          ${templates.O50.smallHeartStyles}
          ${templates.O50.whiteFlagStyles}
        </style>
      </defs>
      <text style="font-family: 'Roller Skates Regular';" transform="translate(20,-40)">
        ${"trai tim"}
      </text>

      ${body}
      ${templates.O50.whiteFlag(0, -30)} 
    </svg>`;
  };

  return (
    <>
      <div className="row g-3 align-items-center mb-3">
        <label
          htmlFor="big-hearts"
          className="form-label col-auto col-form-label"
        >
          Big hearts
        </label>
        <textarea
          type="text"
          id="big-hearts"
          className={`form-control col-auto`}
          autoComplete="off"
          value={bigInput}
          onChange={(e) => onChangeBigInput(e)}
        />
      </div>
      <div className="row g-3 align-items-center mb-3">
        <label
          htmlFor="small-hearts"
          className="form-label col-auto col-form-label"
        >
          Small hearts
        </label>
        <textarea
          type="text"
          id="small-hearts"
          className={`form-control col-auto`}
          autoComplete="off"
          value={smallInput}
          onChange={(e) => onChangeSmallInput(e)}
        />
        <select
          className="form-control form-select col-auto"
          onChange={(e) => onChangeSplitByWhom(e)}
          value={splitByWhom}
        >
          <option value={0}>Split by Comma</option>
          <option value={1}>Split by New line</option>
        </select>
      </div>

      <button
        className="btn btn-secondary"
        onClick={() => {
          navigator.clipboard.writeText(generateO50());
        }}
      >
        Generate
      </button>
    </>
  );
};

const G87Generator = () => {
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

  const generateG87 = () => {
    return `<svg xmlns="http://www.w3.org/2000/svg">
      <defs>
        <style>
          ${templates.G87.sizeSStyles}
        </style>
      </defs>
      ${templates.G87.animals[animalNumber].tag(900, 400, 1)}
      ${templates.G87.sizeS(customName, customText, customColor, "#00FFE0")}
    </svg>`;
  };

  const [colorModal, setColorModal] = useState(false);
  const handleONCColorModal = () => setColorModal(!colorModal);

  const [animalModal, setAnimalModal] = useState(false);
  const handleONCAnimalModal = () => setAnimalModal(!animalModal);

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
      <Modal open={colorModal} onClose={handleONCColorModal}>
        <div className={"custom-modal"}>
          <div className="grid-container">
            {Object.keys(templates.G87.animals).map((key, index) => (
              <div
                key={index}
                className="grid-item"
                onClick={() => handlePickAnimal(key)}
              >
                <div>
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
        onClick={handleONCColorModal}
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

const App = () => {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        {/* <O50Generator /> */}
        <G87Generator />
      </header>
    </div>
  );
};

export default App;
