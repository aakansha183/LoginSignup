import React, { useEffect, useCallback } from 'react';
import { View, Text, Button, ActivityIndicator, BackHandler } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { fetchImagesRequest } from './Redux/MasterSlice/ImageSlice';
import { RootState } from './Redux/store';
import { styles } from './StylesHome';
import { HomeScreenNavigationProp } from './utils/types';
import ImageList from './Components/ComponentImageList';
import { logout } from './Redux/MasterSlice/UserSlice';
import { logoutUser } from './Redux/MasterSlice/FirebaseAuth';

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


  const handleLogout = async() => {
    await logoutUser();
    dispatch(logout());
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
