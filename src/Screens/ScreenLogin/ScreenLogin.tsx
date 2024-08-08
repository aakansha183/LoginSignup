import auth from '@react-native-firebase/auth';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { GoogleSignin, statusCodes } from '@react-native-google-signin/google-signin';
import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, Alert, TouchableOpacity, StatusBar, Image } from 'react-native';
import { useForm, Controller } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { login } from '../../Redux/MasterSlice/UserSlice';
import { styles } from './StylesLogin';
import { LoginForm, LoginScreenNavigationProp } from './utils/types';
import { validationSchema } from './utils/ValidationSchema';
import { yupResolver } from '@hookform/resolvers/yup';
import GoogleIcon from '../../Assests/ImagesData/ImageGoogle';
import FacebookIcon from '../../Assests/ImagesData/ImageFacebook';
import PhoneIcon from '../../Assests/ImagesData/ImagePhone';
import { signInWithEmail } from '../../Redux/MasterSlice/FirebaseAuth';

type Props = {
  navigation: LoginScreenNavigationProp;
};

const ScreenLogin: React.FC<Props> = ({ navigation }) => {
  const { control, handleSubmit, formState: { errors } } = useForm<LoginForm>({
    resolver: yupResolver(validationSchema),
  });
  const dispatch = useDispatch();
  const [isInProgress, setIsInProgress] = useState(false);

  useEffect(() => {
    GoogleSignin.configure({
      webClientId: '888196417583-sk7maebj3j4ma5rpi2rbtiqbq1b5sprl.apps.googleusercontent.com',
    });
  }, []);

  const onSubmit = async (data: LoginForm) => {
    const response = await signInWithEmail(data.email, data.password);
    if (response.success) {
      dispatch(login(data.email));
    } else {
      Alert.alert('Login Error', response.message);
    }
  };

  const handleGoogleSignIn = async () => {
    try {
      setIsInProgress(true);
      await GoogleSignin.hasPlayServices();
      const userInfo = await GoogleSignin.signIn();
      const googleCredential = auth.GoogleAuthProvider.credential(userInfo.idToken);
      await auth().signInWithCredential(googleCredential);

      const token = await auth().currentUser?.getIdToken();
      if (token) {
        await AsyncStorage.setItem('authToken', token);
        dispatch(login(userInfo.user.email));
      }
    } catch (error) {
      console.log("Error")
    } finally {
      setIsInProgress(false);
    }
  };

  return (
    <View style={styles.container}>
      <StatusBar translucent backgroundColor='transparent' barStyle="dark-content" />
      <Image source={require('../../Assests/ImagesData/LoginImage.png')} style={styles.loginimage} />
      <View style={styles.card}>
        <Controller
          control={control}
          name="email"
          defaultValue=""
          render={({ field: { onChange, value } }) => (
            <TextInput
              style={styles.LoginInput}
              placeholder="Enter your Email"
              value={value}
              onChangeText={onChange}
            />
          )}
        />
        {errors.email && <Text style={styles.errorText}>{errors.email.message}</Text>}

        <Controller
          control={control}
          name="password"
          defaultValue=""
          render={({ field: { onChange, value } }) => (
            <TextInput
              style={styles.LoginInput}
              placeholder="Enter your Password"
              secureTextEntry
              value={value}
              onChangeText={onChange}
            />
          )}
        />
        {errors.password && <Text style={styles.errorText}>{errors.password.message}</Text>}

        <TouchableOpacity style={styles.Loginbutton} onPress={handleSubmit(onSubmit)}>
          <Text style={styles.LoginbuttonText}>Login</Text>
        </TouchableOpacity>
        <Text onPress={() => navigation.navigate('Register')} style={styles.link}>
          Don't have an account? Register
        </Text>
        <View style={styles.Iconcard}>
          <View style={styles.GoogleIcon}>
            <TouchableOpacity onPress={handleGoogleSignIn} disabled={isInProgress}>
              <GoogleIcon />
            </TouchableOpacity>
          </View>
          <View style={styles.facebookIcon}>
            <TouchableOpacity>
              <FacebookIcon />
            </TouchableOpacity>
          </View>
          <View style={styles.phoneicon}>
            <TouchableOpacity>
              <PhoneIcon />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
};

export default ScreenLogin;

