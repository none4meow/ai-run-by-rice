import React, { useEffect, useState } from "react";
import { templates } from "../configs/templates";
import { isSpecialChars } from "../configs/constants";

export const havingWords = (string, word) => {
  const index = string.toLowerCase().indexOf(word);

  if (index > -1) {
    const nextChar = string[index + word.length];
    const prevChar = string[index - 1];

    // console.log(nextChar, isSpecialChars(nextChar));
    // console.log(prevChar, isSpecialChars(prevChar));

    if (nextChar) {
      if (isSpecialChars(nextChar)) {
        if (prevChar) {
          if (isSpecialChars(prevChar)) {
            console.log("just ", word);

            return true;
          } else {
            console.log("if nextChar not prevChar");
          }
        } else {
          console.log("just ", word);
          return true;
        }
      } else {
        if (prevChar) {
          if (isSpecialChars(prevChar)) {
            console.log("just ", word);
            return true;
          }
        } else {
          console.log("else prevChar");
        }
      }
    } else {
      if (prevChar) {
        if (isSpecialChars(prevChar)) {
          console.log("just ", word);
          return true;
        }
      } else {
        console.log("else else prevChar");
      }
    }

    return false;
  }
};

export const handleSort = (name, string, keys, boy, girl, cat, dog) => {
  if (
    keys.meow.indexOf(name.toLowerCase()) > -1 ||
    keys.gaw.indexOf(name.toLowerCase()) > -1 ||
    keys.male.indexOf(name.toLowerCase()) > -1 ||
    keys.female.indexOf(name.toLowerCase()) > -1
  )
    return;

  console.log("string >>>>", string, ", name >>>>", name);

  let isHaving = keys.meow.some((ele) => havingWords(string, ele));
  if (isHaving) {
    cat.push(name);
    return;
  }

  isHaving = keys.gaw.some((ele) => havingWords(string, ele));
  if (isHaving) {
    dog.push(name);
    return;
  }

  isHaving = keys.female.some((ele) => havingWords(string, ele));
  if (isHaving) {
    girl.push(name);
    return;
  }

  isHaving = keys.male.some((ele) => havingWords(string, ele));
  if (isHaving) {
    boy.push(name);
    return;
  }

  boy.push(name);
};

export const sortNames = (index, entry, keys) => {
  let boy = [];
  let girl = [];
  let cat = [];
  let dog = [];

  for (let i = index; i < entry.length; i++) {
    // for(let i = index; i < 3;i++){
    const element = entry[i].trim();

    let name = "";
    let heading = false;
    console.log("element >>>>", element, "\n");

    for (let o = 0; o < element.length; o++) {
      // console.log(o, element[o], heading, isSpecialChars(element[o]));

      if (heading === true) {
        if (isSpecialChars(element[o])) {
          heading = false;

          if (isNaN(name)) {
            handleSort(name, element, keys, boy, girl, cat, dog);
            name = "";
          }
        } else {
          if (o === element.length - 1) {
            name += element[o];

            if (isNaN(name)) {
              handleSort(name, element, keys, boy, girl, cat, dog);
              name = "";
            }
          } else name += element[o];
        }
      } else {
        if (isSpecialChars(element[o])) continue;

        if (element[o].toUpperCase() === element[o]) {
          name += element[o];
          heading = true;
        }
      }
    }
  }

  return { boy, girl, cat, dog };
};

const O44 = () => {
  const [personalization, setPersonalization] = useState("");
  const onChangePersonalization = (e) => {
    const value = e.target.value;
    setPersonalization(value);
  };

  const [sizes] = useState([0, 1]);
  const [customSize, setCustomSize] = useState(sizes[0]);
  const onChangeCustomSize = (e) => {
    const value = e.target.value;
    setCustomSize(value);
  };

  const [defaultYear] = useState("2023");
  const [defaultTitle] = useState("Merry Christmas");

  const [year, setYear] = useState(defaultYear);
  const onChangeYear = (e) => {
    const value = e.target.value;
    setYear(value);
  };

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
    meow: ["cat", "head"],
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

    console.log("entry", (personalization.match(/\n/g) || []).length, entry);

    const newTitle = entry[0];

    // console.log("newTitle", newTitle);

    let isInvalidTitle = keys.male.some((ele) => havingWords(newTitle, ele));

    if (!isInvalidTitle)
      isInvalidTitle = keys.female.some((ele) => havingWords(newTitle, ele));

    console.log("isInvalidTitle", isInvalidTitle);
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
      boyNames.length + girlNames.length + catNames.length + dogNames.length;
    // console.log("numNames", numNames);

    if (numNames < 7) setCustomSize(0);
    else setCustomSize(1);
  }, [boyNames.length, catNames.length, dogNames.length, girlNames.length]);

  const handleAppendBody = (names, body, position, tag, param) => {
    if (typeof names === "string") {
      const nameArray =
        (names.match(/\n/g) || []).length > 1
          ? names.split("\n")
          : names.split(",");

      for (let index = 0; index < nameArray.length; index++) {
        if (nameArray[index].trim().length > 0) {
          body += tag(position.x, position.y, nameArray[index]);
          position.y += param.H;
        }
      }
    } else {
      for (let index = 0; index < names.length; index++) {
        body += tag(position.x, position.y, names[index]);
        position.y += param.H;
      }
    }
  };

  const getCode = () => {
    const position = { x: 0, y: 0 };

    let body = "";

    const percent = parseInt(customSize) === 0 ? 1 : 150 / 115;

    body += templates.O44.front(position.x, position.y, percent, title);
    position.x += templates.O44.frontParam.W;

    body += templates.O44.koson(position.x, position.y, 1, title);
    position.y += templates.O44.kosonParam.H;

    handleAppendBody(
      boyNames,
      body,
      position,
      templates.O44.male,
      templates.O44.maleParam
    );

    handleAppendBody(
      girlNames,
      body,
      position,
      templates.O44.female,
      templates.O44.femaleParam
    );

    handleAppendBody(
      catNames,
      body,
      position,
      templates.O44.cat,
      templates.O44.catParam
    );

    handleAppendBody(
      dogNames,
      body,
      position,
      templates.O44.dog,
      templates.O44.dogParam
    );

    return `<svg xmlns="http://www.w3.org/2000/svg">
      ${body}
    </svg>`;
  };

  const reset = () => {
    setCustomSize(0);
    setYear(defaultYear);
    setTitle(defaultTitle);
    setBoyNames("");
    setGirlNames("");
    setCatNames("");
    setDogNames("");
    setPersonalization("");
  };

  return (
    <div style={{ width: "80vw", paddingTop: "234px" }}>
      <div className="row g-3 align-items-center mb-3">
        <label
          htmlFor="personalization"
          className="form-label col-auto col-form-label"
        >
          Personalization
        </label>
        <textarea
          style={{
            height: "234px",
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
        <option value={0}>1 - 6 names</option>
        <option value={1}>7 - 10 names</option>
      </select>
      <div className="row d-flex flex-row justify-content-between">
        <div className="col g-3 align-items-center mb-3 me-5">
          <label htmlFor="year" className="form-label col-auto col-form-label">
            Year
          </label>
          <textarea
            type="text"
            id="year"
            className={`form-control col-auto`}
            autoComplete="off"
            value={year}
            placeholder={defaultYear}
            onChange={(e) => onChangeYear(e)}
          />
        </div>

        <div className="col g-3 align-items-center mb-3">
          <label htmlFor="title" className="form-label col-auto col-form-label">
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
  );
};

export default O44;
