import React from 'react';
import { Text, View, Image } from 'react-native';
import Card from './Card';
import CardSection from './CardSection';

const AlbumDetail = ({ album }) => {
  const { title, artist, thumbnail_image } = album;
  const {
    headerContentStyle,
    headerTextStyle,
    thumbnailStyle,
    thumbnailContainerStyle
  } = styles;

  return (
    <Card>
      <CardSection>
        <View style={thumbnailContainerStyle}>
          <Image
            source={{ uri: thumbnail_image }}
            style={thumbnailStyle}
          />
        </View>

        <View style={headerContentStyle}>
          <Text style={headerTextStyle}>{title}</Text>
          <Text>{artist}</Text>
        </View>
      </CardSection>
    </Card>
  );
};

const styles = {
  headerContentStyle: {
    flexDirection: 'column',
    justifyContent: 'space-around'
  },
  headerTextStyle: {
    fontSize: 18
  },
  thumbnailStyle: {
    width: 50,
    height: 50,
  },
  thumbnailContainerStyle: {
    marginLeft: 10,
    marginRight: 10,
    justifyContent: 'center',
    alignItems: 'center'
  }
};

export default AlbumDetail;
