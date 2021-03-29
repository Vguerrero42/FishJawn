import React,{useEffect} from 'react'
import { TouchableOpacity,Text, View, Image, Button , SafeAreaView, Alert} from 'react-native'
import { StatusBar } from 'expo-status-bar';
import styles from '../style'
import {useState} from '@react-native-community/hooks'
import { gql, useLazyQuery, useQuery } from '@apollo/client'

import AsyncStorage from '@react-native-async-storage/async-storage'

import {MainMap,Header} from './'


const HELLO = gql`
  query hello{
    hello
  }
`
export default function Home ({navigation}) {

  const [hello,{data}] = useLazyQuery(HELLO)

  if(data && data.hello) console.log('helloDATA',data)

  // useEffect( () =>{
  //   const getUser = async() =>{
  //     const user = await AsyncStorage.getItem('UserId')
  //     console.log('gotUserID',JSON.parse(user))
  //     return !!user
  //   }
  //   if(!getUser) {
  //     Alert.alert("YOU ARE NOT LOGGED IN")
  //     navigation.navigate("Login")
  //   } 
  // })

  const handleMapTouch = () =>{
    navigation.navigate("Map")
    }
  const handleRecentsTouch = () =>{
    console.log('RUNNING')
    hello()
  }

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        {/* <View style={styles.innerHeader}>
          <Text style={styles.text}>HEADER</Text>
        </View> */}
        <Header />
      </View>
      <TouchableOpacity style={styles.recentCatches} onPress={handleRecentsTouch}>
        <Text style={styles.text}>Your Recent Catches</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.mapBox}
        onPress={handleMapTouch}>
        <MainMap />
      </TouchableOpacity>
      <View style={styles.footer}>
        <Text style={styles.text} >Footer</Text>
      </View>
      <StatusBar style="auto" />
    </SafeAreaView>
  )
}

