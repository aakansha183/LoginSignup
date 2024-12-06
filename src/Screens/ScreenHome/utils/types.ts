import { RootStackParamList } from '../../../utils/Types';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

export type HomeScreenNavigationProp = NativeStackNavigationProp<RootStackParamList, 'Home'>;

export interface ImageData {
  id: number;
  likes: number;
  views: number;
  
  webformatURL: string;
  tags: string;
}
export interface ImageListProps {
  data: ImageData[];
}
