import React,{useState} from 'react'
import { TouchableOpacity,Text, View, Image, Button , SafeAreaView, Alert,TextInput,StyleSheet,Dimensions} from 'react-native'
import { StatusBar } from 'expo-status-bar';
import styles from '../style'
import {gql,useLazyQuery,useMutation} from '@apollo/client'


const ADD_NEW_USER = gql`
  mutation AddUser($userName:String!,$email:String!,$password:String!) {
    addUser(userName:$userName,email:$email,
    password:$password){
      token
      user{
        id
        email
        password
      }
    }
  }
`



export default function SignUp ({navigation}) {

  const[email,onUserTextChange] = useState('')
  const[password,onPassTextChange] = useState('')
  const[passConfirm,onPassConfirmChange] = useState('')

  const [addUser,{called,loading,error,data}] = useMutation(ADD_NEW_USER)

  return(
    <View style = {localStyle.landingContainer}>
      <View style={localStyle.landingPage} >
        <View style={localStyle.loginContainer} >
          <Text style={localStyle.text}>Enter Email</Text>
          <TextInput  
            style={localStyle.inputBox}
            onChangeText={text => onUserTextChange(text)}
            value ={email}>
          </TextInput>
          <Text style={localStyle.text} >Enter Password</Text>
          <TextInput  
            style={localStyle.inputBox}
            onChangeText={text => onPassTextChange(text)}
            value ={password}>
          </TextInput>
        <View style={localStyle.buttonContainer} >
        <Button color='#81B29A' title="login" onPress={handleLogin}/>
        </View>
      </View>
        <View style={localStyle.linkContainer}>
          <Text style={localStyle.textButton} onPress={()=> goToSignUp()}>Register</Text>
          <Text style={localStyle.textButton} onPress={()=>console.log('Forgot Password Press')}>Forgot Password?</Text>
          </View>
        </View>
      <StatusBar style='auto'/>
    </View>
  )

 
}