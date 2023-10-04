import { useContext } from "react";
import { CountryContext } from "../../context/country/CountryContext";

export const useCountry = () => {
  return useContext(CountryContext);
};
