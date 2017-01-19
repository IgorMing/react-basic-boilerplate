import {TOGGLE_BOOLEAN} from '../constants/types';

const defaultState = {
    isOk: false,
    title: ''
};

/**
 * @param {Object} state - Default aplication state
 * @param {Object} action - Action from action creator
 * @returns {Object} New state
 */
export default function reducer(state = defaultState, action) {
    switch (action.type) {
        case TOGGLE_BOOLEAN: {
            return {
                ...state,
                isOk: !state.isOk
            };
        }
        default: {
            return state;
        }
    }
}
