import weatherApi from "@/api/weatherApi";

export const weather = {
     //namespaced:true,
    state: {
        count: 0,
        cityName:'Ha Noi',
        errorWeather:'',
        dataWeather:{},
        latLon:{ lon: 106.8412, lat: 20.0245 }
    },
    getters: {
        getCount (state) {
          return state.count;
        },
        getError(state){
          return state.errorWeather;
        },
        getDataWeather(state){
            return state.dataWeather;
        },
        getCityName(state){
          return state.cityName;
        },
        getLatLon(state){
          return state.latLon
        }
      },
    mutations: {
        // increment (state,value) {
        //   // `state` is the local module state
        //   state.count++
        // }
        dataWeather(state,value){
            state.dataWeather = value;
        },
        setError(state,value){
          state.errorWeather = value;
        },
        setNameCity(state,value){
          state.cityName = value;
        },
        setLatLon(state,value){
          state.latLon = value
        }
      },
    actions:{
        setDataWeather(context,data){
            context.commit('dataWeather',data)
        },
        async fetchWeatherData (context,data){
          try {
            const dataSearch = await weatherApi.searchLocation(data)
            console.log(dataSearch)
            context.commit('setNameCity',dataSearch.name)
            context.commit('setLatLon',dataSearch.coord)
            context.commit('setError')
            const dataWeat = await weatherApi.defaultWeather(context.state.latLon.lat,context.state.latLon.lon);
            context.commit('dataWeather',dataWeat)

          } catch (error) {
            context.commit('setError','Not city location')
            console.log(error);
            
          }
        }
        // updateCount(context){
        //     context.commit('increment')
        // }
      }
}