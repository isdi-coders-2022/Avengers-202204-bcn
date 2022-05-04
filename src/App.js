import { Navigate, Route, Routes } from "react-router-dom";

import { nanoid } from "nanoid";
import md5 from "md5";

import "./App.css";

import Layout from "./components/Layout/Layout";
import About from "./pages/about/About";
import Navbar from "./components/Navbar/Navbar";

import Wantlist from "./pages/Wantlist/Wantlist";
import Home from "./pages/home/Home";
import Search from "./components/Search/Search";
import { useEffect, useState } from "react";

function App() {
  const [items, setItems] = useState([]);

  const REACT_APP_PUBLIC_KEY = "c8e50321cae9b91671a256f31c430678";
  const REACT_APP_PRIVATE_KEY = "2cc0c1e660b8aed3c95d656dfb37656fc3cf08b3";

  const TS = nanoid(8);

  const hash = md5(TS + REACT_APP_PRIVATE_KEY + REACT_APP_PUBLIC_KEY);

  const QUERY = `ts=${TS}&apikey=${REACT_APP_PUBLIC_KEY}&hash=${hash}`;

  useEffect(() => {
    const fetching = async () => {
      const response = await fetch(
        `http://gateway.marvel.com/v1/public/comics?${QUERY}`
      );

      const results = await response.json();

      setItems(results.data.results);
    };

    fetching();
  }, []);

  return (
    <div className="App">
      <Layout>
        <Routes>
          <Route path="/" element={<Navigate to="/home" />} />
          <Route path="/home" element={<Home data={items} />} />
          <Route path="/about" element={<About />} />
          <Route path="/wantlist" element={<Wantlist />} />
        </Routes>
      </Layout>
      <Search active={false} />
      <Navbar />
    </div>
  );
}
export default App;
