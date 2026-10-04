import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import React from "react";
import { LinearGradient } from "expo-linear-gradient";
import { router } from "expo-router";

export default function OnboardingScreen() {
  const handleGetStarted = () => {
    router.replace("/login");
  };

  return (
    <View style={styles.container}>
      <Image
        style={styles.backgroundImage}
        source={require("@/assets/images/onboarding.png")}
      />

      <LinearGradient
        colors={["transparent", "rgba(0, 0, 0, 0.3)"]}
        style={styles.overlay}
      />

      <View style={styles.contentContainer}>
        <Text style={styles.title}>Welcome to EShop</Text>
        <Text style={styles.subtitle}>
          Discover Amazing Products And Shop With Ease!¡
        </Text>
        <TouchableOpacity style={styles.button} onPress={handleGetStarted}>
          <LinearGradient
            colors={["#ff6b6b", "#4a66f0"]}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 0 }}
            style={{
              paddingVertical: 15,
              borderRadius: 10,
              alignItems: "center",
            }}
          >
            <Text style={{ color: "#fff", fontSize: 16, fontWeight: "bold" }}>
              Get Started
            </Text>
          </LinearGradient>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    height: "100%",
  },
  backgroundImage: {
    position: "absolute",
    width: "100%",
    height: "100%",
    resizeMode: "cover",
    top: 0,
    left: 0,
  },
  overlay: {
    position: "absolute",
    width: "100%",
    height: "100%",
    left: 0,
    right: 0,
    bottom: 0,
  },
  contentContainer: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
    paddingBottom: 50,
    paddingHorizontal: 20,
  },
  title: {
    color: "#fff",
    fontSize: 32,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 10,
  },
  subtitle: {
    color: "#fff",
    fontSize: 16,
    textAlign: "center",
    marginBottom: 30,
    textShadowColor: "rgba(0, 0, 0, 0.75)",
    // opacity: 0.8,
  },
  button: {
    width: "80%",
    marginTop: 20,
    borderRadius: 10,
    overflow: "hidden",
  },
});
