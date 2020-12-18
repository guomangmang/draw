<template>
  <div class="page-content-scroll">
    <el-backtop target=".page-content-scroll"></el-backtop>
    <slot></slot>
  </div>
</template>

<script>
name:'BackTop'
export default {
}
</script>
<style lang="less">
  .page-content-scroll {
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    overflow-x: hidden;
  }
</style>