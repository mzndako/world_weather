<template>
<div class="container">
    <div class="row">
        <div class=col-md-12>
            Search: <input type="text" v-model="search"  /> 
            <button class="btn btn-primary btn-xs btn-sm" @click="search_now()">Search</button>
        </div>
        <div v-if="searching" class="col-md-12" align="center">
            <img src="@/assets/images/loading.gif" width="200px" height="200px" />
        </div>
        <div class="col-md-4" v-for="(data, index) in locations" :key="index" >
            <weather v-if="data.title" :woeid="data.woeid"></weather>
            <br>
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
            locations: {"Istanbul":{}, "Berlin":{}, "London":{}, "Helsinki":{}, "Dublin":{}, "Vancouver":{}},
            search: "",
            searching: false
        }
    },
    mounted() {
        this.fetchWeather();
    },
    methods: {
        fetchWeather(){
            this.searching = true;
            for(let location in this.locations){
              this.axios.get(this.BASE_API + "?command=search&keyword="+ location).then((response) => {
                let data = response.data;
                // Pick the first element in the array
                this.locations[location] = data[0];
                this.searching = false;
              }) 
            };
               
        },
        search_now(){
            if(!this.search.trim()){
                return alert("Enter a location to search")
            }
            this.$router.push("/search/"+this.search);
        }
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->

<style scoped>

</style>
