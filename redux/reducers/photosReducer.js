import {GET_PHOTOS} from '../actions/types';

const initialState = {photos: [], loading: true};

const initialReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_PHOTOS:
      return {
        ...state,
        photos: action.payload,
        loading: false,
      };
    default:
      return state;
  }
};

export default initialReducer;
