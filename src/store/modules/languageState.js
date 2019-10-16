export const LANGUAGE_CONSTANTS = {
  SET_LANGUAGE: 'SET_LANGUAGE',
  GET_LANGUAGE: 'GET_LANGUAGE',
};

export const languageState = {
  state: {
    language: 'EN'
  },
  mutations: {
    [LANGUAGE_CONSTANTS.SET_LANGUAGE](state, payload) {
      state.language = payload.value
    },
  },
  actions: {},
  getters: {
    [LANGUAGE_CONSTANTS.GET_LANGUAGE]: state => state.language,
  },
};
