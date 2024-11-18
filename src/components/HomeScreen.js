import React, { useState } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  FlatList,
  Image,
  Modal,
} from 'react-native';
import { WebView } from 'react-native-webview';

const videos = [
  { id: '1', title: 'HTML Basics', videoUrl: 'https://www.youtube.com/embed/dD2EISBDj1c' },
  { id: '2', title: 'CSS Fundamentals', videoUrl: 'https://www.youtube.com/embed/yfoY53QXEnI' },
  { id: '3', title: 'JavaScript Basics', videoUrl: 'https://www.youtube.com/embed/W6NZfCO5SIk' },
  { id: '4', title: 'Responsive Web Design', videoUrl: 'https://www.youtube.com/embed/1Rs2ND1ryYc' },
  { id: '5', title: 'CSS Flexbox', videoUrl: 'https://www.youtube.com/embed/fYq5PXgSsbE' },
  { id: '6', title: 'React JS Crash Course', videoUrl: 'https://www.youtube.com/embed/bMknfKXIFA8' },
  { id: '7', title: 'Node.js Tutorial', videoUrl: 'https://www.youtube.com/embed/Oe421EPjeBE' },
  { id: '8', title: 'Python for Beginners', videoUrl: 'https://www.youtube.com/embed/_uQrJ0TkZlc' },
  { id: '9', title: 'Git & GitHub Crash Course', videoUrl: 'https://www.youtube.com/embed/RGOj5yH7evk' },
  { id: '10', title: 'Bootstrap 5 Tutorial', videoUrl: 'https://www.youtube.com/embed/pnNmoaetykA' },
];

const getYouTubeThumbnail = (videoUrl) => {
  const videoId = videoUrl.split('/').pop();
  return `https://img.youtube.com/vi/${videoId}/hqdefault.jpg`;
};

const addAutoplay = (videoUrl) => `${videoUrl}?autoplay=1`;

const HomeScreen = () => {
  const [isModalVisible, setModalVisible] = useState(false);
  const [selectedVideoUrl, setSelectedVideoUrl] = useState('');

  const renderItem = ({ item }) => (
    <TouchableOpacity
      style={styles.videoCard}
      onPress={() => {
        setSelectedVideoUrl(addAutoplay(item.videoUrl));
        setModalVisible(true);
      }}
    >
      <Image source={{ uri: getYouTubeThumbnail(item.videoUrl) }} style={styles.thumbnail} />
      <Text style={styles.title} numberOfLines={2}>{item.title}</Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Learn Web Development</Text>
      <FlatList
        data={videos}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        numColumns={2}
        columnWrapperStyle={styles.row}
      />

      <Modal
        visible={isModalVisible}
        transparent={true}
        animationType="slide"
        onRequestClose={() => setModalVisible(false)}
      >
        <View style={styles.modalContainer}>
          <WebView
            source={{ uri: selectedVideoUrl }}
            style={styles.webview}
            allowsInlineMediaPlayback={true}
          />
          <TouchableOpacity
            style={styles.closeButton}
            onPress={() => setModalVisible(false)}
          >
            <Text style={styles.closeButtonText}>Close</Text>
          </TouchableOpacity>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 15,
    backgroundColor: '#1e1e1e', // Sleek dark background
  },
  header: {
    fontSize: 26,
    fontWeight: 'bold',
    color: '#fff',
    textAlign: 'center',
    marginBottom: 20,
  },
  row: {
    justifyContent: 'space-between',
    marginBottom: 15,
  },
  videoCard: {
    flex: 1,
    margin: 7,
    backgroundColor: '#2b2b2b', // Subtle dark card background
    borderRadius: 15,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 6,
    elevation: 6, // For Android shadow effect
    overflow: 'hidden',
  },
  thumbnail: {
    width: '100%',
    height: 150,
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
  },
  title: {
    fontSize: 16,
    fontWeight: '600',
    color: '#eaeaea',
    padding: 10,
    textAlign: 'center',
    lineHeight: 20,
  },
  modalContainer: {
    flex: 1,
    backgroundColor: '#000', // Full black for video modal
    justifyContent: 'center',
    alignItems: 'center',
  },
  webview: {
    width: '90%',
    height: '70%',
  },
  closeButton: {
    marginTop: 20,
    paddingVertical: 10,
    paddingHorizontal: 20,
    backgroundColor: '#d9534f', // Vibrant red close button
    borderRadius: 8,
  },
  closeButtonText: {
    color: '#FFF',
    fontWeight: 'bold',
    fontSize: 16,
  },
});


export default HomeScreen;
