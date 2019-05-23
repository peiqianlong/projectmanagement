<template>
  <div class="home">首页
    <div>
        iconfont小图标测试
        <i class="iconfont icon-shuiguo7"></i>
        <i class="iconfont icon-shuiguo6"></i>
        <i class="iconfont icon-shuiguo5"></i>
        <i class="iconfont icon--fen-"></i>
        <i class="iconfont icon-shuiguo4"></i>
        <i class="iconfont icon-shuiguo3"></i>
        <i class="iconfont icon-shuiguo2"></i>
        <i class="iconfont icon-shuiguo1"></i>
        <i class="iconfont icon-shuiguo"></i>
    </div>
  </div>
</template>

<script>
import { getorglist } from "../apis/api";
export default {
  name: "home",
  components: {},
  data() {
    return {};
  },
  created() {
    this.getinfo();
  },
  methods: {
    getinfo() {
      getorglist().then(res => {
        if (res) {
          this.$message({
            message: "数据获取成功",
            type: "success"
          });
        }else{
          this.$message({
            message: "数据获取失败",
            type: "error"
          });
        }
      });
    }
  }
};
</script>
<style lang="less" scoped>
i{
  font-size: 28px;
  margin: 5px;
}
</style>


