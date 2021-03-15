import React,{useState,useEffect} from 'react';
import {ApolloClient,ApolloProvider,InMemoryCache} from '@apollo/client'
import {NavigationContainer} from '@react-navigation/native'
import {createStackNavigator} from '@react-navigation/stack'
import {AppLoading} from 'expo'

import {Home,LandingPage} from './components';

const Stack = createStackNavigator()


const client = new ApolloClient({
  uri: 'http://localhost:3000/graphql',
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
        </Stack.Navigator>
      </NavigationContainer>
    </ApolloProvider>
  );
}

