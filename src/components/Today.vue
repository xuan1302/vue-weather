<template>
  <div className="row">
    <div className="content-today">
      <div className="item">
        <div className="item-info">
          <div className="content">
            <p className="item-title">UV index</p>
            <div className="text-center">
              <!-- <FiSun className=" icon-size icon-yellow" /> -->
              <p className="text-data">
                {{ getUvi }}
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="item">
        <div className="item-info">
          <div className="content">
            <p className="item-title">Wind Status</p>
            <div className="text-center">
              <!-- <WiDayWindy className="icon-green icon-size" /> -->
              <p className="text-data text-center">
                {{ getWindStatus }}
                km/h
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="item">
        <div className="item-info">
          <div className="content">
            <p className="item-title">Sunrise & Sunset</p>
            <p className="icon-set text-data">
              <!-- <WiSunrise className=" icon-size icon-yellow" /> -->
              {{ getSunrise }}
            </p>
            <p className="icon-set icon-sun text-data">
              <!-- <WiSunset className=" icon-size icon-yellow" />  -->
              {{ getSunset }}
            </p>
          </div>
        </div>
      </div>
      <div className="item">
        <div className="item-info">
          <div className="content">
            <p className="item-title">Humidity</p>
            <div className="text-center">
              <!-- <WiHumidity className="icon-green icon-size" /> -->
              <p className="text-data text-center">{{ getHumidity }} %</p>
            </div>
          </div>
        </div>
      </div>
      <div className="item">
        <div className="item-info">
          <div className="content">
            <p className="item-title">Visibility</p>
            <div className="text-center">
              <!-- <IoMdSpeedometer className="icon-yellow icon-size" /> -->
              <p className="text-data text-center">{{ getVisibility }} km</p>
            </div>
          </div>
        </div>
      </div>
      <div className="item">
        <div className="item-info">
          <div className="content">
            <p className="fs-5 text-black-50">Pressure</p>
            <div className="text-center">
              <!-- <FaThermometerEmpty className="icon-green icon-size" /> -->
              <p className="text-data text-center">
                {{ getPressure }}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import moment from "moment";
import { mapGetters } from "vuex";

export default {
  components: {},
  computed: {
    ...mapGetters(["getDataWeather"]),
    getWindStatus() {
      return (
        this.$store.getters.getDataWeather?.current?.wind_speed * 3.6
      ).toFixed(2);
    },
    getUvi() {
      return this.$store.getters.getDataWeather?.current?.uvi;
    },
    getSunrise() {
      return moment
        .unix(this.$store.getters.getDataWeather?.current?.sunrise)
        .format("h:mm a");
    },
    getSunset() {
      return moment
        .unix(this.$store.getters.getDataWeather?.current?.sunset)
        .format("h:mm a");
    },
    getHumidity() {
      return this.$store.getters.getDataWeather?.current?.humidity;
    },
    getVisibility() {
      return this.$store.getters.getDataWeather?.current?.visibility / 1000;
    },
    getPressure() {
      return this.$store.getters.getDataWeather?.current?.pressure;
    },
  },
};
</script>
