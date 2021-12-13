import axios from 'axios';

axios.defaults.baseURL = process.env.REACT_APP_MOCK_BE;

axios.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    const expectedError =
      error.response && error.response.status >= 400 && error.response.status < 500;

    if (!expectedError) {
      // we can add some logger service instead of showing it into console
      console.error('An unexpected error occurrred.', error);
    }

    return Promise.reject(error);
  }
);

export default {
  get: axios.get,
  post: axios.post,
  put: axios.put,
  patch: axios.patch,
  delete: axios.delete,
};
