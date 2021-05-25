import { ADD_ITEM } from "../actions";
const manageList = (state = { items: [] }, action) => {
  switch (action.type) {
    case ADD_ITEM:
      // const oldItems = state.items || [];
      return {
        items: action.payload,
      };
    default:
      return state;
  }
};

export default manageList;
