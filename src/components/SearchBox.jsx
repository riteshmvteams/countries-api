import { useState } from "react";
import { useCountry } from "../utils/hooks/useCountry";

export default function SearchBox() {
  const [searchTerm, setSearchTerm] = useState("");
  const { dispatch } = useCountry();

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);

    dispatch({ type: "searchFilter", payload: e.target.value });
  };

  return (
    <form className="filterSection__left">
      <svg
        stroke="currentColor"
        fill="currentColor"
        strokeWidth="0"
        viewBox="0 0 512 512"
        className="search-bar__form--icon search-bar__form--icon--dark filterSection__left--icon"
        height="1em"
        width="1em"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M456.69 421.39L362.6 327.3a173.81 173.81 0 0034.84-104.58C397.44 126.38 319.06 48 222.72 48S48 126.38 48 222.72s78.38 174.72 174.72 174.72A173.81 173.81 0 00327.3 362.6l94.09 94.09a25 25 0 0035.3-35.3zM97.92 222.72a124.8 124.8 0 11124.8 124.8 124.95 124.95 0 01-124.8-124.8z"></path>
      </svg>
      <input
        type="search"
        placeholder="Search any Country..."
        name="search"
        autoComplete="off"
        value={searchTerm}
        onChange={handleSearch}
      />
    </form>
  );
}
