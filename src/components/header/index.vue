<template>
  <div class="header">
    <div class="logo">
      <img src="../../assets/images/logo.png" class="logo-img" />
      <p class="name">拖拽系统</p>
    </div>
    <div class="header-main">
      <img src="../../assets/images/Honeywell_Logo.png" class="logo-img" />
    </div>
  </div>
</template>
<script>
export default {
  name: 'Hader',
}
</script>
<style lang="less" scoped>
  .header {
    display: flex;
    height: 40px;
    justify-content: space-between;
    .logo {
      display: flex;
      align-items: center;
      .logo-img {
        width: 32px;
        height: 32px;
        margin-right: 16px;
      }
      .name {
        font-size: 16px;
        font-weight: bold;
        color: #fff;
      }
    }
    .header-main {
      display: flex;
      align-items: center;
      img {
      width: 86px;
      height: 16px;
      }
    }
  }
</style>