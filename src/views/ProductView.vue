<template>
  <div class="product-view">
    <div class="header">
      <router-link to="/compare" class="back-button">
        <span class="mdi mdi-arrow-left"></span> Back to Compare
      </router-link>
    </div>
    <div class="container">
      <div class="product-details">
        <img :src="product.image" class="product-image" :alt="product.name" />
        <h1>{{ product.name }}</h1>
        <div class="category">Category: {{ product.category }}</div>
      </div>
      <div class="prices-table-scroll">
        <table class="prices-table">
          <thead>
            <tr>
              <th>Supermarket</th>
              <th>Price</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="store in stores" :key="store.name">
              <td class="store-cell">
                <img :src="store.logo" class="store-logo" :alt="store.name" />
                {{ store.name }}
              </td>
              <td>
                <span v-if="productPrices[store.name] !== undefined"
                  >₪{{ productPrices[store.name].toFixed(2) }}</span
                >
                <span v-else>-</span>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'ProductView',
  props: ['name'],
  computed: {
    ...mapState(['products', 'stores']),
    product() {
      return (
        this.products.find((p) => p.name === this.name) || {
          name: this.name,
          image: '',
          category: '',
        }
      )
    },
    productPrices() {
      // Find all prices for this product name
      const prices = {}
      this.products.forEach((p) => {
        if (p.name === this.name) {
          prices[p.store] = p.price
        }
      })
      return prices
    },
  },
}
</script>

<style lang="scss" scoped>
.product-view {
  padding-bottom: 60px;
  background: #f5f5f5;
}
.header {
  padding: 16px 0 0 0;
}
.back-button {
  display: flex;
  align-items: center;
  color: #e30613;
  text-decoration: none;
  font-size: 15px;
  margin-bottom: 10px;
  .mdi {
    margin-right: 5px;
  }
}
.container {
  padding: 10px;
}
.product-details {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 20px;
}
.product-image {
  width: 90px;
  height: 90px;
  object-fit: cover;
  border-radius: 8px;
  background: #fff;
  margin-bottom: 10px;
}
h1 {
  font-size: 22px;
  margin: 0 0 8px 0;
  color: #333;
}
.category {
  color: #888;
  font-size: 14px;
  margin-bottom: 10px;
}
.prices-table-scroll {
  width: 100%;
  overflow-x: auto;
}
.prices-table {
  width: 100%;
  min-width: 300px;
  border-collapse: collapse;
  background: #fff;
  border-radius: 8px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
}
.prices-table th,
.prices-table td {
  padding: 10px 12px;
  text-align: left;
  border-bottom: 1px solid #eee;
  font-size: 15px;
  color: #000;
}
.prices-table th {
  background: #f5f5f5;
  font-weight: 500;
  color: #333;
}
.store-cell {
  display: flex;
  align-items: center;
  gap: 8px;
}
.store-logo {
  width: 28px;
  height: 28px;
  object-fit: contain;
  border-radius: 4px;
  background: #fff;
}
</style>
