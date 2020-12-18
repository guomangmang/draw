<template>
  <div class="container">
    <el-container>
      <el-header height="40">
        <Header></Header>
      </el-header>
      <el-main>
      </el-main>
    </el-container>
  </div>
</template>
<script>
export default {
  name: 'Home',
  data() {
    return {
    }
  },
  methods: {
  }
}
</script>
<style lang="less" scoped>
.container {
  background-color: #101010;
  height: 100%;
  /deep/ .el-header {
    padding: 0 8px;
  }
  /deep/ .el-main {
    display: flex;
    flex-direction: row;
    height: 100%;
    padding: 0;
    background-color: #303030;
    overflow: hidden;
  }
}
</style>