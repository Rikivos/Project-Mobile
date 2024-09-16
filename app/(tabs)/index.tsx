import Ionicons from '@expo/vector-icons/Ionicons';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';



export default function HomeScreen() {
  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <View style={styles.profile}>
          <Image
            source={{ uri: 'https://via.placeholder.com/50' }} // Placeholder untuk foto profil
            style={styles.profileImage}
          />
          <View>
            <Text style={styles.greeting}>Hallo, Lorem Ipsum</Text>
            <Text style={styles.subtitle}>Selamat Pagi!</Text>
          </View>
        </View>
        <Ionicons name="notifications-outline" size={24} style={styles.notificationIcon} />
      </View>

      {/* Carousel */}
      <View style={styles.carouselContainer}>
        <TouchableOpacity style={styles.arrowButton}>
          <Ionicons name="chevron-back-outline" size={24} />
        </TouchableOpacity>
        <View style={styles.carouselItem}>
          <Text>Carousel Item</Text>
        </View>
        <TouchableOpacity style={styles.arrowButton}>
          <Ionicons name="chevron-forward-outline" size={24} />
        </TouchableOpacity>
      </View>

      {/* Buttons Section */}
      <View style={styles.buttonRow}>
        <TouchableOpacity style={styles.roundButton}>
          <Text>TIPS</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.roundButton}>
          <Text>TRIK</Text>
        </TouchableOpacity>
      </View>

      {/* Artikel Section */}
      <View style={styles.articleCard}>
        <Text>ARTIKEL</Text>
      </View>
      <View style={styles.articleCard}>
        <Text>ARTIKEL</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5',
    paddingHorizontal: 16,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: 50,
  },
  profile: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  profileImage: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 10,
  },
  greeting: {
    fontSize: 16,
    fontWeight: '600',
  },
  subtitle: {
    fontSize: 14,
    color: '#777',
  },
  notificationIcon: {
    color: '#777',
  },
  carouselContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginVertical: 20,
  },
  arrowButton: {
    padding: 10,
  },
  carouselItem: {
    width: 200,
    height: 150,
    backgroundColor: '#E0E0E0',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
  },
  buttonRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 20,
  },
  roundButton: {
    width: 100,
    height: 100,
    backgroundColor: '#E0E0E0',
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
  articleCard: {
    backgroundColor: '#E0E0E0',
    height: 100,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 10,
  },
  bottomNav: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    backgroundColor: '#FFF',
    paddingVertical: 10,
    borderTopWidth: 1,
    borderColor: '#E0E0E0',
  },
  navItem: {
    justifyContent: 'center',
    alignItems: 'center',
  },
});