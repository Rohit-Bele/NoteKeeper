import { Outlet } from "react-router-dom";
import Navbar from "./components/common/Navbar";

function App() {
  return (
    <div className="app-wrapper">
      <Navbar />
      <div className="page-container">
        <Outlet />
      </div>
    </div>
  );
}

export default App;
