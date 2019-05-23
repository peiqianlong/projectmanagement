<template>
  <div class="home">首页
    <div>

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

</style>


