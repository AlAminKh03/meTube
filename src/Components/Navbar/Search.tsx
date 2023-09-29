import searchImage from "../../assets/search.svg";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../redux/app/Store";
import { useState } from "react";
import { setSearch } from "../../redux/features/filterSlice/filterSlice";
import { useMatch, useNavigate } from "react-router-dom";

type Props = {};

const Search = (props: Props) => {
  const { search } = useSelector((state: RootState) => state.filter);
  const dispatch = useDispatch();
  const [input, setInput] = useState<string>(search);

  const match = useMatch("/");
  const navigate = useNavigate();
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch(setSearch(input));
    if (!match) {
      navigate("/");
    }
  };
  return (
    <div className="border border-slate-200 flex items-center bg-white h-10 px-5 rounded-lg text-sm ring-emerald-200">
      {/* <!-- search --> */}
      <form onSubmit={handleSubmit}>
        <input
          className="outline-none border-none mr-2"
          type="search"
          name="search"
          placeholder="Search"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
      </form>
      <img
        className="inline h-4 cursor-pointer"
        src={searchImage}
        alt="Search"
      />
    </div>
  );
};

export default Search;
