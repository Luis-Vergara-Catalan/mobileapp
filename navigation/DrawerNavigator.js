import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import HomeScreen from '../screens/HomeScreen/HomeScreens';
import ProfileScreen from '../screens/ProfileScreen/ProfileScreen';
import InfoCompletaPartido from '../screens/InfoCompletaPartido/InfoCompletaPartido';
import BarraLateral from '../components/layout/BarraLateral';


const Drawer = createDrawerNavigator();


export default function DrawerNavigator({ isLogged }) {
  return (
    <Drawer.Navigator
      drawerContent={(props) => (
        <BarraLateral {...props} isLogged={isLogged} />
      )}>
      <Drawer.Screen name="Inicio" component={HomeScreen} />
      <Drawer.Screen name="Perfil" component={ProfileScreen} />
      <Drawer.Screen
        name="Detalle"
        component={InfoCompletaPartido}
        options={{ drawerItemStyle: { display: 'none' } }}
      />
    </Drawer.Navigator>
  );
}
