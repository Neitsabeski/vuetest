import { createStore } from 'vuex'

const axios = require('axios');

const instance = axios.create({
    baseURL: 'https://virtserver.swaggerhub.com/SEBASTIENGARDIER/primeflix/1.0.0'
});

// Create a new store instance.
const store = createStore({
    state: {

    },
    actions: {
        register: ({commit}, userInfos) => {
            commit;
            instance.post('/users', userInfos)
            .then(function (response) {
                console.log(response);
            })
            .catch(function (error) {
                console.log(error);
            });
        },
        login: ({commit}, userInfos) => {
            commit;
            console.log(userInfos.data);
        }
    }
})

export default store;