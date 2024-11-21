import React, { useState } from "react";
import { StyleSheet, View } from "react-native";
import { GoogleSignin } from "@react-native-google-signin/google-signin";
import LoginScreen from "./src/screens/LoginScreen";
import HomeScreen from "./src/screens/HomeScreen";

// Configuração do Google Sign-In
GoogleSignin.configure({
  webClientId: "SEU_CLIENT_ID_ENCONTRADO_NO_GOOGLE_SERVICES.JSON",
});

const App = () => {
  const [user, setUser] = useState(false); // Armazena o estado do usuário

  return (
    <View style={styles.container}>
      {user ? (
        <HomeScreen user={user} login={setUser} />
      ) : (
        <LoginScreen login={setUser} />
      )}
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
