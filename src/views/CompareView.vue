<template>
  <div class="compare-view">
    <div class="header">
      <h1>Price Comparison</h1>
      <router-link to="/search" class="back-button">
        <span class="mdi mdi-arrow-left"></span> Back to Search
      </router-link>
    </div>

    <div class="container">
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
              <td
                v-for="store in stores"
                :key="store.name"
                :class="{ 'best-price': isBestPrice(item, store.name) }"
              >
                ₪{{ item.prices[store.name] ? item.prices[store.name].toFixed(2) : '-' }}
              </td>
            </tr>
            <tr class="total-row">
              <td><strong>Total</strong></td>
              <td v-for="store in stores" :key="store.name">
                ₪{{ getTotal(store.name).toFixed(2) }}
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <div class="best-store">
        <h3>Best Overall Price:</h3>
        <div class="store-result">
          <span class="store-name">{{ getBestStore() }}</span>
          <span class="savings">Save up to ₪{{ getMaxSavings().toFixed(2) }}</span>
        </div>
      </div>
    </div>

    <TheFooter />
  </div>
</template>

<script>
import TheFooter from '@/components/TheFooter.vue'
import { mapGetters, mapState } from 'vuex'

export default {
  name: 'CompareView',
  components: {
    TheFooter,
  },
  computed: {
    ...mapGetters(['comparedProducts']),
    ...mapState(['stores', 'products']),
  },
  methods: {
    isBestPrice(item, storeName) {
      const prices = Object.values(item.prices).filter(
        (price) => price !== null && price !== undefined,
      )
      if (prices.length === 0) return false
      const minPrice = Math.min(...prices)
      return item.prices[storeName] === minPrice
    },
    getTotal(storeName) {
      return this.comparedProducts.reduce((total, item) => {
        const price = item.prices[storeName]
        return total + (price || 0)
      }, 0)
    },
    getBestStore() {
      const totals = this.stores.map((store) => ({
        store: store.name,
        total: this.getTotal(store.name),
      }))
      totals.sort((a, b) => a.total - b.total)
      return totals[0].store
    },
    getMaxSavings() {
      const totals = this.stores.map((store) => this.getTotal(store.name))
      const min = Math.min(...totals)
      const max = Math.max(...totals)
      return max - min
    },
    getProductImage(name) {
      const found = this.products.find((p) => p.name === name)
      return found ? found.image : ''
    },
  },
}
</script>

<style lang="scss" scoped>
.compare-view {
  padding-bottom: 60px;
  background-color: #f5f5f5;
}

.header {
  padding: 15px 12px;
  background-color: #e30613;
  color: white;

  h1 {
    font-size: 20px;
    margin-bottom: 8px;
    font-weight: 600;
  }

  .back-button {
    display: flex;
    align-items: center;
    color: white;
    text-decoration: none;
    font-size: 14px;

    .mdi {
      margin-right: 5px;
    }
  }
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
  color: #000;
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

.best-store {
  margin-top: 15px;
  padding: 12px;
  background-color: #ffffff;
  border-radius: 8px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);

  h3 {
    font-size: 16px;
    margin-bottom: 8px;
    color: #333333;
    font-weight: 600;
  }

  .store-result {
    display: flex;
    justify-content: space-between;
    align-items: center;

    .store-name {
      font-size: 18px;
      font-weight: bold;
      color: #e30613;
    }

    .savings {
      font-size: 14px;
      color: #28a745;
      font-weight: 500;
    }
  }
}

@media (max-width: 400px) {
  .header {
    padding: 12px 10px;

    h1 {
      font-size: 18px;
      margin-bottom: 6px;
    }

    .back-button {
      font-size: 12px;
    }
  }

  .compare-table {
    margin-top: 10px;

    table {
      th,
      td {
        padding: 6px 4px;
        font-size: 12px;
      }
    }
  }

  .best-store {
    padding: 10px;

    h3 {
      font-size: 14px;
    }

    .store-result {
      .store-name {
        font-size: 16px;
      }

      .savings {
        font-size: 12px;
      }
    }
  }
}
</style>
