import { Image, StyleSheet, View, Text } from "react-native";

export default function App() {
  return (
    <View style={styles.container}>
      <Image
        source={require("./assets/emsi.png")}
        style={styles.logo}
        resizeMode="contain"
      />
      <Text style={styles.schoolName}>EMSI MAARIF</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f6f7fb",
    flexDirection: "row",
    justifyContent: "space-around",
  },
  logo: {
    width: 200,
    height: 200,
  },
  schoolName: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#1f2937",
    marginTop: 20,
    letterSpacing: 1,
  },
});
