import {post,fetch,patch,put} from '../http/request'

//接口封装
let api = {
  login:'/user/login',

}
//登陆
async function login (params){
  let data = null
  await fetch(api.login,params).then(res=>{
    data = res
  })
  return data
}
export {
  login
}