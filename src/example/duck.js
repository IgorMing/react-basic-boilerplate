// actions
const ADD_COUNTER = 'example/addCounter';
const MINUS_COUNTER = 'example/minusCounter';

const INITIAL_STATE = { count: 0 };

// reducer
const reducer = (state = INITIAL_STATE, action = {}) => {
  switch (action.type) {
    case ADD_COUNTER:
      state.count += 1;

      return {
        ...state,
        count: state.count,
      };
    case MINUS_COUNTER:
      state.count -= 1;

      return {
        ...state,
        count: state.count,
      };
    default:
      return state;
  }
};

export default reducer;

// action creators
export const addCounter = () => ({ type: ADD_COUNTER });
export const minusCounter = () => ({ type: MINUS_COUNTER });
