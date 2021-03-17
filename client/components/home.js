import React,{useEffect} from 'react'
import { TouchableOpacity,Text, View, Image, Button , SafeAreaView, Alert} from 'react-native'
import { StatusBar } from 'expo-status-bar';
import styles from '../style'
import {useState} from '@react-native-community/hooks'
import { gql, useQuery } from '@apollo/client'

import AsyncStorage from '@react-native-async-storage/async-storage'

import {MiniMap,Header} from './'


export default function Home () {

  useEffect( () =>{
    const getUser = async() =>{
      const user = await AsyncStorage.getItem('UserId')

      console.log('gotUserID',JSON.parse(user))
    }
    getUser()
  })
 
  const handleMapTouch = () =>{
    Alert.alert("Map Button Touched","You've done it now")
  }
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        {/* <View style={styles.innerHeader}>
          <Text style={styles.text}>HEADER</Text>
        </View> */}
        <Header />
      </View>
      <View style={styles.recentCatches}>
        <Text style={styles.text}>Your Recent Catches</Text>
      </View>
      <TouchableOpacity style={styles.mapBox}
        onPress={handleMapTouch}>
        <MiniMap />
        <Text>+</Text>
      </TouchableOpacity>
      <View style={styles.footer}>
        <Text style={styles.text} >Footer</Text>
      </View>
      <StatusBar style="auto" />
    </SafeAreaView>
  )
}

