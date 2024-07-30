import { ofType } from 'redux-observable';
import { mergeMap } from 'rxjs/operators';
import { of } from 'rxjs';
import { fetchImagesRequest, fetchImagesSuccess, fetchImagesFailure } from '../Slice/ImageSlice';

export const fetchImagesEpic = (action$: any) =>
  action$.pipe(
    ofType(fetchImagesRequest.type),
    mergeMap(() =>
      fetch('https://pixabay.com/api/?key=45184612-0187cf1c5523f5bf42f2330af&q=Teddy&image_type=photo&per_page=10')
        .then((response) => response.json())
        .then((data) =>
          data.hits ? fetchImagesSuccess(data.hits) : fetchImagesFailure('No images found')
        )
        .catch((error) => of(fetchImagesFailure(error.message)))
    )
  );
