import { Navigate, Route, Routes } from "react-router-dom";

import "./App.css";

import Layout from "./components/Layout/Layout";
import About from "./pages/about/About";
import Navbar from "./components/Navbar/Navbar";

import Wantlist from "./pages/Wantlist/Wantlist";
import Home from "./pages/home/Home";
import Search from "./components/Search/Search";
import useAPI from "./hooks/useAPI";
import { useEffect } from "react";

function App() {
  const { loadComicsAPI } = useAPI();
  useEffect(() => {
    loadComicsAPI();
  }, [loadComicsAPI]);

  return (
    <div className="App">
      <Layout>
        <Routes>
          <Route path="/" element={<Navigate to="/home" />} />
          <Route path="/home" element={<Home />} />
          <Route path="/about/:id" element={<About />} />
          <Route path="/wantlist" element={<Wantlist />} />
        </Routes>
      </Layout>
      <Search active={false} />
      <Navbar />
    </div>
  );
}
export default App;
