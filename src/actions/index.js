import axios from 'axios';

export const fetch_user = 'FETCH_USER';

export const fetchUser = () => async dispatch => {
  try {
    const { data } = await axios.get('/auth/user');
    dispatch({
      type: fetch_user,
      payload: data
    });
  } catch (e) {
    throw e;
  }
};

export const handleToken = token => async dispatch => {
  try {
    const { data } = await axios.post('/api/stripe', token);
    dispatch({
      type: fetch_user,
      payload: data
    });
  } catch (e) {
    throw e;
  }
};
