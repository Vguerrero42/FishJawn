import React,{useState,useEffect} from 'react';
import {ApolloClient,ApolloProvider,InMemoryCache} from '@apollo/client'
import {NavigationContainer} from '@react-navigation/native'
import {createStackNavigator} from '@react-navigation/stack'
import {AppLoading} from 'expo'

import {Home,LandingPage,SignUp} from './components';

import MetroUri from './secret'

const Stack = createStackNavigator()

 const localUri = 'http://localhost:3000/graphql' 

const client = new ApolloClient({
  uri: MetroUri,
  cache: new InMemoryCache()
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
            component={Home}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </ApolloProvider>
  );
}

