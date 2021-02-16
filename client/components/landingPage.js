import React from 'react'
import { TouchableOpacity, StyleSheet, Text, View, Image, Button } from 'react-native'
import { StatusBar } from 'expo-status-bar';


const onPress = () => 'Pressing'
const LandingPage = () => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.innerHeader}>
          <Text style={styles.text}>HEADER</Text>
        </View>
      </View>
      <View style={styles.recentCatches}>
        <Text style={styles.text}>Your Recent Catches</Text>
      </View>
      <TouchableOpacity style={styles.mapBox}
        onPress={onPress}>
        <Text style={styles.text}>MAP GOES HERE</Text>
      </TouchableOpacity>
      <View style={styles.footer}>
        <Text style={styles.text} >Footer</Text>
      </View>
      <StatusBar style="auto" />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
  header: {
    flex: .5,
    alignSelf: 'stretch',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'blue'
  },
  footer: {
    flex: .5,
    alignSelf: 'stretch',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'blue'
  },
  innerHeader: {
    padding: 20,
  },
  recentCatches: {
    borderWidth: 2,
    padding: 20,
    top: 40,
    alignSelf: 'stretch',
    flex: 1,
    backgroundColor: 'white'
  },
  mapBox: {
    borderWidth: 2,
    top: 40,
    bottom: 20,
    width: 400,
    padding: 20,
    flex: 1,
    alignItems: 'center',
    backgroundColor: 'black',
  },
  text: {
    fontSize: 20,
    borderWidth: 2,
    borderStyle: 'solid',
    borderColor: 'green',
    alignSelf: 'flex-start',
    color: 'purple'
  }
});

export default LandingPage