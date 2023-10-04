export const initialState = {
  countries: [],
};

export const countryReducer = (state, action) => {
  switch (action.type) {
    case "loadData":
      return {
        ...state,
        countries: action.payload,
      };
    default:
      return state;
  }
};
