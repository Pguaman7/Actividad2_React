import { useRouter } from 'expo-router';
import React from 'react';
import { Button, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
export default function MyPage() {
  const handlePress = () => {
    console.log('Botón presionado');
  };
const router = useRouter();
  return (
    <ScrollView style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.title}>Datos Alumno:</Text>
        <Text style={styles.text}>
          PABLO ANDRÉS GUAMÁN GUACHICHULLCA.
        </Text>

        {/* Agregar más contenido desplazable */}
        <Text style={styles.title}>PROFESOR:</Text>
        <Text style={styles.text}>PACO GÓMEZ ARNAL</Text>
        <TouchableOpacity style={styles.button} onPress={handlePress}>
          <Button
                          title="Retornar"
                          onPress={() => router.push('/')} 
                          
                        />
         
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    width: 250,
    height: 250,
  },
  content: {
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  text: {
    fontSize: 18,
    marginBottom: 15,
  },
  button: {
    backgroundColor: '#007bff',
    padding: 10,
    borderRadius: 5,
    marginBottom: 20,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
  },
});
