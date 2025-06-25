import React, { useState } from 'react';
import { View, TextInput, Button, Text, StyleSheet, Alert, ActivityIndicator } from 'react-native';
import { io } from 'socket.io-client';

// Replace with your local IP & backend port
const socket = io('http://192.168.121.152:4000');

const LoginScreen = ({ navigation }) => {
  const [token, setToken] = useState('');
  const [loading, setLoading] = useState(false);

  const handleLogin = () => {
    if (!token.trim()) {
      Alert.alert('Validation Error', 'Please enter a valid token');
      return;
    }

    setLoading(true);

    socket.emit('joinEvent', { token });

    // Optional: Add socket acknowledgement or wait for server response
    setTimeout(() => {
      setLoading(false);
      navigation.navigate('Events'); // ⬅️ Make sure 'Events' screen exists
    }, 1000);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Enter Token</Text>
      <TextInput
        value={token}
        onChangeText={setToken}
        placeholder="Enter token"
        style={styles.input}
        autoCapitalize="none"
        autoCorrect={false}
      />
      {loading ? (
        <ActivityIndicator size="large" color="#0000ff" />
      ) : (
        <Button title="Login" onPress={handleLogin} />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: 'center',
    backgroundColor: '#fff',
  },
  label: {
    fontSize: 20,
    marginBottom: 10,
    fontWeight: '600',
  },
  input: {
    borderWidth: 1,
    padding: 12,
    borderRadius: 8,
    borderColor: '#ccc',
    marginBottom: 20,
  },
});

export default LoginScreen;
