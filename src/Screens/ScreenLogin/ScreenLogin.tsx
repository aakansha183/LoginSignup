import React from 'react';
import { View, Text, TextInput, Alert, TouchableOpacity, StatusBar } from 'react-native';
import { useForm, Controller } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { login } from '../../Redux/MasterSlice/UserSlice'; 
import { styles } from './StylesLogin';
import { LoginForm, LoginScreenNavigationProp } from './utils/types';
import { validationSchema } from './utils/ValidationSchema';
import { yupResolver } from '@hookform/resolvers/yup';
import GoogleIcon from '../../Assests/ImagesData.tsx/ImageGoogle';
import FacebookIcon from '../../Assests/ImagesData.tsx/ImageFacebook';
import PhoneIcon from '../../Assests/ImagesData.tsx/ImagePhone';
import { signInWithEmail } from '../../Redux/MasterSlice/FirebaseAuth';

type Props = {
  navigation: LoginScreenNavigationProp;
};

const ScreenLogin: React.FC<Props> = ({ navigation }) => {
  const { control, handleSubmit, formState: { errors } } = useForm<LoginForm>({
    resolver: yupResolver(validationSchema),
  });
  const dispatch = useDispatch();        

  const onSubmit = async (data: LoginForm) => {
    const response = await signInWithEmail(data.email, data.password);
    if (response.success) {
      dispatch(login(data.email));
     // navigation.navigate('Home');
    } else {
      Alert.alert('Login Error', response.message);
    }
  };

  return (
    <View style={styles.container}>
      <StatusBar translucent backgroundColor='transparent' barStyle="dark-content" />
      <Text style={styles.Headingtext}>Hii, Welcome Back</Text>
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
            <TouchableOpacity>
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
