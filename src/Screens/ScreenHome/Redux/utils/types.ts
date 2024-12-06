import { ImageData } from "../../utils/types";

export interface ImageState {
    images: ImageData[];
    loading: boolean;
    error: string | null;
  }