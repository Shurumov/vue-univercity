import {
  API_METHODS
} from 'config/constants';
import axios from 'axios';

const getCategories = function(){
  return axios({
    method: 'get',
    url: `http://localhost:3001${API_METHODS.CATEGORIES}`
  })
    .then(response => {
      return response;
    })
};

export const CATEGORIES_CONSTANTS = {
  CATEGORIES_GET_SUCCESS: 'CATEGORIES_GET_SUCCESS',
};

export const categoriesState = {
  state: {
    payload: [],
  },
  mutations: {
    setCategories(state, payload) {
      state.payload = payload
    }
  },
  actions: {
    async fetchComments({commit}) {
      const response = await getCategories();
      commit('setCategories', response.data)
    }
  },
  getters: {}
};
