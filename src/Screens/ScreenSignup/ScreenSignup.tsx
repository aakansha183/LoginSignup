import React from 'react';
import { View, Text, TextInput, TouchableOpacity, Alert } from 'react-native';
import { useDispatch } from 'react-redux';
import { Controller, useForm, SubmitHandler } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { login } from '../ScreenHome/Redux/MasterSlice/UserSlice';  
import { RegisterForm, RegisterScreenNavigationProp } from './utils/types';
import { styles } from './Stylessignup';
import { validationSchema } from './utils/ValidationSchema';
import { signUpWithEmail } from '../ScreenHome/Redux/MasterSlice/FirebaseAuth';

type Props = {
  navigation: RegisterScreenNavigationProp;
};

const ScreenSignup: React.FC<Props> = ({ navigation }) => {
  const { control, handleSubmit, formState: { errors } } = useForm<RegisterForm>({
    resolver: yupResolver(validationSchema),
  });
  const dispatch = useDispatch();

  const onSubmit: SubmitHandler<RegisterForm> = async (data) => {
    const response = await signUpWithEmail(data.email, data.password);
    if (response.success) {
      dispatch(login(data.email));
    } else {
      Alert.alert('Registration Error', response.message);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.HeadingTitle}>Register Yourself</Text>
      <Controller
        control={control}
        name="email"
        defaultValue=""
        render={({ field: { onChange, value } }) => (
          <TextInput
            style={styles.Signupinput}
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
            style={styles.Signupinput}
            placeholder="Password"
            secureTextEntry
            value={value}
            onChangeText={onChange}
          />
        )}
      />
      {errors.password && <Text style={styles.errorText}>{errors.password.message}</Text>}
      <TouchableOpacity style={styles.Signupbutton} onPress={handleSubmit(onSubmit)}>
        <Text style={styles.SignupbuttonText}>Register</Text>
      </TouchableOpacity>
    </View>
  );
};

export default ScreenSignup;
