import React from "react";
import { View, Text, Button, Image, StyleSheet } from "react-native";
import { onLogout } from "../services/auth";

const HomeScreen = ({ user, login }) => (
  <View style={styles.layout}>
    <Text style={styles.title}>Bem-vindo</Text>
    <Image
      style={styles.avatar}
      source={{
        uri: user.user.photo, // Foto do perfil do usuário
      }}
    />
    <Text style={styles.text}>{user.user.name}</Text>
    <Button
      title="Sair"
      onPress={() => {
        onLogout().then(() => login(false));
      }}
    />
  </View>
);

const styles = StyleSheet.create({
  layout: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    fontSize: 32,
    marginBottom: 16,
  },
  text: {
    fontSize: 18,
    marginBottom: 16,
  },
  avatar: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 16,
  },
});

export default HomeScreen;
