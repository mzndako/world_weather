<template>
<div @click="view_full()">
    <div v-if="searching" align="center">
        <img src="@/assets/images/loading.gif" width="200px" height="200px" />
        </div>

        <div v-else >
            <h2>{{details.title}}</h2>
            <p>
                <img :src="image_link" width="64px" height="64px" alt="Loading..." />
       </p>
                <p>
                    <h3>{{details.the_temp | format}}</h3>
                    <b>Min Temp.: </b> {{details.min_temp | format}}<br>
                    <b>Max Temp.: </b> {{details.max_temp | format}}<br>
        </p>
        </div>
    </div>
</template>

<script>
export default {
    props: ['woeid'],
    name: "Weather",
    data() {
        return {
            image_url: "https://www.metaweather.com/static/img/weather/png/64/",
            details: {
                title: "",
                weather_state_abbr: "",
                the_temp: "",
                min_temp: "",
                max_temp: ""
            },
            searching: true
        }
    },
    mounted() {

      // Fetch the remaining properties using the woeid
        this.axios.get(this.BASE_API + "?command=location&woeid=" + this.woeid).then((response) => {
            let data = response.data;
            if (data && data.consolidated_weather) {
                this.details.min_temp = data.consolidated_weather[0].min_temp;
                this.details.max_temp = data.consolidated_weather[0].max_temp;
                this.details.the_temp = data.consolidated_weather[0].the_temp;
                this.details.weather_state_abbr = data.consolidated_weather[0].weather_state_abbr;
            }
            this.details.title = data.title;
            this.searching = false;
        });
    },
    methods: {
        view_full() {
            this.$router.push("/weather/" + this.woeid);
        }
    },
    computed: {
        image_link() {
            return this.image_url + this.details.weather_state_abbr + ".png";
        },
    },
    filters: {
        format(value) {
            return Math.floor(value) + "°C";
        }
    }
}
</script>
