import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, StatusBar } from 'react-native';
import Video from 'react-native-video';
import Icon from 'react-native-vector-icons/MaterialIcons'; // For icons

const VideoPlayerScreen = ({ route }) => {
  const { videoUrl, videoTitle } = route.params; // Pass title and URL from HomeScreen
  const [isFullscreen, setFullscreen] = useState(false);

  const handleFullscreenToggle = () => {
    setFullscreen(!isFullscreen);
  };

  return (
    <View style={[styles.container, isFullscreen && styles.fullscreenContainer]}>
      <StatusBar hidden={isFullscreen} />
      {!isFullscreen && <Text style={styles.title}>{videoTitle}</Text>}
      <Video
        source={{ uri: videoUrl }}
        style={[styles.video, isFullscreen && styles.fullscreenVideo]}
        controls
        resizeMode="contain"
      />
      <View style={styles.controls}>
        <TouchableOpacity onPress={handleFullscreenToggle} style={styles.controlButton}>
          <Icon name={isFullscreen ? "fullscreen-exit" : "fullscreen"} size={24} color="#FFF" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    paddingTop: 20,
  },
  fullscreenContainer: {
    paddingTop: 0,
    backgroundColor: '#000',
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#FFF',
    textAlign: 'center',
    marginBottom: 10,
  },
  video: {
    width: '100%',
    height: '50%',
  },
  fullscreenVideo: {
    width: '100%',
    height: '100%',
  },
  controls: {
    position: 'absolute',
    bottom: 20,
    right: 20,
    flexDirection: 'row',
  },
  controlButton: {
    backgroundColor: 'rgba(0,0,0,0.7)',
    padding: 10,
    borderRadius: 25,
    marginHorizontal: 5,
  },
});

export default VideoPlayerScreen;
