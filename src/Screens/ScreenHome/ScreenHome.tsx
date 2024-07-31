import React, { useEffect, useCallback } from 'react';
import { View, Text, Button, ActivityIndicator, BackHandler } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { fetchImagesRequest } from '../../Redux/MasterSlice/ImageSlice';
import { RootState } from '../../Redux/store';
import { styles } from './StylesHome';
import { HomeScreenNavigationProp } from './utils/types';
import ImageList from './Components/ComponentImageList';

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

  if (loading) {
    return (
      <View style={styles.container}>
        <ActivityIndicator size="large" color="#0000ff" />
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <View style={styles.welcomeHeader}>
        <Text style={styles.HeadingTitle}>Welcome Back</Text>
        <Button title="Logout" onPress={handleLogout} />
      </View>
      <ImageList data={images} />
    </View>
  );
};
export default HomeScreen;
