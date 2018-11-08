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
        <div v-else-if="woeids.length > 0" class="col-md-4" v-for="woeid in woeids" :key="woeid" >
            <weather :woeid="woeid"></weather>
            <br>
        </div>
        <div class="col-md-12" v-else >
            <h5><i>No results were found. Try changing the keyword!</i></h5>
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
            search: "",
            searching: false,
            woeids: []
        }
    },
    mounted() {
        this.search = this.$route.params.search;
        this.search_now();
    },
    methods: {
        search_now(){
              this.searching = true;  
              this.axios.get(this.BASE_API + "?command=search&keyword="+ this.search).then((response) => {
                let data = response.data;
                // Pick the first element in the array
                if(data && data.length > 0){
                    this.woeids = data.map(value=>value.woeid);
                }else{
                    this.woeids = [];
                }
                this.searching = false;
                
              }); 
               
        }
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->

<style scoped>

</style>
