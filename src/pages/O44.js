import React, { useState } from "react";

const O44 = () => {
  const [personalization, setPersonalization] = useState("");
  const onChangePersonalization = (e) => {
    const value = e.target.value;
    setPersonalization(value);
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
    const specialChars = /[`!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?~ ]/;
    return specialChars.test(str);
  };

  const male = ["boy", "male", "son", "man"];
  const female = ["girl", "female", "daughter", "woman"];
  const meow = ["cat"];
  const gaw = ["dog", "bone"];

  const sorting = (name, string, boy, girl, cat, dog) => {
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

    meow.forEach((ele) => {
      const meowIndex = string.indexOf(ele);
      if (meowIndex > 1) {
        // console.log(
        //   "meow",
        //   meowIndex,
        //   name[meowIndex + ele.length],
        //   isSpecialChars(name[meowIndex + ele.length])
        // );
        const nextChar = name[meowIndex + ele.length];
        const prevChar = name[meowIndex - 1];
        if (nextChar) {
          if (isSpecialChars(nextChar)) {
            if (!isSpecialChars(prevChar)) {
              cat.push(name);
              return;
            }
          }
        } else {
          if (isSpecialChars(prevChar)) {
            cat.push(name);
            return;
          }
        }
      }
    });

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

  const sortData = () => {
    let title = "";
    let boy = [];
    let girl = [];
    let cat = [];
    let dog = [];

    let index = 0;

    let entry =
      (personalization.match(/,/g) || []).length > 0
        ? personalization.trim().split(",")
        : personalization.trim().split("\n");

    const entryLength = entry.length;

    if ((entry[0].match(/ /g) || []).length > 0) {
      const newTitle = entry[0];

      let isTitleValid = true;

      male.forEach((ele) => {
        const meowIndex = newTitle.indexOf(ele);
        if (meowIndex > 1) {
          const nextChar = newTitle[meowIndex + ele.length];

          if (nextChar) {
            if (isSpecialChars(nextChar)) {
              const prevChar = newTitle[meowIndex - 1];
              if (isSpecialChars(prevChar)) isTitleValid = false;
            } else {
              isTitleValid = false;
            }
          }
        }
      });

      female.forEach((ele) => {
        const meowIndex = newTitle.indexOf(ele);
        if (meowIndex > 1) {
          const nextChar = newTitle[meowIndex + ele.length];

          if (nextChar) {
            if (isSpecialChars(nextChar)) {
              const prevChar = newTitle[meowIndex - 1];
              if (isSpecialChars(prevChar)) isTitleValid = false;
            }
          } else {
            isTitleValid = false;
          }
        }
      });

      if (isTitleValid) {
        const titleIndex = newTitle.toLowerCase().indexOf("title");
        if (titleIndex > -1) {
          for (let i = titleIndex + 5; i < newTitle.length; i++) {
            if (isSpecialChars(newTitle[i])) continue;
            else {
              title = newTitle.substring(i);
              index = 1;
              break;
            }
          }
        } else {
          title = newTitle;
          index = 1;
        }
      }
    }

    for (let i = index; i < entryLength; i++) {
      // for(let i = index; i < 3;i++){
      const element = entry[i].trim();

      let name = "";
      let heading = false;
      // console.log(element, element.length);

      for (let o = 0; o < element.length; o++) {
        // console.log(o, element[o], heading, isSpecialChars(element[o]));

        if (heading === true) {
          if (isSpecialChars(element[o])) {
            heading = false;

            sorting(name, element, boy, girl, cat, dog);
            name = "";
          } else {
            if (o === element.length - 1) {
              name += element[o];

              sorting(name, element, boy, girl, cat, dog);
              name = "";
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

    setBoyNames(boy);
    setGirlNames(girl);
    setCatNames(cat);
    setDogNames(dog);
  };
  const getCode = () => {};

  const reset = () => {
    setYear(defaultYear);
    setTitle(defaultTitle);
    setBoyNames("");
    setGirlNames("");
    setCatNames("");
    setDogNames("");
  };

  return (
    <div style={{ width: "80vw", paddingTop: "136px" }}>
      <div className="row g-3 align-items-center mb-3">
        <label
          htmlFor="personalization"
          className="form-label col-auto col-form-label"
        >
          Personalization
        </label>
        <textarea
          style={{
            height: "360px",
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

      <button className="btn btn-secondary w-100" onClick={() => sortData()}>
        Sort data
      </button>

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
            autoFocus
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
            autoFocus
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
