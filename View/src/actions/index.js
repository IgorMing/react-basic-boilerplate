import {TOGGLE_BOOLEAN} from '../constants/types';

export const toggleBoolean = () => {

    return (dispatch) => {

        setTimeout(()=> {
            dispatch({type: TOGGLE_BOOLEAN});
        }, 1000);

    };

};
