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
    onUserTextChange('')
    onPassTextChange('')
    console.log(userObj)
    // this.props.navigation.navigate('LandingPage')
  }
  return(
    <View style = {styles.landingContainer}>
      <View style={styles.landingPage} >
        <View style={localStyle.loginContainer} >
        <Text style={localStyle.text}>Enter Username</Text>
        <TextInput  
          style={localStyle.inputBox}
          onChangeText={text => onUserTextChange(text)}
          value ={userName}>
        </TextInput>
        <Text style={localStyle.text} >Enter Password</Text>
        <TextInput  
          style={localStyle.inputBox}
          onChangeText={text => onPassTextChange(text)}
          value ={password}>
        </TextInput>
        <Button color='#81B29A' title="login" onPress={handleLogin}/>
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
    justifyContent:'space-evenly',
    alignItems:'center',
    flexDirection:'column',
    borderWidth:2,
    height:200
  },
  linkContainer:{
    alignSelf:'flex-end',
    bottom:-70,
    width:'40%',
    height:60,
    flexDirection:'column',
    alignItems:'flex-start',
    alignContent:'center',
    justifyContent:'space-evenly',
    borderWidth:2
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
    borderRadius:20,
  },
  text:{
  }
})


export default LandingPage

