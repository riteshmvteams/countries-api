// import { useEffect } from "react";
import { Link } from "react-router-dom";
import { formatNumber } from "../utils/helpers/formatNumber";
import { useCountry } from "../utils/hooks/useCountry";
import SkelLoader from "./SkelLoader";

export default function CountryListingSection() {
  const { countries, status } = useCountry();

  if (status === "loading") {
    return (
      <ul className="countries__list">
        {Array.from({ length: 200 }).map((_, i) => {
          return (
            <li key={i} className="countries__list--item">
              <SkelLoader width="100%" height="180px" />

              <div className="countries__list--item-content">
                <SkelLoader width="220px" height="30px" marginBottom="20px" />
                <SkelLoader width="180px" height="15px" marginBottom="10px" />
                <SkelLoader width="120px" height="15px" marginBottom="10px" />
                <SkelLoader width="120px" height="15px" marginBottom="10px" />
              </div>
            </li>
          );
        })}
      </ul>
    );
  }

  return (
    <section className="countries">
      <ul className="countries__list">
        {countries?.map((country, i) => {
          const population = formatNumber(country?.population);

          return (
            <Link
              to={`/country/${country.name.common}`}
              key={i}
              className="countries__list--item"
            >
              <figure className="countries__list--item-img">
                <img src={country.flags.svg} alt="flag" />
              </figure>

              <div className="countries__list--item-content">
                <h2>{country.name.official}</h2>

                <div>
                  <h4>
                    Population: <span>{population}</span>
                  </h4>
                  <h4>
                    Region: <span>{country?.region}</span>
                  </h4>
                  <h4>
                    Capital: <span>{country?.capital}</span>
                  </h4>
                </div>
              </div>
            </Link>
          );
        })}
      </ul>
    </section>
  );
}
