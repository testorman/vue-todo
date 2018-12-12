<template>
  <div id="app">
    <todo-header></todo-header>
    <!-- v-on:하위 컴포넌트에서 발생시킨 이벤트 이름 = "현재 컴포넌트의 메서드 명" -->
    <todo-input></todo-input>
    <!-- "v:bind: 내려보낼 프롭스 속성 이름 = 현재 위치의 컴포넌트 데이터 속성'" -->
    <todo-list v-bind:propsdata="todoItems" 
               v-on:removeItem = "removeOneItem"
               ></todo-list>
    <todo-footer v-on:clearAll = "clearAllItems"></todo-footer>
  </div>
</template>

<script>
import TodoHeader from './components/TodoHeader.vue'
import TodoInput from './components/TodoInput.vue'
import TodoList from './components/TodoList.vue'
import TodoFooter from './components/TodoFooter.vue'

export default {
  components:{

    //ES5
    //'TodoHeader' : TodoHeader,
    //'TodoInput' : TodoInput,
    //'TodoList' : TodoList,
    //'TodoFooter' : TodoFooter

    //ES6
    TodoHeader,
    TodoInput,
    TodoList,
    TodoFooter


  },
  data(){
    return {
      todoItems:[]
    }
  },
  methods:{
    // ES6 함수 정의
    // var sum = function(a,b){
    //   return a+b;
    // }

    // ES 6
    // var sum = (a,b) => {
    //   return a*b;
    // }

    // ES5
    // var arr = ["a","b","c"];
    // arr.forEach(function(value){
    //     console.log(value); // a , b, c
    // });

    // ES6
    // var arr = ["a","b","c"];
    // arr.forEach(value => console.log(value)); // a,b,c


    // var figures = 10;
    // var dictionary = {
    //   //figures : figures,
    //   figures 
    // }

    removeOneItem(todoItem, index){
         localStorage.removeItem(todoItem.item);
         this.todoItems.splice(index,1);// 특정 index 에서 하나를 지움.
    },
    // toggleOneItem(todoItem, index){
    //      this.todoItems[index].completed = !this.todoItems[index].completed;
    //      localStorage.removeItem(todoItem.item);
    //      localStorage.setItem(todoItem.item, JSON.stringify(todoItem));
    // },
    clearAllItems(){
         localStorage.clear();
         this.todoItems = [];
    }
  },
  created(){

    }
}
</script>

<style>
body {
  text-align: center;
  background-color: #f6f6f6;
}

input {
  border-style: groove;
  width: 200px;
}

button {
  border-style:  groove;
}

.shadow {
  box-shadow: 5px 10px 10px rgba(0, 0, 0, 0.03);
}
</style>
