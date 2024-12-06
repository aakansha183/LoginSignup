import auth from '@react-native-firebase/auth';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { GoogleSignin } from '@react-native-google-signin/google-signin';


export const signInWithEmail = async (email: string, password: string) => {
  try {
    await auth().signInWithEmailAndPassword(email, password);
    const user = auth().currentUser;
    if (user) {
      const token = await user.getIdToken();
     
      await AsyncStorage.setItem('authToken', token);
      return { success: true, token };
    }
    return { success: false, message: 'User not found' };
  } catch (error) {
    const errorMessage = (error as { message: string }).message || 'An unexpected error occurred';
    return { success: false, message: errorMessage };
  }
};

export const signUpWithEmail = async (email: string, password: string) => {
  try {
    await auth().createUserWithEmailAndPassword(email, password);
    const user = auth().currentUser;
    if (user) {
      const token = await user.getIdToken();
      await AsyncStorage.setItem('authToken', token);     
       return { success: true, token };
    }
    return { success: false, message: 'User not found' };
  } catch (error) {
    const errorMessage = (error as { message: string }).message || 'An unexpected error occurred';
    return { success: false, message: errorMessage };
  }
};


export const logoutUser = async () => {
  try {
    await auth().signOut();
    await GoogleSignin.signOut();
    AsyncStorage.removeItem('authToken');
   
  } catch (error) {
    if (error instanceof Error) {
      throw new Error(error.message);
    }
    throw new Error('An unknown error occurred');
  }
};


