import React, { useEffect, useState } from "react";
import { templates } from "../configs/templates";

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

  const isSpecialChars = (str) => {
    const specialChars = /[`!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?~ •]/;
    return specialChars.test(str);
  };

  const male = ["boy", "male", "son", "man"];
  const female = ["girl", "female", "daughter", "woman"];
  const meow = ["cat", "head"];
  const gaw = ["dog", "bone"];

  const sorting = (name, string, boy, girl, cat, dog) => {
    // console.log(name, female.indexOf(name.toLowerCase()));

    if (
      meow.indexOf(name.toLowerCase()) > -1 ||
      gaw.indexOf(name.toLowerCase()) > -1 ||
      male.indexOf(name.toLowerCase()) > -1 ||
      female.indexOf(name.toLowerCase()) > -1
    )
      return;

    // const isGaw = gaw.some((a) => string.toLowerCase().includes(a));
    // const isGirl = female.some((a) => string.toLowerCase().includes(a));
    // const isBoy = male.some((a) => string.toLowerCase().includes(a));
    // const isMeow = meow.some((a) => string.toLowerCase().includes(a));

    // console.log(name, isBoy, isGirl, isMeow, isGaw);

    let isMeow = false;
    console.log("string >>>>", string, ", name >>>>", name);

    let isPushed = false;
    meow.forEach((ele) => {
      if (isPushed) return;

      const meowIndex = string.toLowerCase().indexOf(ele);
      console.log("meowIndex", meowIndex);
      if (meowIndex > -1) {
        const nextChar = string[meowIndex + ele.length];
        const prevChar = string[meowIndex - 1];

        console.log(
          "meow",
          nextChar,
          isSpecialChars(nextChar),
          prevChar,
          isSpecialChars(prevChar)
        );

        if (nextChar) {
          if (isSpecialChars(nextChar)) {
            if (prevChar) {
              if (isSpecialChars(prevChar)) {
                console.log("just cat", name);
                cat.push(name);
                isMeow = true;
                isPushed = true;
              } else {
                console.log("if nextChar not prevChar", name);
              }
            } else {
              console.log("just cat", name);
              cat.push(name);
              isMeow = true;
              isPushed = true;
            }
          } else {
            if (prevChar) {
              if (isSpecialChars(prevChar)) {
                console.log("just cat", name);
                cat.push(name);
                isMeow = true;
                isPushed = true;
              }
            } else {
              console.log("else prevChar", name);
            }
          }
        } else {
          if (prevChar) {
            if (isSpecialChars(prevChar)) {
              console.log("just cat", name);
              cat.push(name);
              isMeow = true;
              isPushed = true;
            }
          } else {
            console.log("else prevChar", name);
          }
        }

        // if (nextChar || prevChar) {
        //   if (isSpecialChars(nextChar) || isSpecialChars(prevChar)) {
        //     // if (!(isSpecialChars(nextChar) || isSpecialChars(prevChar))) {
        //     cat.push(name);
        //     isMeow = true;
        //   }
        // }
      }
    });

    if (isMeow) return;

    const isGaw = gaw.some((a) => string.toLowerCase().includes(a));
    if (isGaw) {
      dog.push(name);
      return;
    }

    const isGirl = female.some((a) => string.toLowerCase().includes(a));
    if (isGirl) {
      girl.push(name);
      return;
    }

    const isBoy = male.some((a) => string.toLowerCase().includes(a));
    if (isBoy) {
      boy.push(name);
      return;
    }

    boy.push(name);

    name = "";
  };

  const validateTitle = (array, title) => {
    let isValid = true;

    const numSpaces = (title.match(/ /g) || []).length > 0;
    if (!numSpaces) return false;

    array.forEach((ele) => {
      const meowIndex = title.toLowerCase().indexOf(ele);
      console.log("array.forEach(", title.toLowerCase(), meowIndex);

      if (meowIndex > -1) {
        const nextChar = title[meowIndex + ele.length];
        const prevChar = title[meowIndex - 1];

        if (nextChar) {
          if (isSpecialChars(nextChar)) {
            if (prevChar) {
              if (isSpecialChars(prevChar)) {
                console.log("just male");
                isValid = false;
              } else {
              }
            } else {
              console.log("just male");
              isValid = false;
            }
          } else {
            if (prevChar) {
              if (isSpecialChars(prevChar)) {
                console.log("just male");
                isValid = false;
              }
            } else {
            }
          }
        } else {
          if (prevChar) {
            if (isSpecialChars(prevChar)) {
              console.log("just male");
              isValid = false;
            }
          } else {
          }
        }
      }
    });

    return isValid;
  };

  const sortData = () => {
    let title = "";
    let boy = [];
    let girl = [];
    let cat = [];
    let dog = [];

    // (personalization.match(/,/g) || []).length > 0;

    const pern = personalization.trim();
    let entry =
      (pern.match(/\n/g) || []).length > 1 ? pern.split("\n") : pern.split(",");

    console.log("entry", (personalization.match(/\n/g) || []).length, entry);

    const entryLength = entry.length;

    // having more than 1 space
    // if ((entry[0].match(/ /g) || []).length > 0) {

    const newTitle = entry[0];

    // console.log("newTitle", newTitle);

    let isValidTitle = validateTitle(male, newTitle);

    if (isValidTitle) isValidTitle = validateTitle(female, newTitle);

    console.log("isValidTitle", isValidTitle);
    let index = 0;

    if (isValidTitle) {
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

    for (let i = index; i < entryLength; i++) {
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
              sorting(name, element, boy, girl, cat, dog);
              name = "";
            }
          } else {
            if (o === element.length - 1) {
              name += element[o];
              if (isNaN(name)) {
                sorting(name, element, boy, girl, cat, dog);
                name = "";
              }
            } else {
              name += element[o];
            }
          }
        } else {
          if (isSpecialChars(element[o])) {
            continue;
          }

          if (element[o].toUpperCase() === element[o]) {
            name += element[o];
            heading = true;
          }
        }
      }

      // console.log("name:", name);
    }

    // console.log(entry);
    // console.log("\n");
    // console.log(title, boy, girl, cat, dog);

    if (title.length > 0) setTitle(title);
    else setTitle(defaultTitle);

    setBoyNames(boy);
    setGirlNames(girl);
    setCatNames(cat);
    setDogNames(dog);
  };

  useEffect(() => {
    const numNames =
      boyNames.length + girlNames.length + catNames.length + dogNames.length;
    // console.log("numNames", numNames);

    if (numNames < 7) setCustomSize("0");
    else setCustomSize("1");
  }, [boyNames.length, catNames.length, dogNames.length, girlNames.length]);

  const getCode = () => {
    const position = { x: 0, y: 0 };

    let body = "";

    const percent = parseInt(customSize) === 0 ? 1 : 150 / 115;

    body += templates.O44.front(position.x, position.y, percent, title);
    position.x += templates.O44.frontParam.W;

    body += templates.O44.koson(position.x, position.y, 1, title);
    position.y += templates.O44.kosonParam.H;

    if (typeof boyNames === "string") {
      const boyNs =
        (boyNames.match(/\n/g) || []).length > 1
          ? boyNames.split("\n")
          : boyNames.split(",");

      for (let index = 0; index < boyNs.length; index++) {
        if (boyNs[index].trim().length > 0) {
          body += templates.O44.male(position.x, position.y, boyNs[index]);
          position.y += templates.O44.maleParam.H;
        }
      }
    } else {
      for (let index = 0; index < boyNames.length; index++) {
        body += templates.O44.male(position.x, position.y, boyNames[index]);
        position.y += templates.O44.maleParam.H;
      }
    }

    if (typeof girlNames === "string") {
      const girlNs =
        (girlNames.match(/\n/g) || []).length > 1
          ? girlNames.split("\n")
          : girlNames.split(",");

      console.log("girlNs", girlNs);
      for (let index = 0; index < girlNs.length; index++) {
        if (girlNs[index].trim().length > 0) {
          body += templates.O44.female(position.x, position.y, girlNs[index]);
          position.y += templates.O44.femaleParam.H;
        }
      }
    } else {
      for (let index = 0; index < girlNames.length; index++) {
        body += templates.O44.female(position.x, position.y, girlNames[index]);
        position.y += templates.O44.femaleParam.H;
      }
    }

    if (typeof catNames === "string") {
      const catNs =
        (catNames.match(/\n/g) || []).length > 1
          ? catNames.split("\n")
          : catNames.split(",");

      for (let index = 0; index < catNs.length; index++) {
        if (catNs[index].trim().length > 0) {
          body += templates.O44.cat(position.x, position.y, catNs[index]);
          position.y += templates.O44.catParam.H;
        }
      }
    } else {
      for (let index = 0; index < catNames.length; index++) {
        body += templates.O44.cat(position.x, position.y, catNames[index]);
        position.y += templates.O44.catParam.H;
      }
    }

    if (typeof dogNames === "string") {
      const dogNs =
        (dogNames.match(/\n/g) || []).length > 1
          ? dogNames.split("\n")
          : dogNames.split(",");

      for (let index = 0; index < dogNs.length; index++) {
        if (dogNs[index].trim().length > 0) {
          body += templates.O44.dog(position.x, position.y, dogNs[index]);
          position.y += templates.O44.dogParam.H;
        }
      }
    } else {
      for (let index = 0; index < dogNames.length; index++) {
        body += templates.O44.dog(position.x, position.y, dogNames[index]);
        position.y += templates.O44.dogParam.H;
      }
    }

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
