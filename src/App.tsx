import { useSelector } from "react-redux";
import "./App.css";
import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar/Navbar";
import { Outlet } from "react-router-dom";
import { RootState } from "./redux/app/Store";

function App() {
  const { theme } = useSelector((state: RootState) => state.theme);

  return (
    <div
      className={`${
        theme === "light"
          ? "bg-slate-100 text-slate-800"
          : "bg-slate-900 text-slate-100"
      }`}
    >
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
}

export default App;
