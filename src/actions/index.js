import { TOGGLE_BOOLEAN } from '../constants/types';

const toggleBoolean = () => {
    return (dispatch) => {
      dispatch({ type: TOGGLE_BOOLEAN });
    };
};

export default toggleBoolean;
