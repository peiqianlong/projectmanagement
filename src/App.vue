<template>
  <div id="app" v-cloak>
    <appview></appview>
  </div>
</template>
<script>
export default {
  name: "app",
  components: {
    appview : resolve => require(["./components/AppView"],resolve)
  }
};
</script>
<style lang="less">
@import "https://at.alicdn.com/t/font_1207594_qdzq526fhs.css";
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  height: 100%;
}
</style>
