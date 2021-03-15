<template>
  <div class='todo'>
    <button @click="openLogin">ssss</button>
    <Login :isDialog="state.action.isDialog" ref='loginRef'/>
  </div>
</template>
<script setup>
import Login from './login.vue'
import {reactive, ref} from 'vue'
let loginRef = ref(null)
const state = reactive({
  action:{
    isDialog: false
  }
})
console.log(loginRef,11)
const openLogin = ()=>{
  loginRef.value.loginOpen()
}
const test=()=>{
  console.log(22)
}
/* export default {
  data() {
    return {
      action:{
        isDialog:true
      }
    };
  },
  computed: {},
  watch: {},
  methods: {

  },
  created() {

  },
  mounted() {

  },
  components:{
    Login
  } 
}*/
</script>

<style lang='scss' scoped>

</style>