const initialState = {
  letter:'' ,
};

const typedKeyReducer = (state = initialState, action) => {
  switch (action.type) {
    case "TYPED_LETTER":
      return {

        letter: action.payload,
      };
    
    default:
      return state;
  }
};

export default typedKeyReducer;
