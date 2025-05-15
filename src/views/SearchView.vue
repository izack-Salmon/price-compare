<template>
  <div class="search-view">
    <SearchBar placeholder="Search for products..." />

    <div class="container">
      <div class="search-layout" :class="{ 'sidebar-collapsed': isSidebarCollapsed }">
        <div class="sidebar-toggle" @click="toggleSidebar">
          <span
            class="mdi"
            :class="isSidebarCollapsed ? 'mdi-chevron-right' : 'mdi-chevron-left'"
          ></span>
        </div>
        <div class="sidebar">
          <div class="filters">
            <FilterBar />
          </div>
          <div class="categories">
            <h3>Category</h3>
            <ul>
              <li>Dairy</li>
              <li>Vegetables</li>
              <li>Fruits</li>
              <li>Bakery</li>
              <li>Meat</li>
              <li>Other</li>
            </ul>
          </div>
        </div>
        <div class="main-area">
          <div class="search-results" v-if="filteredProducts.length">
            <ProductCard v-for="product in filteredProducts" :key="product.id" :product="product" />
          </div>

          <div class="no-results" v-else>
            <div class="no-results-icon">
              <span class="mdi mdi-magnify"></span>
            </div>
            <p>No results found for your search.</p>
            <p>Try a different keyword.</p>
          </div>
        </div>
      </div>
    </div>

    <TheFooter />
  </div>
</template>

<script>
import SearchBar from '@/components/SearchBar.vue'
import FilterBar from '@/components/FilterBar.vue'
import ProductCard from '@/components/ProductCard.vue'
import TheFooter from '@/components/TheFooter.vue'
import { mapGetters } from 'vuex'

export default {
  name: 'SearchView',
  components: {
    SearchBar,
    FilterBar,
    ProductCard,
    TheFooter,
  },
  data() {
    return {
      isSidebarCollapsed: false,
    }
  },
  methods: {
    toggleSidebar() {
      this.isSidebarCollapsed = !this.isSidebarCollapsed
    },
  },
  computed: {
    ...mapGetters(['filteredProducts']),
  },
}
</script>

<style lang="scss" scoped>
.search-view {
  padding-bottom: 60px;
  background-color: #f5f5f5;
}

.search-layout {
  display: flex;
  margin-top: 5px;
  position: relative;

  &.sidebar-collapsed {
    .sidebar {
      margin-left: -130px;

      @media (max-width: 400px) {
        margin-left: -110px;
      }
    }

    .sidebar-toggle {
      left: 0;
    }
  }
}

.sidebar-toggle {
  position: absolute;
  top: 10px;
  left: 130px;
  z-index: 10;
  width: 28px;
  height: 28px;
  background-color: #e30613;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  cursor: pointer;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
  transition: left 0.3s ease;

  .mdi {
    font-size: 18px;
  }

  @media (max-width: 400px) {
    left: 110px;
    width: 24px;
    height: 24px;

    .mdi {
      font-size: 16px;
    }
  }
}

.sidebar {
  width: 130px;
  margin-right: 8px;
  transition: margin-left 0.3s ease;

  .filters {
    margin-bottom: 10px;
  }

  .categories {
    background: #fff;
    border-radius: 8px;
    overflow: hidden;

    h3 {
      padding: 10px;
      margin: 0;
      border-bottom: 1px solid #eee;
      font-size: 14px;
      font-weight: 500;
      color: #333;
    }

    ul {
      list-style: none;
      margin: 0;
      padding: 0;

      li {
        padding: 10px;
        border-bottom: 1px solid #eee;
        font-size: 14px;
        color: #555;
        cursor: pointer;

        &:hover {
          background-color: #f5f5f5;
        }

        &:last-child {
          border-bottom: none;
        }
      }
    }
  }
}

.main-area {
  flex: 1;
  display: flex;
  flex-direction: column;
  transition: width 0.3s ease;
}

.search-results {
  padding-top: 10px;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(260px, 1fr));
  gap: 10px;

  .sidebar-collapsed & {
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  }

  @media (max-width: 400px) {
    grid-template-columns: 1fr;

    .sidebar-collapsed & {
      grid-template-columns: 1fr;
    }
  }
}

.no-results {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 30px 15px;
  text-align: center;
  color: #333;
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
  height: 300px;
  margin-top: 0;

  .no-results-icon {
    width: 80px;
    height: 80px;
    margin-bottom: 15px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #f0f0f0;
    border-radius: 50%;

    .mdi {
      font-size: 40px;
      color: #999;
    }
  }

  p {
    font-size: 14px;
    line-height: 1.4;
    color: #555;
    margin-bottom: 5px;

    &:first-of-type {
      font-weight: 500;
    }
  }
}

@media (max-width: 400px) {
  .sidebar {
    width: 110px;

    .categories {
      h3 {
        padding: 8px;
        font-size: 12px;
      }

      ul li {
        padding: 8px;
        font-size: 12px;
      }
    }
  }

  .container {
    padding: 8px;
  }

  .search-results {
    padding-top: 8px;
  }

  .no-results {
    padding: 20px 10px;

    .no-results-icon {
      width: 60px;
      height: 60px;

      .mdi {
        font-size: 35px;
      }
    }

    p {
      font-size: 13px;
    }
  }
}
</style>
