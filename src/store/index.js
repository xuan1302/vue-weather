import { createStore } from "vuex";
import { weather } from "./module/weather";
console.log(weather)
const store = createStore({
  modules: {
    weather
  },
});

export default store;