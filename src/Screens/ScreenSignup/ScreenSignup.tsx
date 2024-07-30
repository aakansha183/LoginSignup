import React from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import { useDispatch } from 'react-redux';
import { Controller, useForm, SubmitHandler } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { login } from '../../Redux/Slice/UserSlice';  
import storage from '../../utils/MMKVstorage';
import { RegisterForm, RegisterScreenNavigationProp } from './utils/types';
import { styles } from './Stylessignup';
import { validationSchema } from './utils/ValidationSchema';

type Props = {
  navigation: RegisterScreenNavigationProp;
};

const ScreenSignup: React.FC<Props> = ({ navigation }) => {
  const { control, handleSubmit, formState: { errors } } = useForm<RegisterForm>({
    resolver: yupResolver(validationSchema),
  });
  const dispatch = useDispatch();

  const onSubmit: SubmitHandler<RegisterForm> = (data) => {
    storage.set('username', data.username);
    storage.set('password', data.password);  

    dispatch(login(data.username));
    navigation.navigate('Home');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.HeadingTitle}>Register Yourself</Text>
      <Controller
        control={control}
        name="username"
        defaultValue=""
        render={({ field: { onChange, value } }) => (
          <TextInput
            style={styles.input}
            placeholder="Username"
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
            placeholder="Password"
            secureTextEntry
            value={value}
            onChangeText={onChange}
          />
        )}
      />
      {errors.password && <Text style={styles.errorText}>{errors.password.message}</Text>}
      
      <Controller
        control={control}
        name="email"
        defaultValue=""
        render={({ field: { onChange, value } }) => (
          <TextInput
            style={styles.input}
            placeholder="Enter your Email"
            value={value}
            onChangeText={onChange}
          />
        )}
      />
      {errors.email && <Text style={styles.errorText}>{errors.email.message}</Text>}
      
      <Controller
        control={control}
        name="firstname"
        defaultValue=""
        render={({ field: { onChange, value } }) => (
          <TextInput
            style={styles.input}
            placeholder="Enter Your FirstName"
            value={value}
            onChangeText={onChange}
          />
        )}
      />
      {errors.firstname && <Text style={styles.errorText}>{errors.firstname.message}</Text>}
      
      <Controller
        control={control}
        name="lastname"
        defaultValue=""
        render={({ field: { onChange, value } }) => (
          <TextInput
            style={styles.input}
            placeholder="Enter Your LastName"
            value={value}
            onChangeText={onChange}
          />
        )}
      />
      {errors.lastname && <Text style={styles.errorText}>{errors.lastname.message}</Text>}
      
      <TouchableOpacity style={styles.button} onPress={handleSubmit(onSubmit)}>
        <Text style={styles.buttonText}>Register</Text>
      </TouchableOpacity>
    </View>
  );
};

export default ScreenSignup;
