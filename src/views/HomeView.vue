<template>
  <div class="home">
    <h1>Home page</h1>
    <button @click="handleClick">Click</button>
    {{status}}
  </div>
</template>

<script>
  //import weatherApi from "../api/weatherApi";
  export default {
    data() {
    return {
      data: null,
      content:"check lifecycle",
      status:true,
    }
  },
  beforeCreate () {
      console.log('before create')
      console.log(this.content) // khi này this.content trả về undefined vì data chưa được nhận (observe).
    },
  created () {
      console.log('created')
      console.log(this.content) // khi này this.content trả về  "Lifecycle Hooks" vì quá trình observe data, thiết lập event đã hoàn thành.
  },
  mounted () {
    //this.getAllData();
  },
  methods: {
    handleClick(){
      console.log(123)
    },
    // async getAllData() {
    //   this.status = true
    //   try {
    //     const res = await weatherApi.defaultWeather(15,20)
    //     console.log(res)
    //   } catch (err) {
    //     console.log(err)
    //   }
    //   this.status = false
    // },
  }
  }
</script>