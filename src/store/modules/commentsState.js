import {getAxios} from 'utils/api/axiosClient';
import {API_METHODS} from 'config/constants';

const getComments = async () => {
  const url = `${API_METHODS.COMMENTS}`;
  const axios = getAxios();
  return await axios.get(url);
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
      commit('setComments', response)
    }
  },
  getters: {

  }
};
