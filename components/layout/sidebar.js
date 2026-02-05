import React from 'react';
import { View, Text, TouchableOpacity} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import {Ruedita} from '../../assets/Ruedita';
import styles from './sidebar.styles'


export default function sidebar({ navigation, isLogged }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Menú</Text>
        
      {isLogged ? (
        <>
          
          <TouchableOpacity
            style={styles.item}
            onPress={() => navigation.navigate('Perfil')}
          >
            <Ionicons name="person-outline" size={20} />
            <Text style={styles.text}>Perfil</Text>
          </TouchableOpacity>

          
          <TouchableOpacity style={styles.item}>
            <Text style={styles.text}>Cerrar sesión</Text>
          </TouchableOpacity>
        </>
      ) : (
        <>
          <TouchableOpacity style={styles.item}>
            <Ionicons name="log-in-outline" size={20} />
            <Text style={styles.text}>Iniciar sesión</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.item}>
            <Ionicons name="create-outline" size={20} />
            <Text style={styles.text}>Registrarse</Text>
          </TouchableOpacity>
        </>
      )}
      
      <TouchableOpacity style={styles.ruedita}>
            <Ruedita />
            <Text style={styles.text}>Configuración</Text>
          </TouchableOpacity>
    </View>
  );
}
