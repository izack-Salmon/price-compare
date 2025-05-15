<template>
  <div class="compare">
    <div class="filters">
      <input 
        type="text" 
        class="search-bar" 
        placeholder="Search for groceries..." 
        v-model="searchQuery"
      >
      
      <div class="filter-options">
        <div class="filter-group">
          <button class="filter-button">
            Category
            <span class="arrow">▼</span>
          </button>
        </div>
        <div class="filter-group">
          <button class="filter-button">
            Price Range
            <span class="arrow">▼</span>
          </button>
        </div>
        <div class="filter-group">
          <button class="filter-button">
            Brand
            <span class="arrow">▼</span>
          </button>
        </div>
      </div>
    </div>

    <div class="compare-section">
      <h2>Compare Prices</h2>
      <div class="price-comparison">
        <table class="price-table">
          <thead>
            <tr>
              <th>Product Name</th>
              <th>Shufersal</th>
              <th>Rami Levy</th>
              <th>Mega</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(prices, product) in comparePrices" :key="product">
              <td>{{ product }}</td>
              <td>₪{{ prices['Shufersal'].toFixed(2) }}</td>
              <td>₪{{ prices['Rami Levy'].toFixed(2) }}</td>
              <td>₪{{ prices['Mega'].toFixed(2) }}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>

    <div class="featured-deals">
      <h2>Featured Deals</h2>
      <div class="deals-grid">
        <div class="deal-card">
          <img src="@/assets/vegetables.jpg" alt="Fresh Vegetables">
        </div>
        <div class="deal-card">
          <img src="@/assets/dairy.jpg" alt="Dairy Products">
        </div>
        <div class="deal-card">
          <img src="@/assets/spices.jpg" alt="Spices">
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { ref, computed } from 'vue'
import { useStore } from 'vuex'

export default {
  name: 'CompareView',
  setup() {
    const store = useStore()
    const searchQuery = ref('')

    const comparePrices = computed(() => store.getters.getComparePrices)

    return {
      searchQuery,
      comparePrices
    }
  }
}
</script>

<style lang="scss" scoped>
.compare {
  padding: 1rem;
}

.filters {
  background-color: $background-color;
  padding: 1rem;
  border-radius: $border-radius;
  margin-bottom: 2rem;
}

.filter-options {
  display: flex;
  gap: 1rem;
  margin-top: 1rem;
}

.filter-button {
  padding: 0.5rem 1rem;
  background: white;
  border: 1px solid #ddd;
  border-radius: $border-radius;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  cursor: pointer;
  
  .arrow {
    font-size: 0.8rem;
  }
}

.compare-section {
  margin-bottom: 2rem;
  
  h2 {
    margin-bottom: 1rem;
  }
}

.featured-deals {
  h2 {
    margin-bottom: 1rem;
  }
  
  .deals-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 1rem;
    
    .deal-card {
      border-radius: $border-radius;
      overflow: hidden;
      
      img {
        width: 100%;
        height: 200px;
        object-fit: cover;
      }
    }
  }
}

@media (max-width: 768px) {
  .filter-options {
    flex-wrap: wrap;
    
    .filter-group {
      flex: 1 1 100%;
    }
  }
  
  .deals-grid {
    grid-template-columns: 1fr !important;
  }
  
  .price-table {
    display: block;
    overflow-x: auto;
    white-space: nowrap;
  }
}
</style> 