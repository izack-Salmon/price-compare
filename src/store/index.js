import { createStore } from 'vuex'

export default createStore({
  state: {
    products: [
      // Dairy
      {
        id: 1,
        name: 'Tnuva 1L Milk',
        price: 4.9,
        store: 'Shufersal',
        category: 'Dairy',
        image:
          'https://images.unsplash.com/photo-1519864600265-abb23847ef2c?auto=format&fit=facearea&w=60&h=60',
      },
      {
        id: 2,
        name: 'Tara 3% Milk 1L',
        price: 5.3,
        store: 'Rami Levy',
        category: 'Dairy',
        image:
          'https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=facearea&w=60&h=60',
      },
      {
        id: 3,
        name: 'Yotvata Chocolate Milk 250ml',
        price: 5.9,
        store: 'Mega Market',
        category: 'Dairy',
        image:
          'https://images.unsplash.com/photo-1519864600265-abb23847ef2c?auto=format&fit=facearea&w=60&h=60',
      },
      // Bakery
      {
        id: 4,
        name: 'Fresh Bread',
        price: 7.9,
        store: 'Shufersal',
        category: 'Bakery',
        image:
          'https://images.unsplash.com/photo-1502741338009-cac2772e18bc?auto=format&fit=facearea&w=60&h=60',
      },
      {
        id: 5,
        name: 'Whole Wheat Bread',
        price: 8.5,
        store: 'Rami Levy',
        category: 'Bakery',
        image:
          'https://images.unsplash.com/photo-1519864600265-abb23847ef2c?auto=format&fit=facearea&w=60&h=60',
      },
      // Vegetables
      {
        id: 6,
        name: 'Tomatoes',
        price: 5.0,
        store: 'Shufersal',
        category: 'Vegetables',
        image:
          'https://images.unsplash.com/photo-1464306076886-debca5e8a6b0?auto=format&fit=facearea&w=60&h=60',
      },
      {
        id: 7,
        name: 'Cucumbers',
        price: 3.2,
        store: 'Mega Market',
        category: 'Vegetables',
        image:
          'https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=facearea&w=60&h=60',
      },
      // Fruits
      {
        id: 8,
        name: 'Bananas',
        price: 6.0,
        store: 'Shufersal',
        category: 'Fruits',
        image:
          'https://images.unsplash.com/photo-1574226516831-e1dff420e8e9?auto=format&fit=facearea&w=60&h=60',
      },
      {
        id: 9,
        name: 'Apples',
        price: 7.5,
        store: 'Rami Levy',
        category: 'Fruits',
        image:
          'https://images.unsplash.com/photo-1502741338009-cac2772e18bc?auto=format&fit=facearea&w=60&h=60',
      },
      // Snacks
      {
        id: 10,
        name: 'Bamba',
        price: 4.5,
        store: 'Mega Market',
        category: 'Snacks',
        image:
          'https://images.unsplash.com/photo-1519864600265-abb23847ef2c?auto=format&fit=facearea&w=60&h=60',
      },
      {
        id: 11,
        name: 'Osem Bisli',
        price: 3.9,
        store: 'Shufersal',
        category: 'Snacks',
        image:
          'https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=facearea&w=60&h=60',
      },
      // Drinks
      {
        id: 12,
        name: 'Coca Cola 1.5L',
        price: 7.0,
        store: 'Rami Levy',
        category: 'Drinks',
        image:
          'https://images.unsplash.com/photo-1519864600265-abb23847ef2c?auto=format&fit=facearea&w=60&h=60',
      },
      {
        id: 13,
        name: 'Sprite 1.5L',
        price: 6.8,
        store: 'Mega Market',
        category: 'Drinks',
        image:
          'https://images.unsplash.com/photo-1502741338009-cac2772e18bc?auto=format&fit=facearea&w=60&h=60',
      },
      // Victory
      {
        id: 14,
        name: 'Tnuva 1L Milk',
        price: 5.1,
        store: 'Victory',
        category: 'Dairy',
        image:
          'https://images.unsplash.com/photo-1519864600265-abb23847ef2c?auto=format&fit=facearea&w=60&h=60',
      },
      {
        id: 15,
        name: 'Tomatoes',
        price: 5.3,
        store: 'Victory',
        category: 'Vegetables',
        image:
          'https://images.unsplash.com/photo-1464306076886-debca5e8a6b0?auto=format&fit=facearea&w=60&h=60',
      },
      {
        id: 16,
        name: 'Fresh Bread',
        price: 8.2,
        store: 'Victory',
        category: 'Bakery',
        image:
          'https://images.unsplash.com/photo-1502741338009-cac2772e18bc?auto=format&fit=facearea&w=60&h=60',
      },
      // Yenot Bitan
      {
        id: 17,
        name: 'Tnuva 1L Milk',
        price: 5.0,
        store: 'Yenot Bitan',
        category: 'Dairy',
        image:
          'https://images.unsplash.com/photo-1519864600265-abb23847ef2c?auto=format&fit=facearea&w=60&h=60',
      },
      {
        id: 18,
        name: 'Tomatoes',
        price: 5.4,
        store: 'Yenot Bitan',
        category: 'Vegetables',
        image:
          'https://images.unsplash.com/photo-1464306076886-debca5e8a6b0?auto=format&fit=facearea&w=60&h=60',
      },
      {
        id: 19,
        name: 'Fresh Bread',
        price: 8.0,
        store: 'Yenot Bitan',
        category: 'Bakery',
        image:
          'https://images.unsplash.com/photo-1502741338009-cac2772e18bc?auto=format&fit=facearea&w=60&h=60',
      },
      // Closet
      {
        id: 20,
        name: 'White T-Shirt',
        price: 19.9,
        store: 'Shufersal',
        category: 'Closet',
        image:
          'https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=facearea&w=60&h=60',
      },
      {
        id: 21,
        name: 'White T-Shirt',
        price: 18.5,
        store: 'Rami Levy',
        category: 'Closet',
        image:
          'https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=facearea&w=60&h=60',
      },
      {
        id: 22,
        name: 'White T-Shirt',
        price: 20.0,
        store: 'Mega Market',
        category: 'Closet',
        image:
          'https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=facearea&w=60&h=60',
      },
      {
        id: 23,
        name: 'White T-Shirt',
        price: 19.0,
        store: 'Victory',
        category: 'Closet',
        image:
          'https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=facearea&w=60&h=60',
      },
      {
        id: 24,
        name: 'White T-Shirt',
        price: 18.9,
        store: 'Yenot Bitan',
        category: 'Closet',
        image:
          'https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=facearea&w=60&h=60',
      },
      {
        id: 25,
        name: 'Blue Jeans',
        price: 49.9,
        store: 'Shufersal',
        category: 'Closet',
        image:
          'https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=facearea&w=60&h=60',
      },
      {
        id: 26,
        name: 'Blue Jeans',
        price: 47.5,
        store: 'Rami Levy',
        category: 'Closet',
        image:
          'https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=facearea&w=60&h=60',
      },
      {
        id: 27,
        name: 'Blue Jeans',
        price: 50.0,
        store: 'Mega Market',
        category: 'Closet',
        image:
          'https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=facearea&w=60&h=60',
      },
      {
        id: 28,
        name: 'Blue Jeans',
        price: 48.0,
        store: 'Victory',
        category: 'Closet',
        image:
          'https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=facearea&w=60&h=60',
      },
      {
        id: 29,
        name: 'Blue Jeans',
        price: 47.9,
        store: 'Yenot Bitan',
        category: 'Closet',
        image:
          'https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=facearea&w=60&h=60',
      },
    ],
    stores: [
      {
        id: 1,
        name: 'Shufersal',
        logo: 'https://upload.wikimedia.org/wikipedia/commons/2/2e/Shufersal_Logo.png',
      },
      {
        id: 2,
        name: 'Rami Levy',
        logo: 'https://upload.wikimedia.org/wikipedia/commons/2/2a/Rami_Levy_logo.png',
      },
      {
        id: 3,
        name: 'Mega Market',
        logo: 'https://upload.wikimedia.org/wikipedia/commons/7/7e/Mega_logo.png',
      },
      {
        id: 4,
        name: 'Victory',
        logo: 'https://upload.wikimedia.org/wikipedia/commons/2/2b/Victory_logo.png',
      },
      {
        id: 5,
        name: 'Yenot Bitan',
        logo: 'https://upload.wikimedia.org/wikipedia/commons/2/2c/Yenot_Bitan_logo.png',
      },
    ],
    categories: [
      { id: 1, name: 'Dairy' },
      { id: 2, name: 'Vegetables' },
      { id: 3, name: 'Fruits' },
      { id: 4, name: 'Bakery' },
      { id: 5, name: 'Meat' },
      { id: 6, name: 'Snacks' },
      { id: 7, name: 'Drinks' },
      { id: 8, name: 'Closet' },
    ],
    searchQuery: '',
    selectedCategory: null,
    selectedPriceRange: null,
    selectedBrand: null,
  },
  getters: {
    filteredProducts: (state) => {
      let result = state.products

      if (state.searchQuery) {
        const query = state.searchQuery.toLowerCase()
        result = result.filter((product) => product.name.toLowerCase().includes(query))
      }

      if (state.selectedCategory) {
        result = result.filter((product) => product.category === state.selectedCategory)
      }

      if (state.selectedBrand) {
        result = result.filter((product) => product.store === state.selectedBrand)
      }

      return result
    },
    comparedProducts: (state) => {
      // Group products by name
      const groupedProducts = {}
      state.products.forEach((product) => {
        if (!groupedProducts[product.name]) {
          groupedProducts[product.name] = []
        }
        groupedProducts[product.name].push(product)
      })

      return Object.entries(groupedProducts)
        .filter(([_, products]) => products.length > 1)
        .map(([name, products]) => {
          const storeMap = {}
          products.forEach((p) => {
            storeMap[p.store] = p.price
          })
          return { name, prices: storeMap }
        })
    },
    featuredDeals: (state) => {
      return [
        {
          id: 101,
          name: 'Fresh Vegetables',
          image:
            'https://images.unsplash.com/photo-1464306076886-debca5e8a6b0?auto=format&fit=facearea&w=140&h=100',
        },
        {
          id: 102,
          name: 'Dairy Products',
          image:
            'https://images.unsplash.com/photo-1519864600265-abb23847ef2c?auto=format&fit=facearea&w=140&h=100',
        },
        {
          id: 103,
          name: 'Baked Goods',
          image:
            'https://images.unsplash.com/photo-1502741338009-cac2772e18bc?auto=format&fit=facearea&w=140&h=100',
        },
        {
          id: 104,
          name: 'Snacks',
          image:
            'https://images.unsplash.com/photo-1519864600265-abb23847ef2c?auto=format&fit=facearea&w=140&h=100',
        },
        {
          id: 105,
          name: 'Drinks',
          image:
            'https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=facearea&w=140&h=100',
        },
      ]
    },
  },
  mutations: {
    setSearchQuery(state, query) {
      state.searchQuery = query
    },
    setSelectedCategory(state, category) {
      state.selectedCategory = category
    },
    setSelectedPriceRange(state, range) {
      state.selectedPriceRange = range
    },
    setSelectedBrand(state, brand) {
      state.selectedBrand = brand
    },
  },
  actions: {
    search({ commit }, query) {
      commit('setSearchQuery', query)
    },
    filterByCategory({ commit }, category) {
      commit('setSelectedCategory', category)
    },
    filterByPriceRange({ commit }, range) {
      commit('setSelectedPriceRange', range)
    },
    filterByBrand({ commit }, brand) {
      commit('setSelectedBrand', brand)
    },
  },
})
