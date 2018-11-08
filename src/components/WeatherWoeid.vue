<template>
<div align="center" style="">
    <div v-if="searching" class="col-md-12" align="center">
        <img src="@/assets/images/loading.gif" width="200px" height="200px" />
    </div>
        <div v-else>
            <h1>{{title}}</h1>
            <div class="row">
                <div class="col-md-3" v-for="(details, index) in all" :key="index">
                    <h3>
                        {{ details.applicable_date | day}}<br>
                        <small>{{ details.applicable_date | date }}</small>
                    </h3>
                    <p>
                        <img :src="image_link(details.weather_state_abbr)" width="64px" height="64px" alt="Loading..." />
            </p>
                        <p>
                            <h3>{{details.the_temp | format}}</h3>
                            <b>Min Temp.: </b> {{details.min_temp | format}}<br/>
                            <b>Max Temp.: </b> {{details.max_temp | format}}
                        </p>
                        <br>
        </div>
                </div>
            </div>
        </div>
</template>

<script>
export default {
    name: "WeatherWoeid",
    data() {
        return {
            image_url: "https://www.metaweather.com/static/img/weather/png/64/",
            all: [],
            woeid: "",
            title: "",
            searching: true

        }
    },
    mounted() {
        this.woeid = this.$route.params.woeid;
        
        // Fetch the remaining properties using the woeid
        this.axios.get(this.BASE_API + "?command=location&woeid=" + this.woeid).then((response) => {
            let data = response.data;
            if (data && data.consolidated_weather) {
                this.all = data.consolidated_weather;
                this.title = data.title;
            }
            this.searching = false;
        });
    },
    methods: {
        image_link(x) {
            return this.image_url + x + ".png";
        }
    },
    filters: {
        format(value) {
            return Math.floor(value) + "°C";
        },
        day(value) {
            let days = ['Sunday', 'Monday', 'Tueday', 'Wednesday', 'Thurday', 'Friday', 'Saturday'];
            let date = new Date(value);
            let today = new Date();

            if (date.getDay() == today.getDay()) {
                return "Today";
            }
            return days[date.getDay()];
        },
        date(value) {
            let date = new Date(value);
            let array = date.toDateString().split(" ");
            return array[1] + " " + array[2];
        }
    }
}
</script>
