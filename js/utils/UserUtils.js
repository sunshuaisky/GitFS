import AsyncStorage from '@react-native-community/async-storage'

/**
 * 验证是否需要登陆
 */
const isNeedLogin = async () => {
  return (await AsyncStorage.getItem('user_info')) ? false : true
}

/**
 * 返回登陆账号密码
 */
const getLoginParams = async () => {
  let userName = await AsyncStorage.getItem('userName')
  let passWord = await AsyncStorage.getItem('passWord')
  const params = {
    userName: userName ? userName : '',
    passWord: passWord ? passWord : ''
  }
  console.log(params)
  return params
}

export default {
  isNeedLogin,
  getLoginParams
}
