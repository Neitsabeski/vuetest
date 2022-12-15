import { createStore } from 'vuex'

const axios = require('axios');

const instance = axios.create({
    baseURL: 'https://virtserver.swaggerhub.com/SEBASTIENGARDIER/primeflix/1.0.0'
});

// Create a new store instance.
const store = createStore({
    state: {
        status: '',
        user: {
            userId: -1,
            token: '',
        }
    },
    mutations: {
        setStatus: function(state, status) {
            state.status = status;
        },
        logUser: function(state, user) {
            state.user = user;
        }
    },
    getters: {

    },
    actions: {
        register: ({commit}, userInfos) => {
            commit('setStatus', 'loading');
            return new Promise((resolve, reject) => {
                instance.post('/users/register', userInfos)
                .then(function (response) {
                    commit('setStatus', 'created');
                    resolve(response);
                })
                .catch(function (error) {
                    commit('setStatus', 'error_register');
                    reject(error);
                });
            })
        },
        login: ({commit}, userInfos) => {
            commit('setStatus', 'loading');
            return new Promise((resolve, reject) => {
                instance.post('/users/login', userInfos)
                .then(function (response) {
                    commit('setStatus', 'logged');
                    commit('logUser', response.data);
                    resolve(response);
                })
                .catch(function (error) {
                    commit('setStatus', 'error_login');
                    reject(error);
                });
            })
        }
    }
})

//commentaire

export default store;