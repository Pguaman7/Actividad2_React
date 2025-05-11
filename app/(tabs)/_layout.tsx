// app/(tabs)/_layout.tsx
import { Tabs } from "expo-router";
import GlobalWrapper from "../Styles/global";
export default function TabLayout() {
  return (
    <GlobalWrapper>
    <Tabs>
      <Tabs.Screen name="index" options={{ title: "Eventos" }} />
      <Tabs.Screen name="formulario" options={{ title: "Nuevo Evento" }} />
    </Tabs>
    </GlobalWrapper>
  );
}
