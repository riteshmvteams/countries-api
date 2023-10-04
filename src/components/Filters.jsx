import { useState } from "react";

const filterOptions = [
  {
    id: "1",
    value: "all",
    label: "All",
  },
  {
    id: "2",
    value: "Africa",
    label: "Africa",
  },
  {
    id: "3",
    value: "America",
    label: "America",
  },
  {
    id: "4",
    value: "Asia",
    label: "Asia",
  },
  {
    id: "5",
    value: "Australia",
    label: "Australia",
  },
  {
    id: "6",
    value: "Europe",
    label: "Europe",
  },
];
export default function Filters() {
  const [filterOpen, setFilterOpen] = useState(false);

  const closeFilterOptions = () => {
    setFilterOpen((prev) => !prev);
  };
  return (
    <div className="filterSection__right">
      <button
        className="filterSection__right--select"
        onClick={closeFilterOptions}
      >
        <span>Filter by Region</span>
        <span className="make__center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="24"
            viewBox="0 -960 960 960"
            width="24"
          >
            <path
              fill="#fff"
              d="M480-345 240-585l56-56 184 184 184-184 56 56-240 240Z"
            />
          </svg>
        </span>
      </button>
      <ul
        className={`filterSection__right--options ${
          filterOpen ? "openOptions" : ""
        }`}
      >
        {filterOptions.map((options) => {
          return (
            <li
              key={options.id}
              className="filterSection__right--option"
              onClick={closeFilterOptions}
            >
              {options.label}
            </li>
          );
        })}
      </ul>
    </div>
  );
}
