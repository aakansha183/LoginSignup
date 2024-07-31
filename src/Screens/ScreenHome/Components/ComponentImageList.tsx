import React from 'react';
import { View,Text,Image,FlatList } from 'react-native';
import { ImageData, ImageListProps } from '../utils/types';
import { styles } from '../StylesHome';
import LikeIcon from '../../../Assests/ImagesData.tsx/ImageLikeIcon';
import EyeIcon from '../../../Assests/ImagesData.tsx/ImageViewIcon';

const ImageList: React.FC<ImageListProps> = ({ data }) => {
  const renderItem = ({ item }: { item: ImageData }) => (
    <View style={styles.imageContainer}>
      <Image source={{ uri: item.webformatURL }} style={styles.imageFetched} />
      <Text style={styles.imageTitle}>Title: {item.tags}</Text>
      <View style={styles.likeContainer}>
        <LikeIcon width={24} height={24} />
        <Text style={styles.likes}>{item.likes}</Text>
      </View>
      <View style={styles.viewContainer}>
        <EyeIcon width={24} height={24} />
        <Text style={styles.views}>{item.views}</Text>
      </View>
    </View>
  );

  return (
    <FlatList
      data={data}
      renderItem={renderItem}
      keyExtractor={(item) => item.id.toString()}
    />
  );
};
export default ImageList;
