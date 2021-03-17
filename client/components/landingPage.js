import React,{useState} from 'react'
import { TouchableOpacity,Text, View, Image, Button , SafeAreaView, Alert,TextInput,StyleSheet,Dimensions} from 'react-native'
import { StatusBar } from 'expo-status-bar';
import {gql,useLazyQuery,useMutation} from '@apollo/client'
import AsyncStorage from '@react-native-async-storage/async-storage'

import Header from "./header"

const LOGIN = gql`
  mutation login($email:String!,$password:String!){
    login(email:$email,password:$password){
      token
      user{
        id
        email
        password
      }
    }
  }
`

export default function LandingPage ({navigation}) {
  const[email,onUserTextChange] = useState('')
  const[password,onPassTextChange] = useState('')

  const [login,{loading,called,error}] = useMutation(LOGIN,{
    onCompleted: async ({login}) =>{
      if(login){
        await AsyncStorage.setItem('token', JSON.stringify(login.token))
        await AsyncStorage.setItem('UserId', JSON.stringify(login.user.id))
        console.log('data after',login)
        navigation.navigate("Home")
      }
    }
  })

  if(loading) return (
    <Text style={styles.text}>Loading...</Text>
  )
 
  const goToSignUp = () =>{
    navigation.navigate('SignUp')
  }
  const handleLogin = () => {
    console.log(email,password)
    login({variables:{email,password}})
    onUserTextChange('')
    onPassTextChange('')
    // console.log('data in handle',data)
  }
  return(
    <View style = {styles.landingContainer}>
      <View style={styles.landingPage} >
        <View style={styles.loginContainer} >
          <Text style={styles.text}>Enter Email</Text>
          <TextInput  
            style={styles.inputBox}
            onChangeText={text => onUserTextChange(text)}
            value ={email}>
          </TextInput>
          <Text style={styles.text} >Enter Password</Text>
          <TextInput  
            style={styles.inputBox}
            onChangeText={text => onPassTextChange(text)}
            value ={password}>
          </TextInput>
        <View style={styles.buttonContainer} >
        <Button color='#81B29A' title="login" onPress={handleLogin}/>
        </View>
      </View>
        <View style={styles.linkContainer}>
          <Text style={styles.textButton} onPress={()=> goToSignUp()}>Register</Text>
          <Text style={styles.textButton} onPress={()=>console.log('Forgot Password Press')}>Forgot Password?</Text>
          </View>
        </View>
      <StatusBar style='auto'/>
    </View>
  )
}

const styles = StyleSheet.create({
  landingContainer:{
    flex:1,
    flexDirection:'column',
    justifyContent:'center',
    backgroundColor:'white'
  },
  landingPage:{
    borderRadius:50,
    flexDirection:'column',
    backgroundColor:'white',
    alignItems:'center',
    justifyContent:'center',
    alignSelf:'center',
    width: 300,
    height:300 ,
    borderWidth:1,
    padding:10
  },
  loginContainer:{
    alignContent:'center',
    justifyContent:'space-evenly',
    alignItems:'center',
    flexDirection:'column',
    borderWidth:0,
    height:200,
    borderWidth:0
  },
  linkContainer:{
    alignSelf:'flex-end',
    flexDirection:'column',
    alignItems:'flex-start',
    alignContent:'center',
    justifyContent:'space-evenly',
    borderWidth:0
  },
  textButton:{
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
  },
  buttonContainer:{
    flexDirection:'row',
    justifyContent:'center',
    borderWidth:0
  }
})



