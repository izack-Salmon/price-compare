<template>
  <div class="account-view">
    <div class="header">
      <h1>My Account</h1>
    </div>

    <div class="container">
      <div class="profile-section">
        <div class="profile-icon">
          <span class="mdi mdi-account-circle"></span>
        </div>
        <h2>John Doe</h2>
        <p>john.doe@example.com</p>
      </div>

      <div class="menu-list">
        <div class="menu-item">
          <span class="mdi mdi-history"></span>
          <span>Purchase History</span>
          <span class="mdi mdi-chevron-right"></span>
        </div>
        <div class="menu-item">
          <span class="mdi mdi-heart"></span>
          <span>Saved Products</span>
          <span class="mdi mdi-chevron-right"></span>
        </div>
        <div class="menu-item">
          <span class="mdi mdi-bell"></span>
          <span>Notifications</span>
          <span class="mdi mdi-chevron-right"></span>
        </div>
        <div class="menu-item">
          <span class="mdi mdi-cog"></span>
          <span>Settings</span>
          <span class="mdi mdi-chevron-right"></span>
        </div>
        <div class="menu-item">
          <span class="mdi mdi-logout"></span>
          <span>Logout</span>
          <span class="mdi mdi-chevron-right"></span>
        </div>
      </div>
    </div>

    <TheFooter />
  </div>
</template>

<script>
import TheFooter from '@/components/TheFooter.vue'

export default {
  name: 'AccountView',
  components: {
    TheFooter,
  },
}
</script>

<style lang="scss" scoped>
.account-view {
  padding-bottom: 60px;
}

.header {
  padding: 20px 16px;
  background-color: #e30613;
  color: white;

  h1 {
    font-size: 22px;
  }
}

.profile-section {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 30px 0;

  .profile-icon {
    font-size: 80px;
    color: #666;
    margin-bottom: 15px;
  }

  h2 {
    font-size: 20px;
    margin-bottom: 5px;
  }

  p {
    color: #666;
    font-size: 14px;
  }
}

.menu-list {
  margin-top: 20px;
}

.menu-item {
  display: flex;
  align-items: center;
  padding: 16px;
  border-bottom: 1px solid #eee;

  .mdi:first-child {
    font-size: 22px;
    margin-right: 15px;
    color: #666;
  }

  span:nth-child(2) {
    flex: 1;
  }

  .mdi-chevron-right {
    color: #ccc;
  }
}
</style>
