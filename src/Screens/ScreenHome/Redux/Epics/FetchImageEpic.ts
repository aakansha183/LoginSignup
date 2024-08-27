import { ofType } from 'redux-observable';
import { mergeMap } from 'rxjs/operators';
import { from, of, Observable } from 'rxjs';
import axios from 'axios';
import { fetchImagesRequest, fetchImagesSuccess, fetchImagesFailure, ImageFetch } from '../MasterSlice/ImageSlice';
import { ImageData } from '../../utils/types';
import { makeGetRequest } from '../Interceptors';

interface ApiResponse {
  hits: ImageData[];
}

export const fetchImagesEpic = (action$: Observable<ImageFetch>) =>
  action$.pipe(
    ofType(fetchImagesRequest.type),
    mergeMap(() =>
      from(
         makeGetRequest('https://pixabay.com/api/?key=45184612-0187cf1c5523f5bf42f2330af&q=oceans&image_type=photo&per_page=10')
          .then((response) => response.data.hits ? fetchImagesSuccess(response.data.hits) : fetchImagesFailure('No images found'))
          .catch((error) => of(fetchImagesFailure(error.message)))
      )
    )
  );

