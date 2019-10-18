import {getAxios} from 'utils/api/axiosClient';
import {
  API_METHODS
} from 'config/constants';

const getCourses = async function(category){
  const url = `${API_METHODS.COURSES}/${category}`;
  const axios = getAxios();
  return await axios.get(url);
};

export const COURSES_CONSTANTS = {
  COURSES_GET_SUCCESS: 'COURSES_GET_SUCCESS',
  COURSES_POPULAR_GET_SUCCESS: 'COURSES_POPULAR_GET_SUCCESS',
};


export const coursesState = {
  state: {
    payload: undefined,
    payloadPopular: undefined,
  },
  mutations: {
    setCourses(state, payload) {
      state.payload = payload
    },
    setCoursesPopular(state, payload) {
      state.payloadPopular = payload
    }
  },
  actions: {
    async fetchCourses({commit}, category) {
      const response = await getCourses(category);
      commit('setCourses', response)
    },
    async fetchCoursesPopular({commit}, category) {
      const response = await getCourses(category);
      commit('setCoursesPopular', response)
    }
  },
  getters: {}
};
