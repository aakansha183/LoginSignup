import React, { useEffect, useState } from 'react';
import { View, Text, Button, ActivityIndicator, FlatList, Image, StyleSheet } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { logout } from '../../Redux/Slice/UserSlice';
import { RootState } from '../../Redux/store';
import { HomeScreenNavigationProp } from './utils/types';
import { styles } from './StylesHome';
type ImageData = {
  id: number;
  likes: number;
  views: number;
  comments: number;
  webformatURL: string;
};

type Props = {
  navigation: HomeScreenNavigationProp;
};

const HomeScreen: React.FC<Props> = ({ navigation }) => {
  const user = useSelector((state: RootState) => state.auth.user);
  const dispatch = useDispatch();
  const [images, setImages] = useState<ImageData[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://pixabay.com/api/?key=45184612-0187cf1c5523f5bf42f2330af&q=car&image_type=photo&per_page=10');
        const data = await response.json();
        if (data.hits) {
          setImages(data.hits);
        }
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const handleLogout = () => {
    dispatch(logout());
    navigation.navigate('Login');
  };

  if (loading) {
    return (
      <View style={styles.container}>
        <ActivityIndicator size="large" color="#0000ff" />
      </View>
    );
  }

  const renderItem = ({ item }: { item: ImageData }) => (
    <View style={styles.imageContainer}>
      <Image source={{ uri: item.webformatURL }} style={styles.image} />
      <Text style ={styles.likes}>Likes: {item.likes}</Text>
      <Text>Views: {item.views}</Text>
      <Text>Comments: {item.comments}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <Text>Welcome, {user}</Text>
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
