import React from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity, FlatList } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function NutrisiScreen() {
  // Dummy data untuk content nutrisi
  const contentData = Array(12).fill("CONTENT NUTRISI");

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

      {/* Grid Content */}
      <FlatList
        data={contentData}
        keyExtractor={(item, index) => index.toString()}
        numColumns={2} // Untuk membuat dua kolom
        renderItem={({ item }) => (
          <TouchableOpacity style={styles.contentCard}>
            <Text style={styles.contentText}>{item}</Text>
          </TouchableOpacity>
        )}
        columnWrapperStyle={styles.row}
        showsVerticalScrollIndicator={false}
      />
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
  row: {
    justifyContent: 'space-between',
    marginBottom: 15,
  },
  contentCard: {
    backgroundColor: '#ddd',
    paddingVertical: 30,
    paddingHorizontal: 20,
    borderRadius: 50, // Membuat bentuk bulat
    marginBottom: 15,
    justifyContent: 'center',
    alignItems: 'center',
    width: '48%', // Ukuran lebar card
  },
  contentText: {
    fontSize: 14,
    fontWeight: '500',
    textAlign: 'center',
  },
});
