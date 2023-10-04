import { useState } from "react";

const themeOptions = [
  {
    id: "1",
    label: "System",
  },
  {
    id: "2",
    label: "Dark",
  },
  {
    id: "3",
    label: "Light",
  },
];

export default function ThemeSwitcher() {
  const [themeOpen, setThemeOpen] = useState(false);

  const closeFilterOptions = () => {
    setThemeOpen((prev) => !prev);
  };
  return (
    <div className="header__theme">
      <button className="header__theme--btn" onClick={closeFilterOptions}>
        <span className="make__center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="24"
            viewBox="0 -960 960 960"
            width="24"
          >
            <path
              fill="#fff"
              d="M480-120q-150 0-255-105T120-480q0-150 105-255t255-105q14 0 27.5 1t26.5 3q-41 29-65.5 75.5T444-660q0 90 63 153t153 63q55 0 101-24.5t75-65.5q2 13 3 26.5t1 27.5q0 150-105 255T480-120Zm0-80q88 0 158-48.5T740-375q-20 5-40 8t-40 3q-123 0-209.5-86.5T364-660q0-20 3-40t8-40q-78 32-126.5 102T200-480q0 116 82 198t198 82Zm-10-270Z"
            />
          </svg>
        </span>
        <span>Theme</span>
      </button>

      <ul
        className={`header__theme--options ${themeOpen ? "showOptions" : ""}`}
      >
        {themeOptions.map((option) => {
          return (
            <li
              key={option.id}
              className="header__theme--option"
              onClick={closeFilterOptions}
            >
              {option.label}
            </li>
          );
        })}
      </ul>
    </div>
  );
}
