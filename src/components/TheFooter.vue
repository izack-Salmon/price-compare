<template>
  <div class="footer">
    <router-link to="/" class="footer-item">
      <span class="mdi mdi-home"></span>
      <span>Home</span>
    </router-link>
    <router-link to="/search" class="footer-item">
      <span class="mdi mdi-magnify"></span>
      <span>Search</span>
    </router-link>
    <router-link to="/account" class="footer-item">
      <span class="mdi mdi-account"></span>
      <span>Account</span>
    </router-link>
    <router-link to="/support" class="footer-item">
      <span class="mdi mdi-help-circle"></span>
      <span>Support</span>
    </router-link>
  </div>
</template>

<style lang="scss" scoped>
.footer {
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  max-width: 480px;
  margin: 0 auto;
  height: 60px;
  background-color: #fff;
  box-shadow: 0 -1px 5px rgba(0, 0, 0, 0.1);
  padding: 0 10px;
  z-index: 100;
}

.footer-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-decoration: none;
  color: #666;
  font-size: 12px;
  padding: 8px 0;
  width: 25%;

  &.router-link-active {
    color: #e30613;
  }

  .mdi {
    font-size: 24px;
    margin-bottom: 2px;
  }
}

@media (max-width: 400px) {
  .footer {
    height: 50px;
    padding: 0 5px;
  }

  .footer-item {
    font-size: 10px;
    padding: 5px 0;

    .mdi {
      font-size: 20px;
      margin-bottom: 1px;
    }
  }
}
</style>
