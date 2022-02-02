import { StatusBar as ExpoStatusBar } from "expo-status-bar";
import {
  StatusBar,
  StyleSheet,
  SafeAreaView,
  Text,
  View,
  Platform,
} from "react-native";
import { Searchbar } from "react-native-paper";
import { RestaurantScreen } from "./src/features/restaurants/screens/restaurants.screens";

export default function App() {
  return (
    <>
      <RestaurantScreen />
      <StatusBar style="auto" />
    </>
  );
}

const styles = StyleSheet.create({});
