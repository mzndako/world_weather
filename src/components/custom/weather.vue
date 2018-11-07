<template>
   <div>
       <h2>{{details.title}}</h2>
       <p>
           <img :src="image_link" width="64px" height="64px" />
       </p>    
       <p>
           <h3>{{details.the_temp | format}}</h3>
           <b>Min Temp.: </b> {{details.min_temp | format}}<br>
           <b>Max Temp.: </b> {{details.max_temp | format}}<br>
        </p>
        <!-- {{details}} -->
       <!-- {{full_details}} -->
       
   </div>    
</template> 

<script>
    export default {
        props: ['data'],
        name: "Weather",
        data(){
            return {
                image_url: "https://www.metaweather.com/static/img/weather/png/64/",
                details: {
                    title: "",
                    weather_state_abbr: "",
                    the_temp: "",
                    min_temp: "",
                    max_temp: ""
                }
            }
        },
        mounted(){
            this.details.title = this.data.title;
            const self = this;
            this.axios.get(this.BASE_API + "?command=location&woeid="+ this.data.woeid).then((response) => {
                let data = response.data;
                if(data && data.consolidated_weather){
                    self.details.min_temp = data.consolidated_weather[0].min_temp;
                    self.details.max_temp = data.consolidated_weather[0].max_temp;
                    self.details.the_temp = data.consolidated_weather[0].the_temp;
                    self.details.weather_state_abbr = data.consolidated_weather[0].weather_state_abbr;
                    // console.log("okay", data.consolidated_weather[0]);
                }
                // console.log("mine", self.data);
              }); 
        },
        methods: {
            
            filter(a, b){
                console.log(a, b);
            }
        },
        computed: {
            image_link(){
                return this.image_url + this.details.weather_state_abbr + ".png";
            },
        },
         filters: {
             format(value){
                 return Math.floor(value) + "°C";
             }
         }
    }
</script>