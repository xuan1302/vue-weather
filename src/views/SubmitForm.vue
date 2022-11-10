<template>
    <h1>This form submit</h1>
    <form @submit.prevent="handleSubmitForm">
        <input type="text" v-model="fullname" />
        
        <input type="submit" value="Submit" />
    </form>
</template>
<script>
export default {
    name: "SubmitForm",
    data(){
      return{
        fullname:"",
      }
    },
    components: {
    },
    methods: {
        handleSubmitForm(){
        console.log(this.fullname)
      },
    },
  };
</script>