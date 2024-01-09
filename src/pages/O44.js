import React, { useEffect, useState } from "react";
import { templates } from "../configs/templates";
import { isSpecialChars } from "../configs/constants";

export const havingWords = (string, word) => {
  const index = string.toLowerCase().indexOf(word);
  // console.log(string, word, index);

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
          }
        } else {
          console.log("just ", word);
          return true;
        }
      } else {
        if (prevChar) {
          if (isSpecialChars(prevChar)) {
          } else {
            // console.log("just ", word);
            // return true;
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
  const blacklist = ["name", "names", "year"];

  if (
    blacklist.indexOf(name.toLowerCase()) > -1 ||
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

        if (element[o].toUpperCase() === element[o] && isNaN(element[o])) {
          name += element[o];
          heading = true;
        }
      }
    }
  }

  return { boy, girl, cat, dog };
};

export const handleCount = (names) => {
  if (typeof names === "string") {
    const nameArray =
      (names.trim().match(/\n/g) || []).length > 1
        ? names.trim().split("\n")
        : names.trim().split(",");

    return nameArray.filter((ele) => ele.length > 0).length;
  } else return names.length;
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

  const [defaultYear] = useState(new Date().getFullYear());
  const [defaultTitle] = useState("Merry Christmas");

  const [year, setYear] = useState("");
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
    male: ["boy", "boys", "male", "son", "man", "men", "human"],
    female: ["girl", "girls", "female", "daughter", "woman", "women"],
    meow: ["cat", "cats", "head", "heads"],
    gaw: ["dog", "dogs", "bone", "bones"],
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
    let isInvalidTitle = true;

    if ((newTitle.match(/ /g) || []).length > 0) {
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
    }

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
      handleCount(boyNames) +
      handleCount(girlNames) +
      handleCount(catNames) +
      handleCount(dogNames);
    // console.log("numNames", numNames);

    if (numNames < 7) setCustomSize(0);
    else setCustomSize(1);
  }, [boyNames, catNames, dogNames, girlNames]);

  const getCode = () => {
    let position = { x: 0, y: 0 };
    let body = "";

    const percent = parseInt(customSize) === 0 ? 1 : 150 / 115;

    body += templates.O44.front(
      position.x,
      position.y,
      percent,
      title.replace("&", "&amp;"),
      year
    );

    position.x += templates.O44.frontParam.W;

    body += templates.O44.koson(position.x, position.y - 13);
    position.y += templates.O44.kosonParam.H;

    const handleAppendBody = (names, type) => {
      if (names.length === 0) return;

      if (typeof names === "string") {
        const nameArray =
          (names.match(/\n/g) || []).length > 1
            ? names.split("\n")
            : names.split(",");

        for (let index = 0; index < nameArray.length; index++) {
          if (nameArray[index].trim().length > 0) {
            body += templates.O44[type](
              position.x,
              position.y,
              nameArray[index]
            );
            position.y += templates.O44[`${type}Param`].H;
          }
        }
      } else {
        for (let index = 0; index < names.length; index++) {
          body += templates.O44[type](position.x, position.y, names[index]);
          position.y += templates.O44[`${type}Param`].H;
        }
      }
    };

    handleAppendBody(boyNames, "male");
    handleAppendBody(girlNames, "female");
    handleAppendBody(catNames, "cat");
    handleAppendBody(dogNames, "dog");

    return `<svg xmlns="http://www.w3.org/2000/svg">
      ${body}
    </svg>`;
  };

  const reset = () => {
    setCustomSize(0);
    setYear("");
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
        src="https://i.etsystatic.com/28538313/r/il/81ce18/5416820761/il_794xN.5416820761_qzmg.jpg"
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
          <option value={0}>1 - 6 names</option>
          <option value={1}>7 - 10 names</option>
        </select>
        <div className="row d-flex flex-row justify-content-between">
          <div className="col g-3 align-items-center mb-3 me-5">
            <label
              htmlFor="year"
              className="form-label col-auto col-form-label"
            >
              Year
            </label>
            <textarea
              type="text"
              id="year"
              className={`form-control col-auto`}
              autoComplete="off"
              value={year}
              // placeholder={defaultYear}
              onChange={(e) => onChangeYear(e)}
            />
          </div>

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

export default O44;
