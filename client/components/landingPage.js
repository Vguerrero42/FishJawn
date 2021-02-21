import React,{useState} from 'react'
import { TouchableOpacity,Text, View, Image, Button , SafeAreaView, Alert,TextInput,StyleSheet} from 'react-native'
import { StatusBar } from 'expo-status-bar';
import styles from '../style'

const LandingPage = () =>{
  const[userName,onUserTextChange] = useState('')
  const[password,onPassTextChange] = useState('')
  return(
    <View style = {styles.landingContainer}>
      <View style={styles.landingPage} >
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
  linkContainer:{
    alignSelf:'flex-end',
    bottom:-70,
    width:'50%',
    height:60,
    margin:0,
    flexDirection:'column',
    alignItems:'flex-start',
    alignContent:'center',
    justifyContent:'space-evenly'
  },
  textButton:{
    flex:1,
    fontSize:15,
    color:'blue',
    margin:5,
  },
  inputBox:{
    width:200,
    height:25,
    margin:10,
    borderWidth:2
  }
})


export default LandingPage

