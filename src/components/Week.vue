<template>
  <div className="row">
    <div className="list-item-week">
      <div
        v-for="(dataWeek, index) in dataWeeks"
        :key="index"
        className="item "
        @click="setItemWeek(dataWeek)"
      >
        <div
          :class="{ 'item-info': true, active: dataWeek.dt === itemWeek.dt }"
        >
          <div className="content">
            <p className="date-time">{{ format_date(dataWeek.dt) }}</p>
            <div className="text-center">
              <img
                v-bind:src="
                  'https://openweathermap.org/img/w/' +
                  dataWeek.weather[0]?.icon +
                  '.png'
                "
                alt=""
              />
              <p className="item-d">
                {{ getTemp(dataWeek.temp.min) }}° -
                {{ getTemp(dataWeek.temp.max) }}°
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div className="item-detail">
      <div className="content-item-detail">
        <p className="detail-date">{{ getDate }}</p>
        <div className="content-item">
          <div className="item">
            <p className="item-text">Temp current : {{ getTempCurrent }} °C</p>
            <p className="item-text">
              Temp : {{ getTempMin }} °C - {{ getTempMax }} °C
            </p>
            <p className="item-text">Humidity : {{ getHumidity }} %</p>
            <p className="item-text">Wind speed : {{ getWindSpeed }} km/h</p>
          </div>
          <div className="item">
            <p className="item-text">Sunrise : {{ getSunrise }}</p>
            <p className="item-text">Sunset : {{ getSunset }}</p>
            <p className="item-text">Description : {{ getDescription }}</p>
            <p className="item-text">
              Atmospheric pressure : {{ getPressure }} hPa
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import moment from "moment";

export default {
  data() {
    return {
      dataWeeks: this.$store.getters.getDataWeather?.daily,
      itemWeek: this.$store.getters.getDataWeather?.daily[0],
    };
  },
  computed: {
    getDate() {
      return moment.unix(this.itemWeek?.dt).format("ddd, DD/MM");
    },
    getTempCurrent() {
      return Math.round(this.itemWeek?.temp?.day);
    },
    getTempMin() {
      return this.itemWeek?.temp?.min;
    },
    getTempMax() {
      return this.itemWeek?.temp?.max;
    },
    getHumidity() {
      return this.itemWeek?.humidity;
    },
    getWindSpeed() {
      return this.itemWeek?.wind_speed;
    },
    getSunrise() {
      return moment.unix(this.itemWeek?.sunrise).format("h:mm a");
    },
    getSunset() {
      return moment.unix(this.itemWeek?.sunset).format("h:mm a");
    },
    getDescription() {
      return (
        this.itemWeek &&
        this.itemWeek.weather[0] &&
        this.itemWeek.weather[0].description
      );
    },
    getPressure() {
      return this.itemWeek?.pressure;
    },
  },
  methods: {
    format_date(value) {
      if (value) {
        return moment.unix(String(value)).format("dddd, h:mm a");
      }
    },
    getTemp(value) {
      if (value) {
        return Math.round(value);
      }
    },
    setItemWeek(value) {
      this.itemWeek = value;
    },
  },
  mounted() {},
};
</script>
