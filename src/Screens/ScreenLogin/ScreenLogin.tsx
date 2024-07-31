import React from 'react';
import { View, Text, TextInput, Alert, TouchableOpacity } from 'react-native';
import { useForm, Controller } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { login } from '../../Redux/MasterSlice/UserSlice'; 
import storage from '../../utils/MMKVstorage';
import { styles } from './StylesLogin';
import { LoginForm, LoginScreenNavigationProp } from './utils/types';
import { validationSchema } from './utils/ValidationSchema';
import { yupResolver } from '@hookform/resolvers/yup';

type Props = {
  navigation: LoginScreenNavigationProp;
};

const ScreenLogin: React.FC<Props> = ({ navigation }) => {
  const { control, handleSubmit, formState: { errors } } = useForm<LoginForm>({
    resolver: yupResolver(validationSchema),
  });
  const dispatch = useDispatch();

  const onSubmit = (data: LoginForm) => {
    const storedUsername = storage.getString('username');
    const storedPassword = storage.getString('password');  

    if (data.username === storedUsername && data.password === storedPassword) {
      dispatch(login(data.username));
      navigation.navigate('Home');
    } else {
      Alert.alert('Invalid username or password');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.Headingtext}>Hii,Welcome Back</Text>
      <Controller
        control={control}
        name="username"
        defaultValue=""
        render={({ field: { onChange, value } }) => (
          <TextInput
            style={styles.input}
            placeholder="Enter Your Username"
            value={value}
            onChangeText={onChange}
          />
        )}
      />
      {errors.username && <Text style={styles.errorText}>{errors.username.message}</Text>}

      <Controller
        control={control}
        name="password"
        defaultValue=""
        render={({ field: { onChange, value } }) => (
          <TextInput
            style={styles.input}
            placeholder="Enter your Password"
            secureTextEntry
            value={value}
            onChangeText={onChange}
          />
        )}
      />
      {errors.password && <Text style={styles.errorText}>{errors.password.message}</Text>}

      <TouchableOpacity style={styles.button} onPress={handleSubmit(onSubmit)}>
        <Text style={styles.buttonText}>Login</Text>
      </TouchableOpacity>
      <Text onPress={() => navigation.navigate('Register')} style={styles.link}>
        Don't have an account? Register
      </Text>
    </View>
  );
};

export default ScreenLogin;
