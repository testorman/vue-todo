<template>
    <div class="inputBox shadow">
        <!-- input shadow 에서 shadow는 app.vue의 안에 있는 css .shadow가 인식 -->

        <input type="text" v-model="newTodoItem" v-on:keyup.enter = "addTodo">
        <!-- v-model은 데이터와 바인딩을 위함 -->

        <!-- <button v-on:click = "addTodo">add</button> -->
        <span class = "addContainer" v-on:click = "addTodo">
            <i class="fas fa-plus addBtn"></i>
        </span>
    </div>
</template>

<script>
export default {
    data:function() {
        return{
            newTodoItem: ""
        }
    },
    methods:{
        addTodo: function(){

            if (this.newTodoItem !== ''){
              
                // 상위 컨포넌트에 이벤트 보내기 this.$emit('이벤트 이름',인자1, 이자2,..)
                this.$emit('addTodoItem',this.newTodoItem);
                this.clearInput();
            }
        },
        clearInput: function(){
            this.newTodoItem = '';
        }
    }

}
</script>

<style scoped>
input:focus{
    outline: none;
}
.inputBox{
    background: white;
    height: 50px;
    line-height: 50px;
    border-radius: 5px;
}
.inputBox input{
    border-style: none;
    font-size: 0.9rem;
}
.addContainer{
    float:right;
    background: linear-gradient(to right, #6478FB, #8763FB);
    display: block;
    width: 3rem;
    border-radius: 0 5px 5px 0;
}
.addBtn{
    color:white;
    vertical-align: middle;
}

</style>
