<template>
  <div class="filter-buttons">
    <button class="filter-btn">
      Category
      <span class="mdi mdi-chevron-down"></span>
    </button>
    <button class="filter-btn">
      Price Range
      <span class="mdi mdi-chevron-down"></span>
    </button>
    <button class="filter-btn">
      Brand
      <span class="mdi mdi-chevron-down"></span>
    </button>
  </div>
</template>

<script>
export default {
  name: 'FilterBar',
}
</script>

<style lang="scss" scoped>
.filter-buttons {
  display: flex;
  flex-direction: column;
  gap: 6px;
}

.filter-btn {
  width: 100%;
  padding: 8px 10px;
  background-color: #f5f5f5;
  border: none;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 14px;
  cursor: pointer;
  color: #555;
  text-align: left;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
}

@media (max-width: 400px) {
  .filter-btn {
    padding: 6px 8px;
    font-size: 12px;
  }
}
</style>
