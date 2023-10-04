// import { useEffect } from "react";
import { formatNumber } from "../utils/helpers/formatNumber";
import { useCountry } from "../utils/hooks/useCountry";
import SkelLoader from "./SkelLoader";

export default function CountryListingSection() {
  const { countries, status } = useCountry();

  // useEffect(() => {
  //   formatNumber();
  // }, []);

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
          const popu = formatNumber(country.population);
          return (
            <li key={i} className="countries__list--item">
              <figure className="countries__list--item-img">
                <img src={country.flags.svg} alt="flag" />
              </figure>

              <div className="countries__list--item-content">
                <h2>{country.name.official}</h2>

                <div>
                  <h4>
                    Population: <span>{popu}</span>
                  </h4>
                  <h4>
                    Region: <span>Europe</span>
                  </h4>
                  <h4>
                    Capital: <span>Berlin</span>
                  </h4>
                </div>
              </div>
            </li>
          );
        })}
      </ul>
    </section>
  );
}
