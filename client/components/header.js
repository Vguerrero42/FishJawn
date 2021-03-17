import React,{useState} from 'react'
import { TouchableOpacity,Text, View, Image, Button , SafeAreaView, Alert,TextInput,StyleSheet,Dimensions} from 'react-native'
import { StatusBar } from 'expo-status-bar';
import {gql,useLazyQuery,useMutation} from '@apollo/client'
import {useNavigation} from '@react-navigation/native'

export default function Header (){
  const navigation = useNavigation()
  const handleTouch = (page) =>{
    navigation.navigate(page)
  }

  return (
    <View style={styles.headerContainer}>
      <Text onPress={() => handleTouch('Home')}>
        Home
      </Text>
      <Text onPress={()=> handleTouch('Landing')}>
        Login
      </Text>
    </View>
  )
}

const styles = StyleSheet.create({
  headerContainer:{
    borderWidth:1,
    flexDirection:'row',
    justifyContent:'space-evenly',

  }
})