import React, { useEffect, useState } from "react";
import { templates } from "../configs/templates";
import { Regex } from "../configs/constants";

const O50 = () => {
  const [bigInput, setBigInput] = useState("");
  const onChangeBigInput = (e) => {
    const value = e.target.value;
    setBigInput(value);
  };

  const [hasSpecialChars, setHasSpecialChars] = useState(false);

  const [smallInput, setSmallInput] = useState("");
  const onChangeSmallInput = (e) => {
    const value = e.target.value;
    setSmallInput(value);
  };

  useEffect(() => {
    const hasSpecial = Regex.hasSpecialChars.test(smallInput);
    setHasSpecialChars(hasSpecial);
  }, [smallInput]);

  // const [splitByWhom, setSplitByWhom] = useState(0);
  // const onChangeSplitByWhom = (e) => {
  //   setSplitByWhom(parseInt(e.target.value));
  // };

  // const getCode = () => {
  //   const bigArray = bigInput.split(",");

  //   let smallArray =
  //     splitByWhom === 0 ? smallInput.split(",") : smallInput.split("\n");

  //   smallArray = smallArray.filter((ele) => ele.length > 0);

  //   let body = "";
  //   const bigTranslate = { x: 0, y: 0 };
  //   const smallTranslate = { x: templates.O50.bigHeartParam.W, y: 0 };

  //   let maxSmallInRow = 5;
  //   let smallCurrentIndex = 0;

  //   for (let index = 0; index < bigArray.length; index++) {
  //     body += templates.O50.bigHeart(
  //       bigTranslate.x,
  //       bigTranslate.y,
  //       bigArray[index]
  //     );
  //     bigTranslate.y += templates.O50.bigHeartParam.H;
  //   }

  //   for (let index = 0; index < smallArray.length; index++) {
  //     if (smallCurrentIndex < maxSmallInRow) {
  //       body += templates.O50.smallHeart(
  //         smallTranslate.x,
  //         smallTranslate.y,
  //         smallArray[index]
  //       );
  //       smallTranslate.x += templates.O50.smallHeartParam.W;
  //       smallCurrentIndex++;
  //     } else {
  //       smallTranslate.x = templates.O50.bigHeartParam.W;
  //       smallTranslate.y += templates.O50.smallHeartParam.H;
  //       body += templates.O50.smallHeart(
  //         smallTranslate.x,
  //         smallTranslate.y,
  //         smallArray[index]
  //       );

  //       smallTranslate.x += templates.O50.smallHeartParam.W;
  //       smallCurrentIndex = 1;
  //     }
  //   }

  //   return `<svg xmlns="http://www.w3.org/2000/svg">
  //     <defs>
  //       <style>
  //         ${templates.O50.bigHeartStyles}
  //         ${templates.O50.smallHeartStyles}
  //         ${templates.O50.whiteFlagStyles}
  //       </style>
  //     </defs>

  //     <text style="font-family: 'Roller Skates Regular';" transform="translate(20,-40)">
  //       ${"trai tim"}
  //     </text>
  //     ${body}
  //     ${templates.O50.whiteFlag(0, -30)}
  //   </svg>`;
  // };

  const getCode = () => {
    let bigArray =
      (bigInput.match(/,/g) || []).length > 0
        ? bigInput.trim().split(",")
        : bigInput.trim().split("\n");

    bigArray = bigArray
      .map((ele) => (ele.indexOf(".") > -1 ? ele.replace(/\s/g, "") : ele))
      .filter((ele) => ele.length > 0);

    let smallArray =
      (smallInput.match(/,/g) || []).length > 0
        ? smallInput.trim().split(",")
        : smallInput.trim().split("\n");

    smallArray = smallArray.filter((ele) => ele.length > 0);

    let body = "";
    const bigTranslate = { x: 0, y: 0 };

    for (let index = 0; index < bigArray.length; index++) {
      body += templates.O50.bigHeart(
        bigTranslate.x,
        bigTranslate.y,
        bigArray[index]
      );
      bigTranslate.y += templates.O50.bigHeartParam.H;
    }

    const smallTranslate = { x: 0, y: bigTranslate.y };

    for (let index = 0; index < smallArray.length; index++) {
      body += templates.O50.smallHeart(
        smallTranslate.x,
        smallTranslate.y,
        smallArray[index]
      );
      smallTranslate.y += templates.O50.smallHeartParam.H;
    }

    return `<svg xmlns="http://www.w3.org/2000/svg">
      ${body}
      ${templates.O50.whiteFlag(0, -30)} 
    </svg>`;
  };

  const reset = () => {
    setBigInput("");
    setSmallInput("");
  };

  return (
    <>
      <img
        src="https://i.etsystatic.com/28538313/r/il/8fe7c5/5381785476/il_794xN.5381785476_16a8.jpg"
        alt=""
        style={{
          height: "fit-content",
          width: "280px",
          marginTop: "12px",
          borderRadius: "12px",
          // paddingTop: "234px",
        }}
      />
      <div style={{ width: "80vw" }}>
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
            autoFocus
            style={{ height: "90px" }}
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
            style={{ height: "220px" }}
          />
          {hasSpecialChars && (
            <small className="text-danger">* special chars</small>
          )}

          {/* <select
          className="form-control form-select col-auto"
          onChange={(e) => onChangeSplitByWhom(e)}
          value={splitByWhom}
        >
          <option value={0}>Split by Comma</option>
          <option value={1}>Split by New line</option>
        </select> */}
        </div>

        <button
          className="btn btn-secondary mb-5 w-100"
          onClick={() => {
            navigator.clipboard.writeText(getCode());
            reset();
          }}
        >
          Get code
        </button>
      </div>
    </>
  );
};

export default O50;
