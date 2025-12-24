import { Image, StyleSheet, View, Text } from "react-native";

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image
          source={require("./assets/emsi.png")}
          style={styles.logo}
          resizeMode="contain"
        />
        <Text style={styles.schoolName}>EMSI MAARIF</Text>
      </View>

      <View style={styles.infoContainer}>
        <Text style={styles.label}>
          Nom : <Text style={styles.value}>Foukahy</Text>
        </Text>
        <Text style={styles.label}>
          Prénom : <Text style={styles.value}>Abderrahmane</Text>
        </Text>
        <Text style={styles.label}>
          Année universitaire : <Text style={styles.value}>2025 / 2026</Text>
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#ffffff",
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 40,
  },
  logo: {
    width: 60,
    height: 60,
    marginRight: 10,
  },
  schoolName: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#000000",
    letterSpacing: 2,
  },
  infoContainer: {
    alignItems: "flex-start",
    gap: 10,
  },
  label: {
    fontSize: 18,
    color: "#000000",
    fontWeight: "normal",
  },
  value: {
    fontWeight: "bold",
  },
});
