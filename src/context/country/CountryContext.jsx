import { createContext, useReducer } from "react";
import { countryReducer, initialState as countryState } from "./countryReducer";

export const CountryContext = createContext();

const CountryProvider = ({ children }) => {
  const [{ countries }, dispatch] = useReducer(countryReducer, countryState);
  return (
    <CountryContext.Provider value={{ countries, dispatch }}>
      {children}
    </CountryContext.Provider>
  );
};

export default CountryProvider;
