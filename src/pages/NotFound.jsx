import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div className="notfound__page">
      <h1>This Page is Not Avaialble</h1>
      <Link className="link__button" to="/">
        Home
      </Link>
    </div>
  );
}
