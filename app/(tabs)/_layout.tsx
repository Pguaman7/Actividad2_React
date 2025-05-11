// app/(tabs)/_layout.tsx
import { Tabs } from "expo-router";

export default function TabLayout() {
  return (
    <Tabs>
      <Tabs.Screen name="index" options={{ title: "Eventos" }} />
      <Tabs.Screen name="formulario" options={{ title: "Nuevo Evento" }} />
    </Tabs>
  );
}
