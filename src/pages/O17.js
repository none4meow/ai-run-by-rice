import React, { useEffect, useState } from "react";
import { templates } from "../configs/templates";
import { isSpecialChars } from "../configs/constants";
import { handleCount, havingWords, sortNames } from "./O44";

const O17 = () => {
  const [personalization, setPersonalization] = useState("");
  const onChangePersonalization = (e) => {
    const value = e.target.value;
    setPersonalization(value);
  };

  const [sizes] = useState([0, 1, 2]);
  const [customSize, setCustomSize] = useState(sizes[0]);
  const onChangeCustomSize = (e) => {
    const value = e.target.value;
    setCustomSize(value);
  };

  const [defaultTitle] = useState("Merry Christmas");
  const [title, setTitle] = useState(defaultTitle);
  const onChangeTitle = (e) => {
    const value = e.target.value;
    setTitle(value);
  };

  const [boyNames, setBoyNames] = useState("");
  const onChangeBoyNames = (e) => {
    const value = e.target.value;
    setBoyNames(value);
  };

  const [girlNames, setGirlNames] = useState("");
  const onChangeGirlNames = (e) => {
    const value = e.target.value;
    setGirlNames(value);
  };

  const [catNames, setCatNames] = useState("");
  const onChangeCatNames = (e) => {
    const value = e.target.value;
    setCatNames(value);
  };

  const [dogNames, setDogNames] = useState("");
  const onChangeDogNames = (e) => {
    const value = e.target.value;
    setDogNames(value);
  };

  const [keys] = useState({
    male: ["boy", "male", "son", "man"],
    female: ["girl", "female", "daughter", "woman"],
    meow: ["cat", "fish"],
    gaw: ["dog", "bone"],
  });

  const handleSetNames = (res) => {
    setBoyNames(res.boy);
    setGirlNames(res.girl);
    setCatNames(res.cat);
    setDogNames(res.dog);
  };

  const sortData = () => {
    let title = "";

    // (personalization.match(/,/g) || []).length > 0;

    const pern = personalization.trim();
    let entry =
      (pern.match(/\n/g) || []).length > 1 ? pern.split("\n") : pern.split(",");

    const newTitle = entry[0];

    let isInvalidTitle = true;

    // if ((newTitle.match(/ /g) || []).length > 0)

    isInvalidTitle = keys.male.some((ele) => havingWords(newTitle, ele));

    if (!isInvalidTitle) {
      isInvalidTitle = keys.female.some((ele) => havingWords(newTitle, ele));

      if (!isInvalidTitle) {
        isInvalidTitle = keys.meow.some((ele) => havingWords(newTitle, ele));

        if (!isInvalidTitle) {
          isInvalidTitle = keys.gaw.some((ele) => havingWords(newTitle, ele));
        }
      }
    }

    let index = 0;
    if (!isInvalidTitle) {
      const titleIndex = newTitle.toLowerCase().indexOf("title");
      if (titleIndex > -1) {
        for (let i = titleIndex + 5; i < newTitle.length; i++) {
          if (isSpecialChars(newTitle[i])) continue;
          else {
            title = newTitle.substring(i);

            break;
          }
        }
      } else title = newTitle;

      index = 1;
    }

    if (title.length > 0) setTitle(title);
    else setTitle(defaultTitle);

    const res = sortNames(index, entry, keys);
    handleSetNames(res);
  };

  useEffect(() => {
    const numNames =
      handleCount(boyNames) +
      handleCount(girlNames) +
      handleCount(catNames) +
      handleCount(dogNames);

    if (numNames < 5) setCustomSize(0);
    else if (numNames < 10) setCustomSize(1);
    else setCustomSize(2);
  }, [boyNames, catNames, dogNames, girlNames]);

  const getCode = () => {
    let position = { x: 0, y: 0 };
    let body = "";

    let percent = 1;

    const size = parseInt(customSize);
    if (size === 1) percent = 150 / 120;
    else if (size === 2) percent = 180 / 120;

    body += templates.O17.roller(
      position.x,
      position.y,
      percent,
      title.replace("&", "&amp;")
    );
    position.x += templates.O17.rollerParam.W;

    body += templates.O17.board(position.x, position.y, percent);
    position.x += templates.O17.boardParam.W;

    body += templates.O17.vecny(position.x, position.y - 13);
    position.y += templates.O17.vecnyParam.H;

    const handleAppendBody = (names, type) => {
      if (names.length === 0) return;

      if (typeof names === "string") {
        const nameArray =
          (names.match(/\n/g) || []).length > 1
            ? names.split("\n")
            : names.split(",");

        for (let index = 0; index < nameArray.length; index++) {
          if (nameArray[index].trim().length > 0) {
            body += templates.O17[type](
              position.x,
              position.y,
              nameArray[index]
            );
            position.y += templates.O17[`${type}Param`].H;
          }
        }
      } else {
        for (let index = 0; index < names.length; index++) {
          body += templates.O17[type](position.x, position.y, names[index]);
          position.y += templates.O17[`${type}Param`].H;
        }
      }
    };

    handleAppendBody(boyNames, "cookie_1");
    handleAppendBody(girlNames, "cookie_2");
    handleAppendBody(catNames, "cat");
    handleAppendBody(dogNames, "dog");

    return `<svg xmlns="http://www.w3.org/2000/svg">
      ${body}
    </svg>`;
  };

  const reset = () => {
    setCustomSize(0);
    setTitle(defaultTitle);
    setBoyNames("");
    setGirlNames("");
    setCatNames("");
    setDogNames("");
    setPersonalization("");
  };

  return (
    <>
      <img
        src="https://i.etsystatic.com/28538313/r/il/519fbc/5461442463/il_794xN.5461442463_nzgo.jpg"
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
            htmlFor="personalization"
            className="form-label col-auto col-form-label"
          >
            Personalization
          </label>
          <textarea
            style={{
              height: "160px",
              position: "fixed",
              width: "80vw",
              top: "60px",
            }}
            type="text"
            id="personalization"
            className={`form-control col-auto`}
            autoComplete="off"
            value={personalization}
            autoFocus
            onChange={(e) => onChangePersonalization(e)}
          />
        </div>

        <button
          className="btn btn-secondary w-100"
          onClick={() => {
            sortData();
          }}
        >
          Sort personalization
        </button>

        <select
          className="form-control form-select col-auto mt-3"
          onChange={(e) => onChangeCustomSize(e)}
          value={customSize}
        >
          <option value={0}>1 - 4 names</option>
          <option value={1}>5 - 9 names</option>
          <option value={2}>10 - 12 names</option>
        </select>
        <div className="row d-flex flex-row justify-content-between">
          <div className="col g-3 align-items-center mb-3">
            <label
              htmlFor="title"
              className="form-label col-auto col-form-label"
            >
              Title
            </label>
            <textarea
              type="text"
              id="title"
              className={`form-control col-auto`}
              autoComplete="off"
              value={title}
              placeholder={defaultTitle}
              onChange={(e) => onChangeTitle(e)}
            />
          </div>
        </div>

        <div className="row d-flex flex-row justify-content-between">
          <div className="col g-3 align-items-center mb-3 me-5">
            <label
              htmlFor="boy-names"
              className="form-label col-auto col-form-label"
            >
              Boy names
            </label>
            <textarea
              type="text"
              id="boy-names"
              className={`form-control col-auto`}
              autoComplete="off"
              value={boyNames}
              onChange={(e) => onChangeBoyNames(e)}
            />
          </div>

          <div className="col g-3 align-items-center mb-3">
            <label
              htmlFor="girl-names"
              className="form-label col-auto col-form-label"
            >
              Girl names
            </label>
            <textarea
              type="text"
              id="girl-names"
              className={`form-control col-auto`}
              autoComplete="off"
              value={girlNames}
              onChange={(e) => onChangeGirlNames(e)}
            />
          </div>
        </div>

        <div className="row d-flex flex-row justify-content-between">
          <div className="col g-3 align-items-center mb-3 me-5">
            <label
              htmlFor="cat-names"
              className="form-label col-auto col-form-label"
            >
              Cat names
            </label>
            <textarea
              type="text"
              id="cat-names"
              className={`form-control col-auto`}
              autoComplete="off"
              value={catNames}
              onChange={(e) => onChangeCatNames(e)}
            />
          </div>
          <div className="col g-3 align-items-center mb-3">
            <label
              htmlFor="dog-names"
              className="form-label col-auto col-form-label"
            >
              Dog names
            </label>
            <textarea
              type="text"
              id="dog-names"
              className={`form-control col-auto`}
              autoComplete="off"
              value={dogNames}
              onChange={(e) => onChangeDogNames(e)}
            />
          </div>
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

export default O17;
