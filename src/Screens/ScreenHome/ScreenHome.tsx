import React, { useEffect } from 'react';
import { View, Text, Button, ActivityIndicator, FlatList, Image, StyleSheet } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { fetchImagesRequest } from '../../Redux/Slice/ImageSlice';
import { RootState } from '../../Redux/store';
import { styles } from './StylesHome';
import { HomeScreenNavigationProp, ImageData } from './utils/types';

type Props = {
  navigation: HomeScreenNavigationProp;
};


const HomeScreen: React.FC<Props> = ({ navigation }) => {
  const user = useSelector((state: RootState) => state.auth.user);
  const { images, loading } = useSelector((state: RootState) => state.images);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchImagesRequest());
  }, [dispatch]);

  const handleLogout = () => {
    navigation.navigate('Login');
  };

  const renderItem = ({ item }: { item: ImageData }) => (
    <View style={styles.imageContainer}>
      <Image source={{ uri: item.webformatURL }} style={styles.image} />
      <Text style ={styles.imageTitle}>Title:{item.tags}</Text>
      <Text style = {styles.likes}>Likes: {item.likes}</Text>
      <Text>Views: {item.views}</Text>
      <Text>Comments: {item.comments}</Text>
    </View>
  );

  if (loading) {
    return (
      <View style={styles.container}>
        <ActivityIndicator size="large" color="#0000ff" />
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Text style ={styles.HeadingTitle}>Welcome Back</Text>
      <FlatList
        data={images}
        renderItem={renderItem}
        keyExtractor={(item) => item.id.toString()}
      />
      <Button title="Logout" onPress={handleLogout} />
    </View>
  );
};

export default HomeScreen;
