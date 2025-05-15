<template>
  <div class="product-card">
    <div class="product-image">
      <img :src="product.image" :alt="product.name" />
    </div>
    <div class="product-info">
      <h3>{{ product.name }}</h3>
      <div class="price">₪{{ product.price.toFixed(2) }}</div>
      <div class="store">
        <span class="mdi mdi-store"></span>
        at {{ product.store }}
      </div>
    </div>
    <div class="compare-btn">
      <button @click="compareProduct">Compare</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ProductCard',
  props: {
    product: {
      type: Object,
      required: true,
    },
  },
  methods: {
    compareProduct() {
      this.$router.push('/compare')
    },
  },
}
</script>

<style lang="scss" scoped>
.product-card {
  display: flex;
  background-color: #ffffff;
  border-radius: 8px;
  padding: 10px;
  margin-bottom: 10px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
}

.product-image {
  width: 60px;
  height: 60px;
  margin-right: 10px;
  border-radius: 4px;
  overflow: hidden;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
}

.product-info {
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  h3 {
    font-size: 16px;
    margin: 0 0 3px 0;
    font-weight: 500;
    color: #333333;
  }

  .price {
    font-size: 18px;
    font-weight: bold;
    color: #e30613;
  }

  .store {
    font-size: 14px;
    color: #666;
    display: flex;
    align-items: center;

    .mdi {
      margin-right: 5px;
    }
  }
}

.compare-btn {
  display: flex;
  align-items: center;

  button {
    background-color: #e30613;
    color: white;
    border: none;
    border-radius: 20px;
    padding: 6px 14px;
    font-size: 14px;
    cursor: pointer;
    outline: none;

    &:hover {
      background-color: darken(#e30613, 10%);
    }
  }
}

@media (max-width: 400px) {
  .product-info {
    h3 {
      font-size: 14px;
    }

    .price {
      font-size: 16px;
    }

    .store {
      font-size: 12px;
    }
  }

  .compare-btn button {
    padding: 4px 10px;
    font-size: 12px;
  }
}
</style>
