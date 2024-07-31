import { Epic } from 'redux-observable';
import { ofType } from 'redux-observable';
import { mergeMap } from 'rxjs/operators';
import { from, of } from 'rxjs';
import { fetchImagesRequest, fetchImagesSuccess, fetchImagesFailure } from '../MasterSlice/ImageSlice';
import { ImageData } from '../../Screens/ScreenHome/utils/types';

interface ApiResponse {
  hits: ImageData[];
}

export const fetchImagesEpic: Epic = (action$) =>
  action$.pipe(
    ofType(fetchImagesRequest.type),
    mergeMap(() =>
      from(fetch('https://pixabay.com/api/?key=45184612-0187cf1c5523f5bf42f2330af&q=oceans&image_type=photo&per_page=10')
        .then((response) => response.json() as Promise<ApiResponse>)
        .then((data) =>
          data.hits ? fetchImagesSuccess(data.hits) : fetchImagesFailure('No images found')
        )
        .catch((error) => of(fetchImagesFailure(error.message)))
      )
    )
  );
