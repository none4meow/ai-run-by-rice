import "./App.css";
import { Route, Routes } from "react-router-dom";
import { O50, G87, E05, Home } from "./pages";
import Layout from "./hocs/Layout";

const App = () => {
  return (
    <Layout>
      <Routes>
        <Route path={`/`} element={<Home />} />
        <Route path={`O50/`} element={<O50 />} />
        <Route path={`G87/`} element={<G87 />} />
        <Route path={`E05/`} element={<E05 />} />
      </Routes>
    </Layout>
  );
};

export default App;
