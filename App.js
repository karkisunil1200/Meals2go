import { StatusBar as ExpoStatusBar } from "expo-status-bar";
import {
  StatusBar,
  StyleSheet,
  SafeAreaView,
  Text,
  View,
  Platform,
} from "react-native";

const isAndroid = Platform.OS === "andorid";

export default function App() {
  return (
    <>
      <SafeAreaView style={{ flex: 1, marginTop: isAndroid ? 50 : 0 }}>
        <View style={{ padding: 16, backgroundColor: "red" }}>
          <Text>Our rect native blank canvas </Text>
        </View>
        <View style={{ padding: 15, flex: 1, backgroundColor: "blue" }}>
          <Text>List</Text>
        </View>
      </SafeAreaView>
      <StatusBar style="auto" />
    </>
  );
}

const styles = StyleSheet.create({});
