const initialState = {
  addtag: null,
  loading: false,
};

const Createtagreducer = (state = initialState, action) => {
  switch (action.type) {
    case "ALL_TAG_PENDING":
      return {
        ...state,
        addtag: null,
        loading: true,
      };
    case "ALL_TAG_SUCCESS":
      return {
        ...state,
        loading: false,
        addtag: action.addtag,
      };
    default:
      return { ...state };
  }
};
export default Createtagreducer;
