import { useLocalSearchParams, useRouter } from 'expo-router';
import React, { useEffect, useState } from 'react';
import { Button, SafeAreaView, StyleSheet, Text, View } from 'react-native';
import { getPostById } from '../../(tabs)/api/posts'; // Ruta correcta de la API
export default function Detalle() {
  
  const { id } = useLocalSearchParams<{ id: string }>();

  const [post, setPost] = useState<any>(null);

  useEffect(() => {
    if (id) {
      getPostById(Number(id)) // Asegúrate de que 'id' sea un número
        .then(setPost)
        .catch((error) => console.error(error));
    }
  }, [id]);

  if (!id) {
    return <Text>No existe id relacionado...</Text>;
  }

  if (!post) {
    return <Text>Cargando post...</Text>;
  }
const router = useRouter();
  return (
    <SafeAreaView style={[styles.container]}>
      <View style={styles.container}>
        <Text style={styles.title}>{post.title}</Text>
        <Text>{post.body}</Text>
        <Button
                title="Retornar"
                onPress={() => router.push('/')} 
                
              />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
   
    width: 200,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
  },
 });
