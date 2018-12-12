<template>
    <div class="inputBox shadow">
        <!-- input shadow 에서 shadow는 app.vue의 안에 있는 css .shadow가 인식 -->

        <input type="text" v-model="newTodoItem" v-on:keyup.enter = "addTodo">
        <!-- v-model은 데이터와 바인딩을 위함 -->

        <!-- <button v-on:click = "addTodo">add</button> -->
        <span class = "addContainer" v-on:click = "addTodo">
            <i class="fas fa-plus addBtn"></i>
        </span>
         <Modal v-if="showModal" @close="showModal = false" v-on:click = "showModal = false">
         <!--
             you can use custom content here to overwrite
           default content
          -->
         <h3 slot="header">경고!</h3>
         <div slot="body">아무것도 입력하지 않으셨습니다.</div>
         <div slot="btnText" v-on:click = "showModal = false">확인</div>
        </Modal>
    </div>
</template>

<script>
import Modal from './common/Modal.vue'
export default {
    data:function() {
        return{
            newTodoItem: "",
            showModal:false
        }
    },
    methods:{
        addTodo: function(){

            if (this.newTodoItem !== ''){
              
                // 상위 컨포넌트에 이벤트 보내기 this.$emit('이벤트 이름',인자1, 이자2,..)
                //this.$emit('addTodoItem',this.newTodoItem);
                const text = this.newTodoItem.trim() // trim 은 텓스트 앞뒤 공백을 지워준다.
                this.$store.commit('addOneItem', text);
                this.clearInput();
            }else{
                this.showModal = !this.showModal;
            }
        },
        clearInput: function(){
            this.newTodoItem = '';
        }
    },
    components: {
        Modal
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
