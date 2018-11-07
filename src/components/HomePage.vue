<template>
<div class="container">
    <div class="row">
        <div class="col-md-4" v-for="(data, index) in locations" :key="index" >
            <weather v-if="data.title" :data="data"></weather>
        </div>
    </div>
</div>
</template>

<script>
import weather from "./custom/weather";
export default {
    name: 'HomePage',
    components: {
        weather
    },
    data() {
        return {
            locations: {"Istanbul":{}, "Berlin":{}, "London":{}, "Helsinki":{}, "Dublin":{}, "Vancouver":{}}
        }
    },
    mounted() {
        this.fetchWeather();
    },
    methods: {
        fetchWeather(){
            
            for(let location in this.locations){
              this.axios.get(this.BASE_API + "?command=search&keyword="+ location).then((response) => {
                let data = response.data;
                // Pick the first element in the array
                this.locations[location] = data[0];
                console.log(location, data);
              }) 
            };
               
        }
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->

<style scoped>

</style>
