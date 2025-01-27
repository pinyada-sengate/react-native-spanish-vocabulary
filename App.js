import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import CategoriesScreen from "./screens/CategoriesScreen";
import FlashcardScreen from "./screens/FlashcardScreen";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerStyle: { backgroundColor: "#4F42D8" },
          headerTintColor: "white",
          contentStyle: { backgroundColor: "#F2F2F2" },
        }}
      >
        <Stack.Screen name="Categories" component={CategoriesScreen} />
        <Stack.Screen name="Flashcard" component={FlashcardScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
