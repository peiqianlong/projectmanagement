<template>
  <div id="app" v-cloak>
    <el-container style="height:100%;">
      <el-aside class="styleone" :style="{width : asidewidth}" v-if="hideslid">
        <BackAside ref="sild" :isasidewidth = "isasidewidth" :typeAslid = "typeAslid"></BackAside>
      </el-aside>
      <el-container>
        <el-header v-if="hideslid">
          <BackHeader @flod="flod"></BackHeader>
        </el-header>
        <el-main>
          <router-view/>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>
<script>
import BackAside from "./components/BackAside";
import BackHeader from "./components/BackHeader";
export default {
  name: "app",
  components: {
    BackAside,
    BackHeader
  },
  data() {
    return {
      asidewidth: "200px",
      isasidewidth: false,
      typeAslid:0,
      hideslid : true
    };
  },
  updated(){
    this.urlpath()
  },
  methods: {
    //改变左侧导航栏
    flod(val) {
      // this.$refs.sild.menulistobj(this.typeAslid)
      if (val === "foldtype") {
        if (this.asidewidth === "200px") {
          this.asidewidth = "70px";
          this.isasidewidth = true;
        } else {
          this.asidewidth = "200px";
          this.isasidewidth = false;
        }
      }else if(val === "shoppingtype"){
          this.typeAslid = 1
      }else if(val === "email"){
          this.typeAslid = 2
      }else if(val === "index"){
          this.typeAslid = 0
      }
    },
    // 判断是否登陆隐藏侧边栏
    urlpath(){
      if(this.$router.currentRoute.name === "login"){
          this.hideslid = false
      }else{
        this.hideslid = true
      }
    }
  }
};
</script>
<style scoped>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  height: 100%;
}
.el-header,
.el-footer {
  background-color: #b3c0d1;
  color: #333;
  text-align: center;
  line-height: 60px;
}

.el-aside {
  background-color: #d3dce6;
  color: #333;
  text-align: center;
  line-height: 200px;
  transition: width 0.5s linear 0s;
}

.el-main {
  background-color: #e9eef3;
  color: #333;
  text-align: center;
  /* line-height: 160px; */
  padding: 0;
}

body > .el-container {
  margin-bottom: 40px;
}

.el-container:nth-child(5) .el-aside,
.el-container:nth-child(6) .el-aside {
  line-height: 260px;
}

.el-container:nth-child(7) .el-aside {
  line-height: 320px;
}
.styleone {
  width: 200px;
  background-color: rgb(84, 92, 100);
}
</style>
