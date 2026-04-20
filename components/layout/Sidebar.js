export default function Sidebar({ navigation, isLogged, setIsLogged }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Menú</Text>

      {isLogged ? (
        <>
          <TouchableOpacity
            style={styles.item}
            onPress={() => navigation.navigate('Profile')}
          >
            <Ionicons name="person-outline" size={20} />
            <Text style={styles.text}>Perfil</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.item}
            onPress={() => setIsLogged(false)}
          >
            <Text style={styles.text}>Cerrar sesión</Text>
          </TouchableOpacity>
        </>
      ) : (
        <>
          <TouchableOpacity
            style={styles.item}
            onPress={() => navigation.navigate('Login')}
          >
            <Ionicons name="log-in-outline" size={20} />
            <Text style={styles.text}>Iniciar sesión</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.item}
            onPress={() => navigation.navigate('Register')}
          >
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