import { StackNavigationProp } from "@react-navigation/stack";
import { RootStackParamList } from "../../../utils/Types";

export interface LoginForm {
    username: string;
    password: string;
  }
  export type LoginScreenNavigationProp = StackNavigationProp<RootStackParamList, 'Login'>;
  
