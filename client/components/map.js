import React from 'react'
import MapView from 'react-native-maps'
import {StyleSheet,Text,View} from 'react-native'

export default function Map() {
  return(
    <View style={localStyle.container}>
      <MapView style={localStyle.map}/>
    </View>
  )
}

const localStyle = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:'white',
    alignItems:'center',
    justifyContent:'center'
  },
  map:{
    width:'80%',
    height:'80%'
  }
})