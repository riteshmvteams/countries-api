export const initialState = {
  countries: [],
  status: "loading",
  error: null,
  filtered: [],
};

export const countryReducer = (state, action) => {
  switch (action.type) {
    case "loadData":
      return {
        ...state,
        countries: action.payload,
        status: "loaded",
        filtered: action.payload,
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
        countries: state.filtered.filter((country) => {
          return (
            country.name.official
              .toLowerCase()
              .indexOf(action.payload.toLowerCase()) > -1 ||
            country.name.common
              .toLowerCase()
              .indexOf(action.payload.toLowerCase()) > -1
          );
        }),
      };
    default:
      return state;
  }
};
