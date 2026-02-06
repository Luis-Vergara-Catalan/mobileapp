import React from 'react';
import PropTypes from 'prop-types';
import { createDrawerNavigator } from '@react-navigation/drawer';

import HomeScreen from '../screens/HomeScreen/HomeScreen';
import ProfileScreen from '../screens/ProfileScreen/ProfileScreen';
import DetallInfoMatch from '../screens/DetallInfoMatch/DetallInfoMatch';
import BarraLateral from '../components/layout/Sidebar';

const Drawer = createDrawerNavigator();

function renderDrawerContent(isLogged) {
  return (props) => (
    <BarraLateral {...props} isLogged={isLogged} />
  );
}

export default function DrawerNavigator({ isLogged }) {
  return (
    <Drawer.Navigator drawerContent={renderDrawerContent(isLogged)}>
      <Drawer.Screen name="Inicio" component={HomeScreen} />
      <Drawer.Screen name="Perfil" component={ProfileScreen} />
      <Drawer.Screen
        name="Detalle"
        component={DetallInfoMatch}
        options={{ drawerItemStyle: { display: 'none' } }}
      />
    </Drawer.Navigator>
  );
}

DrawerNavigator.propTypes = {
  isLogged: PropTypes.bool,
};