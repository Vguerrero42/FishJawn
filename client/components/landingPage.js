import React,{useState} from 'react'
import { TouchableOpacity,Text, View, Image, Button , SafeAreaView, Alert,TextInput,StyleSheet} from 'react-native'
import { StatusBar } from 'expo-status-bar';
import styles from '../style'

const LandingPage = () =>{
  const[userName,onUserTextChange] = useState('')
  const[password,onPassTextChange] = useState('')

  const handleLogin = () => {
    let userObj = {
      userName,
      password
    }
    console.log(userObj)
  }
  return(
    <View style = {styles.landingContainer}>
      <View style={styles.landingPage} >
        <View style={localStyle.loginContainer} >
        <Text>Enter Username</Text>
        <TextInput  
          style={localStyle.inputBox}
          onChangeText={text => onUserTextChange(text)}
          value ={userName}>
        </TextInput>
        <Text>Enter Password</Text>
        <TextInput  
          style={localStyle.inputBox}
          onChangeText={text => onPassTextChange(text)}
          value ={password}>
        </TextInput>
        <Button color='blue' title="login" onPress={handleLogin}/>
        </View>
        <View style={localStyle.linkContainer}>
          <Text style={localStyle.textButton} onPress={()=>console.log('Register Press')}>Register</Text>
          <Text style={localStyle.textButton} onPress={()=>console.log('Forgot Password Press')}>Forgot Password?</Text>
          </View>
      </View>
      <StatusBar style='auto'/>
    </View>
  )
}

const localStyle = StyleSheet.create({
  loginContainer:{
    alignContent:'center',
    justifyContent:'center',
    alignItems:'center',
    // borderWidth:2
  },
  linkContainer:{
    alignSelf:'flex-end',
    bottom:-70,
    width:'50%',
    height:60,
    flexDirection:'column',
    alignItems:'flex-start',
    alignContent:'center',
    justifyContent:'space-evenly'
  },
  textButton:{
    flex:1,
    fontSize:15,
    color:'blue',
    margin:0,
  },
  inputBox:{
    width:200,
    height:30,
    margin:10,
    padding:5,
    borderWidth:2,
    borderRadius:20
  }
})


export default LandingPage

