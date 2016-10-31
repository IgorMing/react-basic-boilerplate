const defaultState = {};

/**
* @param {Object} state - Default aplication state
* @param {Object} action - Action from action creator
* @returns {Object} New state
*/
export default function reducer (state = defaultState, action) {
    switch (action.type) {
      case 'test': {
        return {
          ...state,
          ...action.data,
        };
      }
      default: {
        return state;
      }
    }
}
