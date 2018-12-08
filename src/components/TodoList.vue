<template>
    <div>
        <!-- ul>li*3 입력해서 노가다를 줄이자 -->
        <!-- <ul>
            <li>1</li>
            <li>2</li>
            <li>3</li>
        </ul> -->

        <ul>
            <li v-for="todoItem in todoItems" v-bind:key="todoItem">{{todoItem}}</li>
        </ul>

    </div>
</template>
<script>
export default {
    data: function(){
        return{
            todoItems: []
        }
    },
    created: function(){
        if (localStorage.length > 0) {
            for (var i = 0; i < localStorage.length ; i++){

                if (localStorage.key(i) !== 'loglevel:webpack-dev-server'){
                    this.todoItems.push(localStorage.key(i));
                   // console.log(localStorage.key(i));
                }
            }
        }
    }
}
</script>

<style>

</style>

