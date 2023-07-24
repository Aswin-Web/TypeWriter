const initialState = {
  upcommingKey: '',
};

const displayKeyReducer = (state = initialState, action) => {
  switch (action.type) {
    case "UPCOMMING_LETTER":
      return {
        upcommingKey:action.payload}

    default:
      return state;
  }
};

export default displayKeyReducer;
