import React, { useCallback, useEffect, useState } from "react";

const Home = () => {
  const [justInput, setJustInput] = useState("");
  const onChangeJustInput = (e) => {
    const value = e.target.value;
    setJustInput(value);
  };

  const [splitByWhom, setSplitByWhom] = useState("");
  const onChangeSplitByWhom = (e) => {
    setSplitByWhom(parseInt(e.target.value));
  };

  const handleSort = useCallback(() => {
    if (splitByWhom === 0) {
      const value = justInput
        .trim()
        .replace(/\s/g, "")
        .split(",")
        .sort((a, b) => a.localeCompare(b))
        .sort((a, b) => a.length - b.length);

      setJustOutput(value);
    } else if (splitByWhom === 1) {
      const value = justInput
        .trim()
        .split("\n")
        .sort((a, b) => a.localeCompare(b))
        .sort((a, b) => a.length - b.length);

      setJustOutput(value);
    } else if (splitByWhom === 2) {
      const value = justInput
        .trim()
        .split(" ")
        .sort((a, b) => a.localeCompare(b))
        .sort((a, b) => a.length - b.length);

      setJustOutput(value);
    }
  }, [justInput, splitByWhom]);

  useEffect(() => {
    handleSort();
  }, [handleSort, justInput, splitByWhom]);

  const [justOutput, setJustOutput] = useState([]);

  return (
    <div>
      <div className="row g-3 align-items-center mb-3">
        <label htmlFor="Input" className="form-label col-auto col-form-label">
          Output: {justOutput.length}
        </label>
        <span style={{ width: "50vw", wordWrap: "break-word" }}>
          [{justOutput.map((ele, index) => `${ele},`)}]
        </span>
      </div>
      <div className="row g-3 align-items-center mb-3">
        <label htmlFor="Input" className="form-label col-auto col-form-label">
          Input
        </label>
        <textarea
          type="text"
          id="Input"
          className={`form-control col-auto`}
          autoComplete="off"
          value={justInput}
          onChange={(e) => onChangeJustInput(e)}
        />
        <select
          className="form-control form-select col-auto"
          onChange={(e) => onChangeSplitByWhom(e)}
          value={splitByWhom}
        >
          <option value={0}>Split by Comma</option>
          <option value={1}>Split by New line</option>
          <option value={2}>Split by Space</option>
        </select>
      </div>

      {/* <button className="btn btn-secondary" onClick={handleSort}>
        Sort
      </button> */}
    </div>
  );
};

export default Home;
