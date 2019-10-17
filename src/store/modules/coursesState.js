import {getAxios} from 'utils/api/axiosClient';
import {
  API_METHODS
} from 'config/constants';
import axios from 'axios';

const getCourses = function(category){
  return axios({
    method: 'get',
    url: `http://localhost:3001${API_METHODS.COURSES}/${category}`
  })
    .then(response => {
      return response;
    })
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
      commit('setCourses', response.data)
    },
    async fetchCoursesPopular({commit}, category) {
      const response = await getCourses(category);
      commit('setCoursesPopular', response.data)
    }
  },
  getters: {}
};
