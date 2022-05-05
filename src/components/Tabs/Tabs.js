import { useState } from "react";
import TabAbout from "./TabAbout/TabAbout";
import TabReview from "./TabReview/TabReview";

import TabsStyles from "./Tabs.styled";

const Tabs = () => {
  const [activeTab, setActiveTab] = useState("aboutComic");

  const handleAboutComic = () => setActiveTab("aboutComic");

  const handleReviews = () => setActiveTab("reviews");

  return (
    <TabsStyles className="Tabs">
      <ul className="nav">
        <li
          className={activeTab === "aboutComic" ? "active" : ""}
          onClick={handleAboutComic}
        >
          About Comics
        </li>

        <li
          className={activeTab === "reviews" ? "active" : ""}
          onClick={handleReviews}
        >
          Reviews
        </li>
      </ul>

      <div className="outlet">
        {activeTab === "aboutComic" ? <TabAbout /> : <TabReview />}
      </div>
    </TabsStyles>
  );
};
export default Tabs;
