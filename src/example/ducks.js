// actions
const TOGGLE_BOOLEAN = 'toggle-boolean';

// reducer
const reducer = (state = {}, action = {}) => {
  switch (action.type) {
    case TOGGLE_BOOLEAN:
      return {
        ...state,
        isOk: !state.isOk,
      };
    default:
      return state;
  }
};

export default reducer;

// action creators
export const toggleBoolean = () => ({ type: TOGGLE_BOOLEAN });
