<template>
  <div class="login">
    sdds
    <el-dialog
      title="登陆"
      v-model="state.action.isDialog"
      width="30%"
      :before-close="loginClose"
    >
      <el-form
        label-width="100px"
        v-model="state.action.loginInfo"
        ref='loginFrom'
      >
        <el-form-item
          label="账号"
        >
          <el-input
            type="account"
            v-model="state.post.account"
            autocomplete="off"
          ></el-input>
        </el-form-item>
        <el-form-item
          label="密码"
        >
          <el-input
            type="password"
            v-model="state.post.password"
            autocomplete="off"
          ></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="login"
            >登陆</el-button
          >
          <el-button @click="reset">重置</el-button>
        </el-form-item>
      </el-form>
    </el-dialog>
  </div>
</template>
<script setup>
import { defineProps, reactive, defineEmit,useContext } from 'vue'
import {login} from '/http/api.js'
const props = defineProps({
  isDialog: Boolean
})
const ctx = useContext()
const state = reactive({
  action:{
    isDialog: true,
    loginInfo: null
  },
  post:{
    account: null,
    password: null,
  }
})
state.action.isDialog = props.isDialog

const loginClose = ()=>{
  state.action.isDialog = false
}
const loginOpen = ()=>{
  state.action.isDialog = true
}
const toLogin = ()=>    {
  login(post)
}
const reset = ()=>{
  state.post.account = ''
  state.post.password = ''
}
ctx.expose({
  loginOpen(){
    state.action.isDialog = true
    console.log('loginOpen')
  }
})
/* const emits = defineEmit(['loginOpen'])
emits('loginOpen') */
/* export default {
  props:{
    isDialog: Boolean,
    required: true
  },
  data() {
    return {
      action:{
        isDialog: true,
        loginInfo: null
      },
      post:{
        account: null,
        password: null,
      }
    };
  },
  computed: {},
  watch: {},
  methods: {
    loginClose(){
      this.action.isDialog = false
    },
    login(){
      login(post)
    },
    reset(){
      this.post.account = ''
      this.post.password = ''
    }
  },
  created() {},
  mounted() {
    console.log(isDialog,22)
    //this.action.isDialog = this.isDialog
  }, 
};*/
</script>

<style lang="scss" scoped></style>
