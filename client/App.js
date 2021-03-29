import React,{useState,useEffect} from 'react';
import {ApolloClient,ApolloProvider,InMemoryCache} from '@apollo/client'
import {NavigationContainer} from '@react-navigation/native'
import {createStackNavigator} from '@react-navigation/stack'
import {AppLoading} from 'expo'
import AsyncStorage from '@react-native-async-storage/async-storage'

import {Home,LandingPage,SignUp,MainMap} from './components';

import MetroUri from './secret'
import { parse } from 'graphql';

const Stack = createStackNavigator()

const localUri = 'http://localhost:3000/graphql' 

const getToken = async () => {
  const token = await AsyncStorage.getItem('token')
  const parsed = JSON.parse(token)
  console.log("parsed my boi",parsed)
  
  return parsed
}

const token = getToken().then((token) => token)

console.log(token)

const client = new ApolloClient({
  uri: MetroUri,
  cache: new InMemoryCache(),
  headers:{
    authorization:token
  }
});


export default function App() {
  return (
    <ApolloProvider client={client}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName={'LandingPage'}>
          <Stack.Screen
            name='Landing'
            component={LandingPage}
          />
          <Stack.Screen 
            name='Home'
            component={Home}
          />
          <Stack.Screen 
            name='SignUp'
            component={SignUp}
          />
           <Stack.Screen 
            name='Map'
            component={MainMap}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </ApolloProvider>
  );
}

