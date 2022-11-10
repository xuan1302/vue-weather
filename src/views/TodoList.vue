<template>
    <div class="todolist">
      <input v-model="newTodo" placeholder="Enter todo list" />
      <button @click="addTodo">Add</button>
      {{pending}}
      <ul>
        <li v-for="todo in todos" :key="todo.id">{{todo.name}}<span @click="removeTodo(todo.id)">Delete</span></li>
      </ul>
    </div>
  </template>
  
  <script>
  // @ is an alias to /src
  import HelloWorld from "@/components/HelloWorld.vue";
  let id = 0;
  export default {
    name: "TodoList",
    data(){
      return{
        newTodo:"",
        todos:[],
      }
    },
    components: {
    },
    // watch:{
    //   newTodo: function(){
    //     console.log("updating...")
    //   }
    // },
    methods: {
      addTodo(){
        this.todos.push({id:id++,name:this.newTodo})
        this.newTodo = ""
      },
      removeTodo(id){
        this.todos = this.todos.filter(item => item.id !== id)
      },
    },
  };
  </script>
  