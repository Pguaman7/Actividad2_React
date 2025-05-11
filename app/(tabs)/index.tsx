import { useRouter } from 'expo-router';
import { Button, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function Page() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <Image
        style={styles.tinyLogo}
        source={{
          uri: 'https://phantom-marca.unidadeditorial.es/0671ec31315cf8f34b9d9ef178b206da/resize/990/f/webp/assets/multimedia/imagenes/2024/01/02/17042086404816.png',
        }}
      />
      <Text style={styles.title}>Pantalla de Inicio Pg7</Text>
      <Text style={styles.subtitle}>Bienvenido a la app de eventos</Text>
       <TouchableOpacity>
      <Button
        title="Ir a Lista"
        onPress={() => router.push('/api')}
        
      />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: "#fff",
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  subtitle: {
    fontSize: 16,
    marginBottom: 20,
  },
   tinyLogo: {
    width: 250,
    height: 250,
    marginBottom: 20,
  }
});
