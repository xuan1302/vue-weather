<template>
  <div class="wrap">
    <form class="form-search">
      <input
        type="text"
        class="form-control"
        placeholder="Search"
        @keydown.enter.prevent="handleSearch"
        v-model="keyword"
      />
    </form>
    <img
      v-bind:src="'https://openweathermap.org/img/w/' + getIcon + '.png'"
      alt=""
      v-bind:style="{ width: '80px' }"
    />

    <div class="title-city">{{ getCityName }}</div>
    <div class="title-temp">{{ getTemperature }} °C</div>
    <div class="title-date">Date: {{ getDateWeather }}</div>
    <!-- <button @click="updateCount()">Click me</button> -->
    <div class="title-cloud">
      {{ getDataWeather?.current?.weather[0]?.description }} <br />
      {{ getDataWeather?.current?.weather[0]?.main }}
      {{ `${getDataWeather?.current?.clouds}%` }}
    </div>
    <div class="img-sidebar">
      <h4>Ha Noi</h4>
      <img src="@/assets/vector.png" />
    </div>
  </div>
</template>

<script>
import weatherApi from "@/api/weatherApi";
import { mapActions, mapGetters, mapMutations } from "vuex";
import moment from "moment";
export default {
  data() {
    return {
      latlon: { lon: 105.8412, lat: 21.0245 },
      err: this.$store.getters.getError,
      keyword: "",
      //data: this.$store.getters.getDataWeather,
    };
  },
  computed: {
    ...mapGetters(["getCount", "getDataWeather", "getError", "getCityName"]),
    getDateWeather() {
      return moment
        .unix(String(this.$store.getters.getDataWeather?.current?.dt))
        .format("dddd, h:mm a");
    },
    getIcon() {
      return this.$store.getters.getDataWeather?.current?.weather[0].icon;
    },
    getTemperature() {
      return Math.round(this.$store.getters.getDataWeather?.current?.temp);
    },
  },
  methods: {
    //...mapMutations(['increment']),
    // ...mapActions(["setDataWeather"]),
    // innitData() {
    //   this.setDataWeather();
    // },
    updateCount() {
      this.latlon = {
        lon: this.$store.getters.latLon.lon,
        lat: his.$store.getters.latLon.lat,
      };
    },
    format_date(value) {
      if (value) {
        return moment.unix(String(value)).format("dddd, h:mm a");
      }
    },
    async getData() {
      try {
        const data = await weatherApi.defaultWeather(
          this.latlon.lat,
          this.latlon.lon
        );
        this.$store.dispatch("setDataWeather", data);
      } catch (error) {
        console.log(error);
      }
    },
    handleSearch() {
      this.$store.dispatch("fetchWeatherData", this.keyword);
    },
  },
  created() {
    this.getData();
  },
  mounted() {},
};
</script>
