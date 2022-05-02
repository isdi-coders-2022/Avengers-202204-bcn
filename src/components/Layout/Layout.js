const Layout = ({ children }) => {
  return (
    <div className="container">
      <main className="row">{children}</main>
    </div>
  );
};

export default Layout;
