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
    value ={userName}
    ></TextInput>
    <Text>Enter Password</Text>
    <TextInput  
    style={localStyle.inputBox}
    onChangeText={text => onPassTextChange(text)}
    value ={password}
    ></TextInput>
    </View>
    </View>
  )
}

const localStyle = StyleSheet.create({
  inputBox:{
    width:200,
    height:25,
    margin:10,
    borderWidth:2
  }
})


export default LandingPage

