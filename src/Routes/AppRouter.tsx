import React, { useEffect, useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import RegisterScreen from '../Screens/ScreenSignup/ScreenSignup';
import LoginScreen from '../Screens/ScreenLogin/ScreenLogin';
import HomeScreen from '../Screens/ScreenHome/ScreenHome';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../Redux/store';
import { login } from '../Redux/MasterSlice/UserSlice';
import { View } from 'react-native';
import LottieView from 'lottie-react-native';
import { stylesplash } from '../Screens/ScreenSplash/StylesSplash';

const AuthStack = createStackNavigator();
const AppStack = createStackNavigator();

const AuthNavigator: React.FC = () => (
  <AuthStack.Navigator initialRouteName="Login">
    <AuthStack.Screen name="Login" component={LoginScreen} />
    <AuthStack.Screen name="Register" component={RegisterScreen} />
  </AuthStack.Navigator>
);

const AppNavigator: React.FC = () => (
  <AppStack.Navigator initialRouteName="Home">
    <AppStack.Screen name="Home" component={HomeScreen} />
  </AppStack.Navigator>
);

const MainNavigator: React.FC = () => {
  const [isLoading, setIsLoading] = useState(true);
  const isAuthenticated = useSelector((state: RootState) => state.auth.isLoggedIn);
  const dispatch = useDispatch();

  useEffect(() => {
    const checkUserToken = async () => {
      try {
        const userToken = await AsyncStorage.getItem('authToken');
        if (userToken) {
          dispatch(login('User'));
        }
      } catch (error) {
        console.error('Failed to fetch the user token:', error);
      } finally {
        setIsLoading(false);
      }
    };

    checkUserToken();
  }, [dispatch]);

  if (isLoading) {
    return (
      <View style={stylesplash.loaderContainer}>
       <LottieView
          source={require('../Assests/ImagesData/SplashAnimation.json')} 
          autoPlay
          loop
          style={stylesplash.animation} 
        />
      </View>
    );
  }

  return (
    <NavigationContainer>
      {isAuthenticated ? <AppNavigator /> : <AuthNavigator />}
    </NavigationContainer>
  );
};

export default MainNavigator;
