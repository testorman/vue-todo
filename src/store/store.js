import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex); // vue에 플러그인 장착

const storage = {
    fetch(){

        const arr = [];
        if (localStorage.length > 0) {
            for (let i = 0; i < localStorage.length ; i++){
                    if (localStorage.key(i) !== 'loglevel:webpack-dev-server'){
                        arr.push(JSON.parse(localStorage.getItem(localStorage.key(i))));
                 }
             }
        }
        return arr;
    }
};

export const store = new Vuex.Store({
    state:{
        todoItems: storage.fetch()
    },
    mutations:{
        addOneItem(state, todoItem){
            const obj = {completed:false, item: todoItem};
            localStorage.setItem(todoItem, JSON.stringify(obj)); //stringify : 자바스크립트 객체를 스트링으로
            state.todoItems.push(obj);
        },toggleOneItem(state, payload){
            state.todoItems[payload.index].completed = !state.todoItems[payload.index].completed;
            localStorage.removeItem(payload.todoItem.item);
            localStorage.setItem(payload.todoItem.item, JSON.stringify(payload.todoItem));
       }

    }
});


// Vue
// data:{
//     message: 'Hello'
// }
// <p>{{nessage}}</p>

// Vuex
// state:{
//     message: 'Hello'
// }
// <p>{{this.$store.state.message}}</p>


//////////////////////////////////
// state:{
//     num:10
// },
// getters:{
//     getNumber(state){
//         return state.num;
//     },
//     doubleNumber(state){
//         return state.num * 2;
//     }
// }
//<p>{{this.$store.getters.getNumber}}</p>
//<p>{{this.$store.getters.doubleNumber}}</p>

// Mutation 이란?
// statea의 값을 변경 할 수 있는 유일한 방법이자 매서드
// 뮤테이션은 commit() 으로 동작시킨다.

// //store.js
// state: { num: 10 },
// mutations: {
//     printNumbers(state){
//         return state.num
//     },
//     sumNumbers(state, anotherNum){
//         reurn sate.num + anotherNum;
//     }
// }
// // App.vue
// this.$store.commit('printNumbers');
// this.$store.commit('sumNumbers', 20);


//객채화로도 전달 가능하다.

// state:{storeNum: 10},
// mutations:{
//     modifyState(state, payload){
//         console.log(payload.str);
//         return state.storeNum += payload.num;
//     }
// }

// this.$store.commit('modifyState',{
//     str:'passed from payload',
//     num:20
// });