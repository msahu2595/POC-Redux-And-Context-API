import {SET_LOADING, SET_ERROR, SET_DATA, RESET} from './constants';

const initialState = {
  loading: false,
  error: false,
  data: null,
  message: null,
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_LOADING:
      return {
        ...state,
        loading: action.payload,
      };
    case SET_ERROR:
      return {
        ...state,
        error: action.payload?.error,
        message: action.payload?.message,
      };
    case SET_DATA:
      return {
        ...state,
        data: action.payload?.data,
        message: action.payload?.message,
      };
    case RESET:
      return {
        ...initialState,
      };
    default:
      return {
        ...state,
      };
  }
};

export default rootReducer;
