import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import RankingScreen from "../screens/RankingScreen";

const Stack = createStackNavigator();

export default function RankingStack() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="RankingMain" component={RankingScreen} />
    </Stack.Navigator>
  );
}