import StyledTabAbout from "./TabAbout.styled";
const TabAbout = () => {
  return (
    <StyledTabAbout className="TabAbout">
      <p>
        From DC Comics comes the Suicide Squad, an antihero team of incarcerated
        supervillains who act as deniable assets for the United States
        government, undertaking high-risk black ops missions in exchange for
        commuted prison sentences.
      </p>

      <ul className="creator-list">
        <div className="creator-list__row">
          <li className="creator-list__item">
            <span className="creator-list__item--bold"> Release Date: </span>
            <span className="creator-list__item--text">2019-08-03</span>
          </li>

          <li className="creator-list__item">
            <span className="creator-list__item--bold"> Release Date: </span>

            <span className="creator-list__item--text">20€</span>
          </li>
        </div>

        <div className="creator-list__row">
          <li className="creator-list__item">
            <span className="creator-list__item--bold"> Release Date: </span>

            <span className="creator-list__item--text">2019-08-03</span>
          </li>

          <li className="creator-list__item">
            <span className="creator-list__item--bold"> Release Date: </span>

            <span className="creator-list__item--text">2019-08-03</span>
          </li>
        </div>
      </ul>
    </StyledTabAbout>
  );
};
export default TabAbout;