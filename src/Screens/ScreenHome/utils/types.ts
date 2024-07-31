import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../../../utils/Types';

export type HomeScreenNavigationProp = StackNavigationProp<RootStackParamList, 'Home'>;

export interface ImageData {
  id: number;
  likes: number;
  views: number;
  comments: number;
  webformatURL: string;
  tags: string;
}
