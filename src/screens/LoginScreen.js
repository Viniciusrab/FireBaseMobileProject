import React, { useState } from "react";
import { View, Text, Button, ActivityIndicator, StyleSheet } from "react-native";
import { onLogin } from "../services/auth";

const LoginScreen = ({ login }) => {
  const [isSigninInProgress, setIsSigninInProgress] = useState(false);

  return (
    <View style={styles.layout}>
      {isSigninInProgress && <ActivityIndicator />}
      <Text style={styles.title}>Login</Text>
      <Button
        title="Entrar com Google"
        onPress={() => {
          setIsSigninInProgress(true);
          onLogin().then((user) => {
            console.log(user);
            login(user); // Passa o objeto do usuário para o estado global
          });
        }}
      />
    </View>
  );
};

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
});

export default LoginScreen;
