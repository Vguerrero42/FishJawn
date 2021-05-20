import React, { useState, useEffect } from "react";
import {
  ApolloClient,
  ApolloProvider,
  fromPromise,
  InMemoryCache,
} from "@apollo/client";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { AppLoading } from "expo";
import AsyncStorage from "@react-native-async-storage/async-storage";

import { setContext } from "@apollo/client/link/context";
import { Home, LandingPage, SignUp, MainMap } from "./components";

import MetroUri from "./secret";
import { parse } from "graphql";

const Stack = createStackNavigator();

const localUri = "http://localhost:3000/graphql";

let token;

const getToken = async () => {
  try {
    const storageToken = await AsyncStorage.getItem("token");
    if (storageToken != null) {
      return storageToken;
    }
  } catch (error) {
    console.log(error);
  }
};

getToken();

console.log("TOE-KIN", getToken);

const client = new ApolloClient({
  uri: MetroUri,
  cache: new InMemoryCache(),
  headers: {
    authorization: "Bearer " + token,
  },
});

const initialPage = () => {
  return token ? "Home" : "LandingPage";
};
console.log(initialPage());

export default function App() {
  return (
    <ApolloProvider client={client}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName={initialPage()}>
          <Stack.Screen name="Landing" component={LandingPage} />
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="SignUp" component={SignUp} />
          <Stack.Screen name="Map" component={MainMap} />
        </Stack.Navigator>
      </NavigationContainer>
    </ApolloProvider>
  );
}
