import React, { useState } from "react";
import { templates } from "../configs/templates";

const O50 = () => {
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

    let maxSmallInRow = 5;
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

      <text style="font-family: 'Roller Skates Regular';" transform="translate(20,-40)">
        ${"trai tim"}
      </text>
      ${body}
      ${templates.O50.whiteFlag(0, -30)} 
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

    // const asd = (
    //   <text
    //     style="font-family: 'Roller Skates Regular';"
    //     transform="translate(20,-40)"
    //   >
    //     ${"trai tim"}
    //   </text>
    // );

    return `<svg xmlns="http://www.w3.org/2000/svg">
      <defs>
        <style>
          ${templates.O50.bigHeartStyles}
          ${templates.O50.smallHeartStyles}
          ${templates.O50.whiteFlagStyles}
        </style>
      </defs>
      ${body}
      ${templates.O50.whiteFlag(0, -30)} 
    </svg>`;
  };

  return (
    <div>
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
    </div>
  );
};

export default O50;
