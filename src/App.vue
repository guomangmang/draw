<template>
  <div id="app">
    <backTop>
      <router-view />
    </backTop>
  </div>
</template>

<style lang="less">
body,html {
  margin: 0;
  padding: 0;
  width: 100%;
  height: 100%;
}
#app {
  width: 100%;
  height: 100%;
  overflow: hidden;
}
</style>
