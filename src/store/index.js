import { createStore } from 'vuex'

export default createStore({
  state: {
    products: [
      {
        id: 1,
        name: 'Tnuva 1L Milk',
        price: 4.90,
        store: 'Shufersal',
        image: '/images/milk.jpg'
      },
      {
        id: 2,
        name: 'Tara 3% Milk 1L',
        price: 5.30,
        store: 'Rami Levy',
        image: '/images/tara-milk.jpg'
      },
      {
        id: 3,
        name: 'Yotvata Chocolate Milk 250ml',
        price: 3.90,
        store: 'Mega Market',
        image: '/images/chocolate-milk.jpg'
      }
    ],
    comparePrices: {
      'Tomatoes': {
        'Shufersal': 5.00,
        'Rami Levy': 4.80,
        'Mega': 5.20
      },
      'Milk': {
        'Shufersal': 6.00,
        'Rami Levy': 5.50,
        'Mega': 6.30
      }
    }
  },
  getters: {
    getAllProducts: (state) => state.products,
    getComparePrices: (state) => state.comparePrices
  },
  mutations: {},
  actions: {},
  modules: {}
}) 