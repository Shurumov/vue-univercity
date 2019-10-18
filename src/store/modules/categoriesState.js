import {
  API_METHODS
} from 'config/constants';
import {getAxios} from "../../utils/api/axiosClient";

const getCategories = async function(){

  const url = `${API_METHODS.CATEGORIES}`;
  const axios = getAxios();
  return await axios.get(url);
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
      commit('setCategories', response)
    }
  },
  getters: {}
};
