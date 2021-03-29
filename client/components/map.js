import React from 'react'
import MapView from 'react-native-maps'
import {StyleSheet,Text,View} from 'react-native'

export default function MainMap() {
  // const initialLocation = {}
  //  navigator.geolocation.getCurrentPosition(({coords })=>{
  //    initialLocation.latitde = coords.latitude
  //    initialLocation.longitude = coords.longitude
  //   }
  // )
  // console.log('location',location)
 
  return(
    <View style={localStyle.container}>
      <MapView style={localStyle.map}
      initialRegion={{
        latitude:40.826149,
        longitude:-73.920273,
        latitudeDelta:0.0922,
        longitudeDelta:0.0421
      }}
      />
    </View>
  )
}

const localStyle = StyleSheet.create({
  container:{
    flex:1,
    alignSelf:'stretch',
    backgroundColor:'white',
    alignItems:'center',
    justifyContent:'center',
    borderWidth:1
  },
  map:{
    width:'80%',
    height:'80%'
  }
})