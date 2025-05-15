<template>
  <div class="search-bar">
    <div class="search-input">
      <span class="mdi mdi-magnify search-icon"></span>
      <input type="text" :placeholder="placeholder" v-model="searchText" @input="onSearch" />
    </div>
  </div>
</template>

<script>
export default {
  name: 'SearchBar',
  props: {
    placeholder: {
      type: String,
      default: 'Search for products...',
    },
  },
  data() {
    return {
      searchText: '',
    }
  },
  methods: {
    onSearch() {
      this.$store.dispatch('search', this.searchText)
    },
  },
}
</script>

<style lang="scss" scoped>
.search-bar {
  width: 100%;
  padding: 8px;
  background-color: #e30613;
}

.search-input {
  position: relative;
  width: 100%;

  input {
    width: 100%;
    padding: 8px 8px 8px 36px;
    border-radius: 25px;
    border: none;
    font-size: 15px;
    outline: none;
  }

  .search-icon {
    position: absolute;
    left: 12px;
    top: 50%;
    transform: translateY(-50%);
    color: #777;
    font-size: 18px;
  }
}

@media (max-width: 400px) {
  .search-bar {
    padding: 6px;
  }

  .search-input {
    input {
      padding: 7px 7px 7px 30px;
      font-size: 13px;
    }

    .search-icon {
      left: 10px;
      font-size: 16px;
    }
  }
}
</style>
