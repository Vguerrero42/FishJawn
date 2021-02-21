import {StyleSheet,Platform,StatusBar} from 'react-native'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
    margin:10,
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0
  },
  landingContainer:{
    flex:1,
    justifyContent:'center',
  },
  landingPage:{
    alignItems:'center',
    justifyContent:'center',
    alignSelf:'center',
    width:'70%',
    height:'40%' ,
    borderWidth:2,
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
  innerFooter: {

  },
  recentCatches: {
    borderWidth: 2,
    padding: 20,
    margin:10,
    alignSelf: 'stretch',
    flex: 1,
    backgroundColor: 'white'
  },
  mapBox: {
    alignSelf:'stretch',
    borderWidth: 2,
    borderColor:'green',
    flex: 1,
    margin:10,
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

export default styles