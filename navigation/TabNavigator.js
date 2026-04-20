import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import HomeStack from './HomeStack';
import RankingStack from './RankingStack';
import ProfileStack from './ProfileStack';

const Tab = createBottomTabNavigator();

export default function TabNavigator() {
  return (
    <Tab.Navigator screenOptions={{ headerShown: false }}>
      
      <Tab.Screen 
        name="Home" 
        component={HomeStack} 
        options={{ title: 'Inicio' }}
      />

      <Tab.Screen 
        name="Ranking" 
        component={RankingStack} 
        options={{ title: 'Ranking' }}
      />

      <Tab.Screen 
        name="Profile" 
        component={ProfileStack} 
        options={{ title: 'Perfil' }}
      />

    </Tab.Navigator>
  );
}