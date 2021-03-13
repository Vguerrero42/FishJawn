import React,{useState} from 'react'
import { TouchableOpacity,Text, View, Image, Button , SafeAreaView, Alert,TextInput,StyleSheet} from 'react-native'
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

const LandingPage = ({navigation}) =>{
  const[userName,onUserTextChange] = useState('')
  const[password,onPassTextChange] = useState('')

  // const [addUser,{called,loading,error,data}] = useMutation(ADD_NEW_USER)
  const [login,{called,loading,error,data}] = useMutation(LOGIN)

  if(loading) return 'Loading'
  if(called && error) console.log(error)
  if(data) {
    console.log('data after',data)
    navigation.navigate("Home")
  }
  const handleAddUser = () => {
    const email = `${userName}@ggmail.com`
    addUser({variables:{userName,email,password}})
    onUserTextChange('')
    onPassTextChange('')
    console.log('data in handle',data)
  }
  const handleLogin = () => {
    const email = `${userName}@ggmail.com`
    console.log(userName,email,password)
    login({variables:{email,password}})
    onUserTextChange('')
    onPassTextChange('')
    console.log('data in handle',data)
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
        <View style={localStyle.buttonContainer} >
        <Button color='#81B29A' title="login" onPress={handleLogin}/>
        {/* <Button color='#81B29A' title="register" onPress={handleAddUser}/> */}
        </View>
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
  },
  buttonContainer:{
    flexDirection:'row',
    justifyContent:'space-between',
    width:'80%'
  }
})


export default LandingPage

