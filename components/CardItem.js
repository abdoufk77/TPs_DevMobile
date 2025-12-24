import React, { useRef, useState } from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  Animated,
  Linking,
  Alert,
} from "react-native";

export default function CardItem({ title, description, image, url }) {
  const [liked, setLiked] = useState(false);
  const scale = useRef(new Animated.Value(1)).current;

  const toggleLike = () => {
    const toValue = liked ? 1 : 1.2;
    setLiked(!liked);
    Animated.sequence([
      Animated.timing(scale, { toValue, duration: 120, useNativeDriver: true }),
      Animated.timing(scale, {
        toValue: 1,
        duration: 120,
        useNativeDriver: true,
      }),
    ]).start();
  };

  const openUrl = async () => {
    if (!url)
      return Alert.alert("Aucune URL", "Cette carte n'a pas d'URL asociée.");
    try {
      const supported = await Linking.canOpenURL(url);
      if (supported) await Linking.openURL(url);
      else Alert.alert("Impossible d'ouvrir", url);
    } catch (e) {
      Alert.alert("Erreur", "Impossible d'ouvrir le lien.");
    }
  };

  return (
    <View style={styles.card}>
      <Image source={{ uri: image }} style={styles.cover} />
      <View style={styles.body}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.desc}>{description}</Text>
        <View style={styles.row}>
          <TouchableOpacity
            onPress={openUrl}
            style={styles.button}
            activeOpacity={0.7}
          >
            <Text style={styles.buttonText}>Open</Text>
          </TouchableOpacity>

          <Animated.View style={{ transform: [{ scale }] }}>
            <TouchableOpacity
              onPress={toggleLike}
              style={styles.heartWrap}
              activeOpacity={0.7}
            >
              <Text style={[styles.heart, liked && styles.heartActive]}>
                {liked ? "♥" : "♡"}
              </Text>
            </TouchableOpacity>
          </Animated.View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    width: "100%",
    backgroundColor: "#fff",
    borderRadius: 12,
    overflow: "hidden",
    marginBottom: 16,
    elevation: 3, // ombre Android
  },
  cover: { width: "100%", height: 150 },
  body: { padding: 12 },
  title: { fontSize: 16, fontWeight: "bold", marginBottom: 6 },
  desc: { color: "#555" },
  row: { flexDirection: "row", marginTop: 12, alignItems: "center" },
  button: {
    backgroundColor: "#3b82f6",
    paddingVertical: 8,
    paddingHorizontal: 12,
    borderRadius: 8,
    marginRight: 12,
  },
  buttonText: { color: "#fff", fontWeight: "600" },
  heartWrap: {
    padding: 6,
  },
  heart: { fontSize: 22, color: "#999" },
  heartActive: { color: "#e11d48" },
});
