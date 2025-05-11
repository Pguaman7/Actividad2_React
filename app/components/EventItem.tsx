import React from "react";
import { Pressable, StyleSheet, Text } from "react-native";

// Definir los tipos para las props
type EventItemProps = {
  title: string;
  body: string;
  onPress: () => void;
};

export default function EventItem({ title, body, onPress }: EventItemProps) {
  return (
    <Pressable onPress={onPress} style={styles.item}>
      <Text style={styles.title}>{title}</Text>
      <Text numberOfLines={2}>{body}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  item: {
    padding: 12,
    marginBottom: 10,
    backgroundColor: "#eee",
    borderRadius: 8,
  },
  title: {
    fontWeight: "bold",
    marginBottom: 4,
  },
});
