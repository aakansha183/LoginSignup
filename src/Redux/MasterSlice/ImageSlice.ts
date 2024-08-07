import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ImageData } from '../../Screens/ScreenHome/utils/types';
import { ImageState } from '../utils/types';

const initialState: ImageState = {
  images: [],
  loading: false,
  error: null,
};

const imageSlice = createSlice({
  name: 'images',
  initialState,
  reducers: {
    fetchImagesRequest: (state) => {
      state.loading = true;
    },
    fetchImagesSuccess: (state, action: PayloadAction<ImageData[]>) => {
      state.images = action.payload;
      state.loading = false;
    },
    fetchImagesFailure: (state, action:                                                                                                                                                        PayloadAction<string>) => {
      state.error = action.payload;
      state.loading = false;
    },
  },
});

export const { fetchImagesRequest, fetchImagesSuccess, fetchImagesFailure } = imageSlice.actions;
export default imageSlice.reducer;
 
export type ImageFetch = 
|ReturnType<typeof fetchImagesRequest>
|ReturnType<typeof fetchImagesSuccess>
|ReturnType<typeof fetchImagesFailure>;
