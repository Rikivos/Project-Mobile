import React from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function LatihanScreen() {
  return (
    <View style={styles.container}>
      {/* Search Bar */}
      <View style={styles.searchContainer}>
        <Ionicons name="search" size={20} color="#000" />
        <TextInput
          placeholder="Cari"
          style={styles.searchInput}
        />
      </View>

      {/* Title */}
      <Text style={styles.title}>Latihan untuk Pemula</Text>

      {/* Content Cards */}
      <TouchableOpacity style={styles.contentCard}>
        <Text style={styles.contentText}>CONTENT LATIHAN</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.contentCard}>
        <Text style={styles.contentText}>CONTENT LATIHAN</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.contentCard}>
        <Text style={styles.contentText}>CONTENT LATIHAN</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.contentCard}>
        <Text style={styles.contentText}>CONTENT LATIHAN</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    padding: 20,
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    paddingHorizontal: 10,
    paddingVertical: 8,
    borderRadius: 10,
    marginBottom: 20,
    borderWidth: 1,
    borderColor: '#ccc',
  },
  searchInput: {
    marginLeft: 10,
    fontSize: 16,
    flex: 1,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  contentCard: {
    backgroundColor: '#ddd',
    paddingVertical: 30,
    borderRadius: 20,
    marginBottom: 15,
    justifyContent: 'center',
    alignItems: 'center',
  },
  contentText: {
    fontSize: 16,
    fontWeight: '500',
  },
});
