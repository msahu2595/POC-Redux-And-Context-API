import axios from 'axios';
import {SET_LOADING, SET_ERROR, SET_DATA, RESET} from './constants';

export const setLoading = payload => ({type: SET_LOADING, payload});

export const setError = payload => ({type: SET_ERROR, payload});

export const setData = payload => ({type: SET_DATA, payload});

export const reset = () => ({type: RESET});

export const getTodo = () => {
  return async function fetchTodoThunk(dispatch, getState) {
    try {
      const state = getState();
      if (state.error) {
        dispatch(setError({error: false, message: null}));
      }
      dispatch(setLoading(true));
      setTimeout(async () => {
        const result = await axios.get(
          'https://jsonplaceholder.typicode.com/todos',
        );
        dispatch(
          setData({data: result?.data, message: 'Successfully get todo.'}),
        );
        dispatch(setLoading(false));
      }, 3000);
    } catch (err) {
      console.log(err);
      dispatch(
        setError({
          error: true,
          message: `Got Error: ${err.message}` ?? 'Got unknown error.',
        }),
      );
      dispatch(setLoading(false));
    }
  };
};
