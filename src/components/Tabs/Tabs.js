import { useState } from "react";
import TabAbout from "./TabAbout/TabAbout";

import TabsStyles from "./TabsStyles";

const Tabs = () => {
  const [activeTab, setActiveTab] = useState("aboutComic");

  const handleAboutComic = () => setActiveTab("aboutComic");

  return (
    <TabsStyles className="Tabs">
      <ul className="nav">
        <li
          className={activeTab === "aboutComic" ? "active" : ""}
          onClick={handleAboutComic}
        >
          About Comics
        </li>
      </ul>
      <div className="outlet">
        {activeTab === "aboutComic" ? <TabAbout /> : ""}
      </div>
    </TabsStyles>
  );
};
export default Tabs;
