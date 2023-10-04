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
    default:
      return state;
  }
};
