import { useCountry } from "../utils/hooks/useCountry";

export default function CountryListingSection() {
  const { countries } = useCountry();

  return (
    <section className="countries">
      <ul className="countries__list">
        {countries?.map((country, i) => {
          return (
            <li key={i} className="countries__list--item">
              <figure className="countries__list--item-img">
                <img src={country.flags.svg} alt="flag" />
              </figure>

              <div className="countries__list--item-content">
                <h2>Title</h2>

                <div>
                  <h4>
                    Population: <span>545454545</span>
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
