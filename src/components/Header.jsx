import { Link } from "react-router-dom";
import ThemeSwitcher from "./ThemeSwitcher";

export default function Header() {
  return (
    <header className="header">
      <div className="header__container container">
        <Link to="/" className="header__logo">
          Where in the World?
        </Link>
        <ThemeSwitcher />
      </div>
    </header>
  );
}
