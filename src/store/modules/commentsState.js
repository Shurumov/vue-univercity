import {getAxios} from 'utils/api/axiosClient';
import {
  API_METHODS
} from 'config/constants';
import axios from 'axios';

const getComments = function(){
  // const url = `${API_METHODS.COMMENTS}`;
  // const axios = getAxios();
  // return await axios.get(url)
  return axios({
    method: 'get',
    url: `http://localhost:3001${API_METHODS.COMMENTS}`
  })
    .then(response => {
      return response;
    })
};

export const COMMENTS_CONSTANTS = {
  COMMENTS_GET_SUCCESS: 'COMMENTS_GET_SUCCESS',
};

export const commentsState = {
  state: {
    payload: []
  },
  mutations: {
    setComments(state, payload) {
      state.payload = payload
    }
  },
  actions: {
    async fetchComments({commit}) {
      const response = await getComments();
      commit('setComments', response.data)
    }
  },
  getters: {

  }
};
