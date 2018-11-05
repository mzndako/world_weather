<template>
    <div>

    </div> 
</template>

<script>
// import {getWeather} from "@/api/weather.js";
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  mounted(){
    this.fetchWeather();
  },
  methods: {
    fetchWeather: ()=>{
      
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
