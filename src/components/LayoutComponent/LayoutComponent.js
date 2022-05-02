const LayoutComponent = ({ children }) => {
  return (
    <div className="container">
      <div className="row">
        <main className="">{children}</main>
      </div>
    </div>
  );
};

export default LayoutComponent;
