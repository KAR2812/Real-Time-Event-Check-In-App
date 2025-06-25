// frontend/src/screens/EventsScreen.tsx
import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';
import { io } from 'socket.io-client';

const socket = io('http://192.168.121.152:4000'); // 🔄 Replace with your backend IP if needed

const EventsScreen = () => {
  const [messages, setMessages] = useState<string[]>([]);

  useEffect(() => {
    socket.on('userJoined', (msg) => {
      setMessages((prev) => [...prev, msg]);
    });

    // Optional cleanup
    return () => {
      socket.off('userJoined');
    };
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>🟢 Live Event Check-ins</Text>
      <FlatList
        data={messages}
        keyExtractor={(item, index) => `${item}-${index}`}
        renderItem={({ item }) => <Text style={styles.item}>• {item}</Text>}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, backgroundColor: '#fff' },
  heading: { fontSize: 22, fontWeight: 'bold', marginBottom: 20 },
  item: { fontSize: 16, paddingVertical: 4 }
});

export default EventsScreen;
