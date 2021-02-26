import React from 'react'
import { TouchableOpacity,Text, View, Image, Button , SafeAreaView, Alert} from 'react-native'
import { StatusBar } from 'expo-status-bar';
import styles from '../style'
import {useState} from '@react-native-community/hooks'
import { gql, useQuery } from '@apollo/client'

const Home = () => {
  const handleMapTouch = () =>{
    Alert.alert("Map Button Touched","You've done it now")
  }
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <View style={styles.innerHeader}>
          <Text style={styles.text}>HEADER</Text>
        </View>
      </View>
      <View style={styles.recentCatches}>
        <Text style={styles.text}>Your Recent Catches</Text>
      </View>
      <TouchableOpacity style={styles.mapBox}
        onPress={handleMapTouch}>
        <Text style={styles.text}>MAP GOES HERE</Text>
      </TouchableOpacity>
      <View style={styles.footer}>
        <Text style={styles.text} >Footer</Text>
      </View>
      <StatusBar style="auto" />
    </SafeAreaView>
  )
}


export default Home