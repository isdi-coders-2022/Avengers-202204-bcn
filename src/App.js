import { Route, Routes } from "react-router-dom";
import "./App.css";

import Layout from "./components/Layout/Layout";
import About from "./pages/about/About";
import Home from "./pages/Home";

function App() {
  return (
    <div className="App">
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
