import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./Components/Layout/Layout";
import Chart from "./Components/Chart/Chart";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />} exect />
          <Route path="/chart" element={<Chart />} exect />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
