import logo from "./logo.svg";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import { O50, G87 } from "./pages";
// import { pages } from "./pages";

const App = () => {
  return (
    <div className="App">
      <header className="App-header">
        <Routes>
          {/* <Route path={`O50/`} element={pages["O50"]} /> */}
          <Route path={`O50/`} element={<O50 />} />
          <Route path={`G87/`} element={<G87 />} />
          {/* {Object.keys(pages).map((page, index) => (
            <Route path={`${page}/`} element={pages[page]} />
          ))} */}
        </Routes>
        <img src={logo} className="App-logo" alt="logo" />
      </header>
    </div>
  );
};

export default App;
