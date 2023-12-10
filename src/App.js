import "./App.css";
import { Route, Routes } from "react-router-dom";
import { O50, G87, E05, Home, E13, O44, O51 } from "./pages";
import Layout from "./hocs/Layout";

const App = () => {
  return (
    <Layout>
      <Routes>
        <Route path={`/`} element={<Home />} />
        <Route path={`O50/`} element={<O50 />} />
        <Route path={`G87/`} element={<G87 />} />
        <Route path={`E05/`} element={<E05 />} />
        <Route path={`E13/`} element={<E13 />} />
        <Route path={`O44/`} element={<O44 />} />
        <Route path={`O51/`} element={<O51 />} />
      </Routes>
    </Layout>
  );
};

export default App;
