import React from 'react';
import { View, ImageBackground, StyleSheet } from 'react-native';
import CityLink from './cityLink';

type CityScreenProps = {
  imageSource: any;
  cityUrl: string;
};

const CityScreen: React.FC<CityScreenProps> = ({ imageSource, cityUrl }) => {
  return (
    <ImageBackground
      source={imageSource}
      style={styles.backgroundImage}
      resizeMode="cover"
    >
      <View style={styles.container}>
        <CityLink url={cityUrl} />
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    width: '100%',
    height: '100%',
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
});

export default CityScreen;