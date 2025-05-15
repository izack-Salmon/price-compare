<template>
  <div class="home">
    <div class="search-container">
      <input 
        type="text" 
        class="search-bar" 
        placeholder="Search for products..." 
        v-model="searchQuery"
      >
    </div>

    <div class="products-list">
      <div v-for="product in products" :key="product.id" class="product-card">
        <div class="product-info">
          <img :src="product.image" :alt="product.name" class="product-image">
          <div class="product-details">
            <h3>{{ product.name }}</h3>
            <p class="price">₪{{ product.price.toFixed(2) }}</p>
            <p class="store">at {{ product.store }}</p>
          </div>
        </div>
        <button class="compare-button">Compare</button>
      </div>
    </div>

    <div v-if="!products.length" class="no-results">
      <div class="no-results-icon">
        <img src="@/assets/search-icon.png" alt="No results">
      </div>
      <p>No results found for your search. Try a different keyword.</p>
    </div>
  </div>
</template>

<script>
import { ref, computed } from 'vue'
import { useStore } from 'vuex'

export default {
  name: 'HomeView',
  setup() {
    const store = useStore()
    const searchQuery = ref('')

    const products = computed(() => {
      const allProducts = store.getters.getAllProducts
      if (!searchQuery.value) return allProducts
      return allProducts.filter(product => 
        product.name.toLowerCase().includes(searchQuery.value.toLowerCase())
      )
    })

    return {
      searchQuery,
      products
    }
  }
}
</script>

<style lang="scss" scoped>
.home {
  padding: 1rem;
}

.search-container {
  background-color: $primary-color;
  padding: 1rem;
  margin: -1rem -1rem 1rem -1rem;
}

.products-list {
  margin-top: 1rem;
}

.product-card {
  .product-info {
    display: flex;
    align-items: center;
    gap: 1rem;
  }

  .product-image {
    width: 80px;
    height: 80px;
    object-fit: cover;
    border-radius: $border-radius;
  }

  .product-details {
    h3 {
      margin-bottom: 0.5rem;
    }

    .price {
      font-weight: bold;
      color: $primary-color;
    }

    .store {
      color: #666;
      font-size: 0.9rem;
    }
  }
}

.no-results {
  text-align: center;
  padding: 2rem;

  .no-results-icon {
    margin-bottom: 1rem;
    
    img {
      width: 64px;
      height: 64px;
      opacity: 0.5;
    }
  }

  p {
    color: #666;
  }
}

@media (max-width: 768px) {
  .product-card {
    .product-info {
      flex-direction: column;
      text-align: center;
    }
  }
}
</style> 