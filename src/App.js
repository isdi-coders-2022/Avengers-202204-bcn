import { Route, Routes } from "react-router-dom";
import "./App.css";

import HeaderHero from "./components/HeaderHero/HeaderHero";

import Layout from "./components/Layout/Layout";
import About from "./pages/About";
import Home from "./pages/Home";

function App() {
  return (
    <div className="App">
      <HeaderHero />

      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </Layout>
    </div>
  );
}
export default App;
