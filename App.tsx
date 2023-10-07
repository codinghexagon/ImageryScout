import React, { useState } from "react";

import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import { Home, ViewImage } from "./src/screens";
import Loader from "./src/components/loader";

const Stack = createStackNavigator();

const App = () => {
  const [loading, setLoading] = useState(true);

  setInterval(() => {
    setLoading(false);
  }, 2000);

  if (loading) return <Loader state={loading} />;
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="home">
        <Stack.Screen
          name="home"
          component={Home}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="image"
          component={ViewImage}
          options={{
            title: "",
            headerTintColor: "#4C8BF5",
            headerBackTitle: "Back",
            headerStyle: { backgroundColor: "white" },
            headerShadowVisible: false,
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
