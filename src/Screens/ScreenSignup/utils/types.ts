import { StackNavigationProp } from "@react-navigation/stack";
import { RootStackParamList } from "../../../utils/Types";

export interface RegisterForm {
    username: string;
    password: string;
    email:string;
    firstname:string;
    lastname:string;
  }
  export type RegisterScreenNavigationProp = StackNavigationProp<RootStackParamList, 'Register'>;
