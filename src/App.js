import { Navigate, Route, Routes } from "react-router-dom";
import "./App.css";

import Layout from "./components/Layout/Layout";
import About from "./pages/about/About";
import HeaderHero from "./components/HeaderHero/HeaderHero";
import Navbar from "./components/Navbar/Navbar";

import Home from "./pages/Home";

function App() {
  return (
    <div className="App">
      <Layout>
        <Routes>
          <Route path="/" element={<Navigate to="/home" />} />
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </Layout>
      <Navbar />
    </div>
  );
}
export default App;
