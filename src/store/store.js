import { createStore } from "vuex";
import axios from "axios";

const state = {
    videos: []
};

const getters = {
    getProdutos(state) {
        return state.getProdutos;
    },
};

const mutations = {
    addVideo(state, video) {
        state.videos = [...state.videos, video]
    }
};

const actions = {
    addVideo(context, video) {
        context.commit('addVideo', video)
    },
};

const store = createStore({
    state,
    getters,
    mutations,
    actions,
});

export default store;