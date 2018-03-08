import { fetch_user } from './../actions';

export default (state = null, { type, payload }) => {
  switch (type) {
    case fetch_user:
      return payload || false;
    default:
      return state;
  }
};
