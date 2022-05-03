import StyledTabs from "./Tabs.styled";

const Tabs = () => {
  return (
    <StyledTabs className="Tabs">
      {/* Tab nav */}
      <ul className="nav">
        <li>Tab 1</li>
        <li>Tab 2</li>
      </ul>
      <div className="outlet">{/* content will be shown here */}</div>
    </StyledTabs>
  );
};
export default Tabs;
