import "./App.css";
import { Route, Routes } from "react-router-dom";
import {
  O50,
  G87,
  E05,
  Home,
  E13,
  O44,
  O51,
  O17,
  G90,
  G98,
  E16,
  G71,
  E54,
} from "./pages";
import Layout from "./hocs/Layout";

const App = () => {
  return (
    <Layout>
      <Routes>
        <Route path={`/`} element={<Home />} />
        <Route path={`G71/`} element={<G71 />} />
        <Route path={`G87/`} element={<G87 />} />
        <Route path={`G90/`} element={<G90 />} />
        <Route path={`G98/`} element={<G98 />} />
        <Route path={`E05/`} element={<E05 />} />
        <Route path={`E13/`} element={<E13 />} />
        <Route path={`E16/`} element={<E16 />} />
        <Route path={`O17/`} element={<O17 />} />
        <Route path={`O44/`} element={<O44 />} />
        <Route path={`O50/`} element={<O50 />} />
        <Route path={`O51/`} element={<O51 />} />
        <Route path={`E54/`} element={<E54 />} />
      </Routes>
    </Layout>
  );
};

export default App;
