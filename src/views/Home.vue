<template>
  <div class="home">
      首页
  </div>
</template>

<script>
import {getorglist} from "../apis/api"
export default {
  name: 'home',
  components: {
    
  },
  created(){
    this.getinfo()
  },
  methods:{
    getinfo(){
        getorglist().then( res => {
            
        })
    }
  }
}
</script>
