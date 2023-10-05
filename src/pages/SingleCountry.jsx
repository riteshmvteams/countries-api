import { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { useCountry } from "../utils/hooks/useCountry";
import SkelLoader from "../components/SkelLoader";
import { formatNumber } from "../utils/helpers/formatNumber";

export default function SingleCountry() {
  const { name } = useParams();
  const { dispatch, singleCountry, status, error } = useCountry();

  useEffect(() => {
    const fetchSingleCountry = async () => {
      try {
        dispatch({ type: "dataLoading" });
        const response = await fetch(
          `https://restcountries.com/v3.1/name/${name}`
        );

        if (!response.ok) {
          throw new Error("Error while getting the single country response");
        }

        const result = await response.json();
        dispatch({ type: "loadSingleCountry", payload: result });
      } catch (error) {
        dispatch({ type: "errorWhileLoading", payload: error });
      }
    };

    fetchSingleCountry();
  }, [name, dispatch]);

  if (status === "loading") {
    return (
      <div className="container" style={{ marginTop: "130px" }}>
        <div className="singleCountry__content">
          <div>
            <SkelLoader width="520px" height="300px" />
          </div>

          <div>
            <SkelLoader width="350px" height="30px" marginBottom="20px" />
            <SkelLoader width="150px" height="20px" marginBottom="10px" />
            <SkelLoader width="150px" height="20px" marginBottom="10px" />
            <SkelLoader width="150px" height="20px" marginBottom="10px" />
            <SkelLoader width="150px" height="20px" marginBottom="10px" />
            <SkelLoader width="150px" height="20px" marginBottom="10px" />
          </div>
        </div>
      </div>
    );
  }

  if (status === "error") {
    return <h1>Some Error Occured while fetching data</h1>;
  }

  console.log(singleCountry);

  if (singleCountry === undefined) {
    return;
  }

  const {
    name: { official, nativeName },
    flags: { svg },
    population,
    region,
    subregion,
    capital,
    tld,
    currencies,
    languages,
    borders,
  } = singleCountry[0];

  const number = formatNumber(population);
  const ArrofLanguages = Object.entries(languages);
  const ArrofCurrencies = Object.entries(currencies);
  const ArrofName = Object.entries(nativeName);

  return (
    <main className="singleCountry container">
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
          <figure className="singleCountry__content--left-img">
            <img src={svg} alt={official} />
          </figure>
        </div>
        <div className="singleCountry__content--right">
          <h2 className="singleCountry__content--right-title">{official}</h2>

          <div className="singleCountry__content--right-content">
            <div>
              <h4>
                Native Name:{" "}
                <span>
                  {ArrofName[1]?.[1]?.official || ArrofName[0]?.[1]?.common}
                </span>
              </h4>
              <h4>
                Population: <span>{number}</span>
              </h4>
              <h4>
                Region: <span>{region}</span>
              </h4>
              <h4>
                Sub Region: <span>{subregion}</span>
              </h4>
              <h4>
                Capital: <span>{capital}</span>
              </h4>
            </div>
            <div>
              <h4>
                Top Level Domain: <span>{tld}</span>
              </h4>
              <h4>
                Currencies: <span>{ArrofCurrencies[0]?.[1].name}</span>
              </h4>
              <h4>
                Languages:{" "}
                <div>
                  {ArrofLanguages.map((lang, i) => {
                    return <span key={i}>{lang[1]}, </span>;
                  })}
                </div>
              </h4>
            </div>
          </div>

          <div className="country__border">
            <h4>Border Countries:</h4>
            <ul>
              {borders?.length > 0 ? (
                borders?.map((border, i) => {
                  return <li key={i}>{border}</li>;
                })
              ) : (
                <span>Country with no borders</span>
              )}
            </ul>
          </div>
        </div>
      </section>
    </main>
  );
}
