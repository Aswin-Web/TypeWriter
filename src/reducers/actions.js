export const AddTypedLetter = (text) => {
  return {
    type: "TYPED_LETTER",
    payload: text
  };
};

export const DisplayedLetter = (text) => {
  return {
    type: "UPCOMMING_LETTER",
    payload: text,
  };
};
