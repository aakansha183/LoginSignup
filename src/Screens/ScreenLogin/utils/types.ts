import { StackNavigationProp } from "@react-navigation/stack";
import { RootStackParamList } from "../../../utils/Types";

export interface LoginForm {
    email: string;
    password: string;
  }
  export type LoginScreenNavigationProp = StackNavigationProp<RootStackParamList, 'Login'>;
  
