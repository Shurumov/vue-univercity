import axios from 'axios';
import lodash from 'lodash';
import { API_URL_PROD } from 'config/constants';
let axiosClient = null;

class AxiosClient {
  constructor(props = {}) {
    Object.keys(props).forEach((propName) => {
      this[`_${propName}`] = props[propName];
    });

    const localAxios = axios.create({
      baseURL: process.env.NODE_ENV === 'development' ? 'http://localhost:3001/api' : `${API_URL_PROD}/`,
      timeout: 5000,
    });

    localAxios.interceptors.request.use((config) => {
      const headers = {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      };
      return {
        ...config,
        headers,
      };
    });

    localAxios.interceptors.response.use(
      (response) => Promise.resolve(lodash.get(response, 'data', null)),
      (error) => Promise.reject(error)
    );

    this._client = localAxios;
  }

  getAxios() {
    return this._client;
  }
}

//@param props
function init(props) {
  axiosClient = new AxiosClient(props);
}

function getAxios() {
  return axiosClient.getAxios();
}

export { init, getAxios };
