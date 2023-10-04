export const initialState = {
  countries: [],
  status: "loading",
  error: null,
};

export const countryReducer = (state, action) => {
  switch (action.type) {
    case "loadData":
      return {
        ...state,
        countries: action.payload,
        status: "loaded",
      };

    case "errorWhileLoading":
      return {
        ...state,
        status: "error",
        error: action.payload,
      };

    case "searchFilter":
      return {
        ...state,
        countries: state.countries.filter((country) => {
          return (
            country.name.official
              .toLowerCase()
              .indexOf(action.payload.toLowerCase()) > -1
          );
        }),
      };
    default:
      return state;
  }
};
