<template>
  <nav class="bottom-nav">
    <router-link to="/" class="nav-item">
      <i class="mdi mdi-home"></i>
      <span>Home</span>
    </router-link>
    <router-link to="/search" class="nav-item">
      <i class="mdi mdi-magnify"></i>
      <span>Search</span>
    </router-link>
    <router-link to="/account" class="nav-item">
      <i class="mdi mdi-account"></i>
      <span>Account</span>
    </router-link>
    <router-link to="/support" class="nav-item">
      <i class="mdi mdi-help-circle"></i>
      <span>Support</span>
    </router-link>
  </nav>
</template>

<script>
export default {
  name: 'BottomNav'
}
</script>

<style lang="scss" scoped>
.bottom-nav {
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  background: white;
  display: flex;
  justify-content: space-around;
  padding: 0.5rem;
  box-shadow: 0 -2px 10px rgba(0, 0, 0, 0.1);
}

.nav-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-decoration: none;
  color: $secondary-color;
  padding: 0.5rem;
  
  &.router-link-active {
    color: $primary-color;
  }
  
  i {
    font-size: 1.5rem;
    margin-bottom: 0.25rem;
  }
  
  span {
    font-size: 0.8rem;
  }
}
</style> 