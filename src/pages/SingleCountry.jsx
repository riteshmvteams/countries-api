import { Link, useParams } from "react-router-dom";

export default function SingleCountry() {
  const { name } = useParams();
  return (
    <main className="singleCountry">
      <section className="singleCountry__top">
        <Link to="/">
          <span className="make__center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="24"
              viewBox="0 -960 960 960"
              width="24"
            >
              <path d="M360-240 120-480l240-240 56 56-144 144h568v80H272l144 144-56 56Z" />
            </svg>
          </span>
          <span>Back</span>
        </Link>
      </section>

      <section className="singleCountry__content">
        <div className="singleCountry__content--left">
          <img src="https://flagcdn.com/ax.svg" alt="flag-big" />
        </div>
        <div className="singleCountry__content--right">
          <h2 className="singleCountry__content--right-title">Title</h2>

          <div className="singleCountry__content--right-content">
            <div>
              <h4>
                Native Name: <span>Åland</span>
              </h4>
              <h4>
                Native Name: <span>Åland</span>
              </h4>
              <h4>
                Native Name: <span>Åland</span>
              </h4>
              <h4>
                Native Name: <span>Åland</span>
              </h4>
              <h4>
                Native Name: <span>Åland</span>
              </h4>
            </div>
            <div>
              <h4>
                Native Name: <span>Åland</span>
              </h4>
              <h4>
                Native Name: <span>Åland</span>
              </h4>
              <h4>
                Native Name: <span>Åland</span>
              </h4>
              <h4>
                Native Name: <span>Åland</span>
              </h4>
              <h4>
                Native Name: <span>Åland</span>
              </h4>
            </div>
          </div>

          <div>
            <h4>Border Countries:</h4>
            <ul>
              <li>first</li>
              <li>first</li>
            </ul>
          </div>
        </div>
      </section>
    </main>
  );
}
