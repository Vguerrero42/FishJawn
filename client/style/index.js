import {StyleSheet,Platform,StatusBar,Dimensions} from 'react-native'

const white = '#FFFFFF'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
    margin:10,
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0
  },
  header: {
    flex: .5,
    alignSelf: 'stretch',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: white
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
    alignItems: 'center' 
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