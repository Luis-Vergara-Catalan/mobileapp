import react from "react";
import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen from "../screens/HomeScreen";
import DetailInfoMatch from "../screens/DetailInfoMatch";

const Stack = createStackNavigator();
export default function HomeStack() {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="HomeMain" component={HomeScreen} />
      <Stack.Screen name="DetailInfoMatch" component={DetailInfoMatch} />
    </Stack.Navigator>
  );
}