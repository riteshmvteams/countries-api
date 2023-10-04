import { createContext, useEffect, useReducer } from "react";
import { countryReducer, initialState as countryState } from "./countryReducer";

export const CountryContext = createContext();

const CountryProvider = ({ children }) => {
  const [{ countries }, dispatch] = useReducer(countryReducer, countryState);

  useEffect(() => {
    const fetchAllCountryData = async () => {
      try {
        const response = await fetch("https://restcountries.com/v3.1/all");

        if (!response.ok) {
          throw new Error("Error after the awaiting the response");
        }

        const result = await response.json();
        dispatch({ type: "loadData", payload: result });
      } catch (error) {
        dispatch({ type: "errorWhileLoading", payload: "error?.message" });
      }
    };

    fetchAllCountryData();
  }, []);

  return (
    <CountryContext.Provider value={{ countries, dispatch }}>
      {children}
    </CountryContext.Provider>
  );
};

export default CountryProvider;
