import React from 'react';
import { View, Image, StyleSheet, ImageResizeMode } from 'react-native';
import assets from '../assets';

interface ProfileImageProps {
  source?: string;
  imageStyle?: object;
  resizeMode?: ImageResizeMode;
  containerStyle?: object
}

const ProfileImage = (props: ProfileImageProps) => {

  const { source, imageStyle, resizeMode = 'contain', containerStyle } = props

  return (
    <View style={[styles.containerStyle, containerStyle]}>
      <Image
        source={!!source ? source : assets.profile_placeholder}
        resizeMode={resizeMode}
        style={[styles.imageStyle, imageStyle]}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  imageStyle: {
    width: '100%',
    height: '100%'
  },
  containerStyle: {
    width: '100%',
    height: '40%'
  }
})

export default ProfileImage;