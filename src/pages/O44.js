import React, { useState } from "react";

const O44 = () => {
  const [year, setYear] = useState("2023");
  const onChangeYear = (e) => {
    const value = e.target.value;
    setYear(value);
  };

  const [title, setTitle] = useState("Merry Christmas");
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

  const getCode = () => {};
  const reset = () => {
    setYear("2023");
    setTitle("Merry Christmas");
    setBoyNames("");
    setGirlNames("");
    setCatNames("");
    setDogNames("");
  };

  return (
    <div style={{ width: "80vw" }}>
      <div className="row g-3 align-items-center mb-3">
        <label htmlFor="year" className="form-label col-auto col-form-label">
          Yearn
        </label>
        <input
          type="text"
          id="year"
          className={`form-control col-auto`}
          autoComplete="off"
          value={year}
          autoFocus
          onChange={(e) => onChangeYear(e)}
        />
      </div>
      <div className="row g-3 align-items-center mb-3">
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
          onChange={(e) => onChangeTitle(e)}
        />
      </div>
      <div className="row g-3 align-items-center mb-3">
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
      <div className="row g-3 align-items-center mb-3">
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
      <div className="row g-3 align-items-center mb-3">
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
      <div className="row g-3 align-items-center mb-3">
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
