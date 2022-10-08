import Search from "../icons/Search";
import "./styles.scss";

const SearchBar = (): JSX.Element => {
  return (
    <div>
      <div className="search-bar px-7 py-3 w-full flex justify-between">
        <input
          type={"text"}
          className="bg-transparent text-white w-[95%]"
          placeholder="Search for Player, Coach, Talent..."
        />
        <div className="w-[2.5%]">
          <Search />
        </div>
      </div>
    </div>
  );
};

export default SearchBar;
