import { StackNavigationProp } from "@react-navigation/stack";
import { RootStackParamList } from "../../../utils/Types";

export interface RegisterForm {
    
    password: string;
    email:string;
    
  }
  export type RegisterScreenNavigationProp = StackNavigationProp<RootStackParamList, 'Register'>;
