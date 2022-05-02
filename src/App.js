import { Route, Routes } from "react-router-dom";
import "./App.css";

import ButtonText from "./components/ButtonTextComponent/ButtonText";

function App() {
  return (
    <div className="App">
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </Layout>
    </div>
  );
}
export default App;
