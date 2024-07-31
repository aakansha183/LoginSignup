import React, { useEffect, useCallback } from 'react';
import { View, Text, Button, ActivityIndicator, FlatList, Image, BackHandler } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { fetchImagesRequest } from '../../Redux/MasterSlice/ImageSlice';
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

  const handleBackButton = useCallback(() => {
    BackHandler.exitApp(); 
    return true; 
  }, []);

  useEffect(() => {
    BackHandler.addEventListener('hardwareBackPress', handleBackButton);

    return () => {
      BackHandler.removeEventListener('hardwareBackPress', handleBackButton);
    };
  }, [handleBackButton]);

  const handleLogout = () => {
    navigation.navigate('Login');
  };

  const renderItem = ({ item }: { item: ImageData }) => (
    <View style={styles.imageContainer}>
      <Image source={{ uri: item.webformatURL }} style={styles.image} />
      <Text style={styles.imageTitle}>Title: {item.tags}</Text>
      <Text style={styles.likes}>Likes: {item.likes}</Text>
      <Text style={styles.views}>Views: {item.views}</Text>
      <Text style={styles.comments}>Comments: {item.comments}</Text>
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
      <View  style = {styles.Header}>
        <Text style={styles.HeadingTitle}>Welcome Back</Text>
        <Button title="Logout" onPress={handleLogout} />
      </View>
      <FlatList
        data={images}
        renderItem={renderItem}
        keyExtractor={(item) => item.id.toString()}
      />
    </View>
  );
};

export default HomeScreen;
