<template>
  <div id="app">
    <todo-header></todo-header>
    <!-- v-on:하위 컴포넌트에서 발생시킨 이벤트 이름 = "현재 컴포넌트의 메서드 명" -->
    <todo-input v-on:addTodoItem="addOneItem"></todo-input>
    <!-- "v:bind: 내려보낼 프롭스 속성 이름 = 현재 위치의 컴포넌트 데이터 속성'" -->
    <todo-list v-bind:propsdata="todoItems" 
               v-on:removeItem = "removeOneItem"
               v-on:toggleItem = "toggleOneItem"></todo-list>
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
    'TodoHeader' : TodoHeader,
    'TodoInput' : TodoInput,
    'TodoList' : TodoList,
    'TodoFooter' : TodoFooter
  },
  data: function(){
    return {
      todoItems:[]
    }
  },
  methods:{
    addOneItem: function(todoItem){
        var obj = {completed:false, item: todoItem};
        localStorage.setItem(todoItem, JSON.stringify(obj)); //stringify : 자바스크립트 객체를 스트링으로
        this.todoItems.push(obj);
    },
    removeOneItem: function(todoItem, index){
         localStorage.removeItem(todoItem.item);
         this.todoItems.splice(index,1);// 특정 index 에서 하나를 지움.
    },
    toggleOneItem: function(todoItem, index){
         this.todoItems[index].completed = !this.todoItems[index].completed;
         localStorage.removeItem(todoItem.item);
         localStorage.setItem(todoItem.item, JSON.stringify(todoItem));
    },
    clearAllItems: function(){
         localStorage.clear();
         this.todoItems = [];
    }
  },

  created: function(){
     if (localStorage.length > 0) {
        for (var i = 0; i < localStorage.length ; i++){
                if (localStorage.key(i) !== 'loglevel:webpack-dev-server'){
                    this.todoItems.push(JSON.parse(localStorage.getItem(localStorage.key(i))));
                }
            }
        }
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
