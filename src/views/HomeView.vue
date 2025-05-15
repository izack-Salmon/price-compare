<template>
  <div class="home">
    <SearchBar placeholder="Search for groceries..." />

    <div class="container">
      <h1 class="page-title">Compare Prices</h1>

      <div class="compare-table-scroll">
        <table class="compare-table">
          <thead>
            <tr>
              <th>Product</th>
              <th v-for="store in stores" :key="store.name">{{ store.name }}</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="item in comparedProducts" :key="item.name">
              <td class="product-cell">
                <img :src="getProductImage(item.name)" class="product-thumb" alt="" />
                <router-link
                  :to="`/product/${encodeURIComponent(item.name)}`"
                  class="product-link"
                  >{{ item.name }}</router-link
                >
              </td>
              <td v-for="store in stores" :key="store.name">
                ₪{{ item.prices[store.name] ? item.prices[store.name].toFixed(2) : '-' }}
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <h2 class="section-title">Featured Deals</h2>

      <div class="featured-deals">
        <div class="deal-item" v-for="product in featuredDeals" :key="product.id">
          <img :src="product.image" :alt="product.name" />
        </div>
      </div>
    </div>

    <TheFooter />
  </div>
</template>

<script>
import SearchBar from '@/components/SearchBar.vue'
import TheFooter from '@/components/TheFooter.vue'
import { mapGetters, mapState } from 'vuex'

export default {
  name: 'HomeView',
  components: {
    SearchBar,
    TheFooter,
  },
  computed: {
    ...mapGetters(['comparedProducts', 'featuredDeals']),
    ...mapState(['stores', 'products']),
  },
  methods: {
    getProductImage(name) {
      const found = this.products.find((p) => p.name === name)
      return found ? found.image : ''
    },
  },
}
</script>

<style lang="scss" scoped>
.home {
  padding-bottom: 60px;
  background-color: #ffffff;
}

.page-title {
  font-size: 22px;
  font-weight: 600;
  margin: 15px 0;
  color: #333333;
}

.section-title {
  font-size: 18px;
  font-weight: 600;
  margin: 20px 0 10px;
  color: #333333;
}

.compare-table-scroll {
  width: 100%;
  overflow-x: auto;
  margin-bottom: 20px;
}

.compare-table {
  width: max-content;
  min-width: 100%;
  border-collapse: collapse;
  background: #fff;
  border-radius: 8px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
}

.compare-table th,
.compare-table td {
  padding: 8px 10px;
  text-align: center;
  border-bottom: 1px solid #eee;
  font-size: 14px;
}

.compare-table th {
  background: #f5f5f5;
  font-weight: 500;
  color: #333;
}

.product-cell {
  display: flex;
  align-items: center;
  gap: 8px;
}

.product-thumb {
  width: 32px;
  height: 32px;
  object-fit: cover;
  border-radius: 4px;
  background: #f0f0f0;
}

.product-link {
  color: #e30613;
  text-decoration: underline;
  font-weight: 500;
  font-size: 14px;
}

.featured-deals {
  display: flex;
  gap: 8px;
  overflow-x: auto;
  padding-bottom: 8px;

  .deal-item {
    flex: 0 0 auto;
    width: 140px;
    height: 100px;
    border-radius: 8px;
    overflow: hidden;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }
}

@media (max-width: 400px) {
  .page-title {
    font-size: 18px;
    margin: 12px 0;
  }

  .section-title {
    font-size: 16px;
    margin: 18px 0 8px;
  }

  .compare-table {
    th,
    td {
      padding: 8px 4px;
      font-size: 12px;
    }
  }

  .featured-deals {
    .deal-item {
      width: 120px;
      height: 85px;
    }
  }
}
</style>
