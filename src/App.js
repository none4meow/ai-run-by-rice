import logo from "./logo.svg";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import { O50, G87 } from "./pages";
// import { pages } from "./pages";
import { useNavigate } from "react-router-dom";
import { templates } from "./configs/templates";
import { useState } from "react";

const App = () => {
  const navigate = useNavigate();

  const [SKU, setSKU] = useState("----");

  const onChangeSKU = (e) => {
    const value = e.target.value;
    navigate(`/${value}/`);
    setSKU(value);
  };

  return (
    <div className="App">
      <header className="App-header">
        <div
          style={{ width: "300px", margin: "0 auto" }}
          className="d-flex mb-5"
        >
          <label
            htmlFor="sku"
            className="form-label col-auto col-form-label me-3"
          >
            SKU
          </label>
          <select
            id="sku"
            className="form-control form-select col-auto"
            value={SKU}
            onChange={(e) => onChangeSKU(e)}
          >
            <option value={"----"}>----</option>
            {Object.keys(templates).map((ele) => (
              <option key={ele} value={ele}>
                {ele}
              </option>
            ))}
          </select>
        </div>

        <Routes>
          {/* <Route path={`O50/`} element={pages["O50"]} /> */}
          <Route path={`/`} element={<O50 />} />
          <Route path={`O50/`} element={<O50 />} />
          <Route path={`G87/`} element={<G87 />} />
          {/* {Object.keys(pages).map((page, index) => (
            <Route path={`${page}/`} element={pages[page]} />
          ))} */}
        </Routes>
      </header>
    </div>
  );
};

export default App;
