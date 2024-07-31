import { ImageData } from "../../Screens/ScreenHome/utils/types";

export interface ImageState {
    images: ImageData[];
    loading: boolean;
    error: string | null;
  }