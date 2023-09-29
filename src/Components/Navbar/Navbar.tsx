import { Link } from "react-router-dom";
import Search from "./Search";
import LwsImange from "../../assets/lws.svg";
import { BsFillSunFill, BsFillMoonFill } from "react-icons/bs";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../redux/app/Store";
import { setTheme } from "../../redux/features/Theme/theme";

const Navbar = () => {
  const { theme } = useSelector((state: RootState) => state.theme);
  const dispatch: AppDispatch = useDispatch();

  return (
    <nav
      className={`${
        theme === "light"
          ? "bg-slate-200 text-slate-800"
          : "bg-slate-700 text-slate-200"
      }`}
    >
      <div className="max-w-7xl mx-auto px-5 lg:px-0 flex justify-between py-3">
        <Link to="/">
          <img className="h-10" src={LwsImange} alt="Learn with Sumit" />
        </Link>
        <div className="flex gap-x-3 justify-center items-center">
          <div className="flex gap-x-2">
            {theme === "dark" ? (
              <button onClick={() => dispatch(setTheme("light"))}>
                <BsFillSunFill className={`w-6 h-6`} />
              </button>
            ) : (
              <button onClick={() => dispatch(setTheme("dark"))}>
                <BsFillMoonFill className={`w-6 h-6 `} />
              </button>
            )}
          </div>
          <Search />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
