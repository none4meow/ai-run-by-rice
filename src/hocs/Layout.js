import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { templates } from "../configs/templates";

const Layout = ({ children }) => {
  const navigate = useNavigate();

  const [SKU, setSKU] = useState("----");

  const onChangeSKU = (e) => {
    const value = e.target.value;
    navigate(`/${value}/`);
    setSKU(value);
  };

  const Navbar = () => {
    return (
      <nav className="">
        <div className="custom-nav">
          <h3 className="ms-3 pointer" onClick={() => navigate(`/`)}>
            AI run by rice
          </h3>

          <div style={{ width: "300px", margin: "0 auto" }} className="d-flex">
            <span
              htmlFor="sku"
              className="form-label col-auto col-form-label me-3"
            >
              SKU
            </span>
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
        </div>
      </nav>
    );
  };

  return (
    <div className="App">
      <Navbar />
      <header className="App-header">{children}</header>
    </div>
  );
};

export default Layout;
