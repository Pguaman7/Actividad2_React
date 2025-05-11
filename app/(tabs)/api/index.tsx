import { useRouter } from "expo-router";
import React, { useEffect, useState } from "react";
import { FlatList, StyleSheet, View } from "react-native";
import EventItem from "../../components/EventItem"; // Asegúrate de que tienes este componente
import { getPosts } from "../api/posts";

// Definir el tipo para los objetos de la lista
type Post = {
  id: number;
  title: string;
  body: string;
};

export default function Index() {
  const router = useRouter();
  const [posts, setPosts] = useState<Post[]>([]); // Tipar el estado como un arreglo de Post

  useEffect(() => {
    getPosts().then((data) => {
      setPosts(data);
    });
  }, []);

  return (
    <View style={styles.container}>
      <FlatList
        data={posts}
        keyExtractor={(item) => item.id.toString()} // Asegúrate de que 'id' sea una cadena
        renderItem={({ item }) => (
          <EventItem
            title={item.title}
            body={item.body}
            onPress={() => router.push(`/detalle/${item.id}`)} // Ruta al detalle
          />
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 20,
    paddingHorizontal: 16,
  },
});
