import { createStore } from 'vuex'

const axios = require('axios');

const instance = axios.create({
    baseURL: 'https://virtserver.swaggerhub.com/SEBASTIENGARDIER/primeflix/1.0.0'
    //baseURL: 'https://localhost:5000/api/'
});

// Create a new store instance.
const store = createStore({
    
    state: {
        status: '',
        user: {
            userId: -1,
            data: {},
            token: '',
        },
        cart: [],
        cartCount: 0,
        products: [
            {
                "id": 1,
                "title": "The shawshank redemption",
                "releaseDate": "1994-01-01T00:00:00",
                "stock": 5,
                "rating": 5,
                "format": {
                    "id": 1,
                    "name": "Film"
                },
                "pictureUrl": "Pictures/1.jpg",
                "price": 3.0,
                "genres": [
                    {
                        "id": 3,
                        "name": "Drama"
                    }
                ]
            },
            {
                "id": 2,
                "title": "The godfather",
                "releaseDate": "1972-01-01T00:00:00",
                "stock": 2,
                "rating": 5,
                "format": {
                    "id": 1,
                    "name": "Film"
                },
                "pictureUrl": "Pictures/2.jpg",
                "price": 4.0,
                "genres": [
                    {
                        "id": 3,
                        "name": "Drama"
                    },
                    {
                        "id": 5,
                        "name": "Crime"
                    }
                ]
            },
            {
                "id": 3,
                "title": "The dark knight",
                "releaseDate": "2008-01-01T00:00:00",
                "stock": 3,
                "rating": 4,
                "format": {
                    "id": 1,
                    "name": "Film"
                },
                "pictureUrl": "Pictures/3.jpg",
                "price": 3.5,
                "genres": [
                    {
                        "id": 3,
                        "name": "Drama"
                    },
                    {
                        "id": 5,
                        "name": "Crime"
                    },
                    {
                        "id": 6,
                        "name": "Action"
                    }
                ]
            },
            {
                "id": 4,
                "title": "The lord of the rings : the return of the king",
                "releaseDate": "2003-01-01T00:00:00",
                "stock": 0,
                "rating": 4,
                "format": {
                    "id": 1,
                    "name": "Film"
                },
                "pictureUrl": "Pictures/4.jpg",
                "price": 2.5,
                "genres": [
                    {
                        "id": 6,
                        "name": "Action"
                    },
                    {
                        "id": 3,
                        "name": "Drama"
                    },
                    {
                        "id": 7,
                        "name": "Adventure"
                    }
                ]
            },
            {
                "id": 5,
                "title": "Schindler's list",
                "releaseDate": "1993-01-01T00:00:00",
                "stock": 1,
                "rating": 3,
                "format": {
                    "id": 1,
                    "name": "Film"
                },
                "pictureUrl": "Pictures/5.jpg",
                "price": 5.0,
                "genres": [
                    {
                        "id": 3,
                        "name": "Drama"
                    },
                    {
                        "id": 4,
                        "name": "History"
                    },
                    {
                        "id": 8,
                        "name": "Biography"
                    }
                ]
            },
            {
                "id": 6,
                "title": "The godfather 2",
                "releaseDate": "1974-01-01T00:00:00",
                "stock": 7,
                "rating": 5,
                "format": {
                    "id": 1,
                    "name": "Film"
                },
                "pictureUrl": "Pictures/6.jpg",
                "price": 4.0,
                "genres": [
                    {
                        "id": 3,
                        "name": "Drama"
                    },
                    {
                        "id": 5,
                        "name": "Crime"
                    }
                ]
            },
            {
                "id": 7,
                "title": "12 angry men",
                "releaseDate": "1957-01-01T00:00:00",
                "stock": 0,
                "rating": 3,
                "format": {
                    "id": 1,
                    "name": "Film"
                },
                "pictureUrl": "Pictures/7.jpg",
                "price": 3.5,
                "genres": [
                    {
                        "id": 3,
                        "name": "Drama"
                    },
                    {
                        "id": 5,
                        "name": "Crime"
                    }
                ]
            },
            {
                "id": 8,
                "title": "Pulp Fiction",
                "releaseDate": "1994-01-01T00:00:00",
                "stock": 1,
                "rating": 5,
                "format": {
                    "id": 1,
                    "name": "Film"
                },
                "pictureUrl": "Pictures/8.jpg",
                "price": 4.0,
                "genres": [
                    {
                        "id": 3,
                        "name": "Drama"
                    },
                    {
                        "id": 5,
                        "name": "Crime"
                    }
                ]
            },
            {
                "id": 9,
                "title": "Inception",
                "releaseDate": "2010-01-01T00:00:00",
                "stock": 2,
                "rating": 5,
                "format": {
                    "id": 1,
                    "name": "Film"
                },
                "pictureUrl": "Pictures/9.jpg",
                "price": 5.0,
                "genres": [
                    {
                        "id": 6,
                        "name": "Action"
                    },
                    {
                        "id": 7,
                        "name": "Adventure"
                    },
                    {
                        "id": 9,
                        "name": "Sci-Fi"
                    }
                ]
            },
            {
                "id": 10,
                "title": "The lord of the rings : the two towers",
                "releaseDate": "2002-01-01T00:00:00",
                "stock": 1,
                "rating": 4,
                "format": {
                    "id": 1,
                    "name": "Film"
                },
                "pictureUrl": "Pictures/10.jpg",
                "price": 3.0,
                "genres": [
                    {
                        "id": 3,
                        "name": "Drama"
                    },
                    {
                        "id": 6,
                        "name": "Action"
                    },
                    {
                        "id": 7,
                        "name": "Adventure"
                    }
                ]
            }
        ],
        productPage: 1,
        currentPage: 1,
    },
    mutations: {
        setStatus: function(state, status) {
            state.status = status;
        },
        logUser: function(state, user) {
            state.user = user;
        },
        addToCart: function(state, product){

            let found = state.cart.find(item => item.product.id == product.id);

            if (found) {
                if(product.stock > found.quantity) {
                    found.quantity ++;
                    state.cartCount ++;
                }
            } else {
                if(product.stock > 0){
                    state.cart.push({"product": product, "quantity": 1});
                    state.cartCount ++;
                }
            }
        }
    },
    getters: {
        getUser: function(){
            return state.user;
        },
        getCart: function(){
            return state.cart;
        }
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