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
  const [comicList, setComicList] = useState([]);

  const timeStamp = nanoid(8);

  const hash = md5(
    timeStamp +
      process.env.react_app_private_key +
      process.env.react_app_public_key
  );

  const QUERY = `ts=${timeStamp}&apikey=${process.env.react_app_public_key}&hash=${hash}`;

  useEffect(() => {
    const fetching = async () => {
      const response = await fetch(
        `http://gateway.marvel.com/v1/public/comics?${QUERY}`
      );

      const results = await response.json();

      const thumbnail = results.data.results[11].thumbnail;

      const thumbnailSplit = thumbnail.path.split("//");
      thumbnailSplit[0] = "https://";

      const imageUrl = `${thumbnailSplit.join("")}/portrait_uncanny.${
        thumbnail.extension
      }`;

      setComicList(imageUrl);
    };

    fetching();
  }, []);

  return (
    <div className="App">
      <Layout>
        <Routes>
          <Route path="/" element={<Navigate to="/home" />} />
          <Route path="/home" element={<Home data={comicList} />} />
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
