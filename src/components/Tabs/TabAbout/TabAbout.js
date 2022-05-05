import { useContext } from "react";
import ComicContext from "../../../store/contexts/ComicContext";
import TabAboutStyled from "./TabAboutStyled";

const TabAbout = () => {
  const { comic } = useContext(ComicContext);

  return (
    <>
      {comic && (
        <TabAboutStyled className="TabAbout">
          <p className="TabAbout__content">
            {comic.description
              ? comic.description
              : `  From DC Comics comes the Suicide Squad, an antihero team of incarcerated
        supervillains who act as deniable assets for the United States
        government, undertaking high-risk black ops missions in exchange for
        commuted prison sentences.`}
          </p>

          <ul className="creator-list">
            <div className="creator-list__row">
              <li className="creator-list__item">
                <span className="creator-list__item--bold">
                  {" "}
                  Release Date:{" "}
                </span>
                <span className="creator-list__item--text">2019-08-03</span>
              </li>

              <li className="creator-list__item ">
                <span className="creator-list__item--bold"> Creator: </span>

                <span className="creator-list__item--text">John Holmes</span>
              </li>
            </div>

            <div className="creator-list__row">
              <li className="creator-list__item">
                <span className="creator-list__item--bold"> Price: </span>

                <span className="creator-list__item--text">20€</span>
              </li>

              <li className="creator-list__item">
                <span className="creator-list__item--bold ">
                  {" "}
                  Main character:{" "}
                </span>

                <span className="creator-list__item--text">Alien</span>
              </li>
            </div>
          </ul>
        </TabAboutStyled>
      )}
    </>
  );
};
export default TabAbout;
