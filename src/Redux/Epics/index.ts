import { combineEpics } from 'redux-observable';
import { fetchImagesEpic } from './FetchImageEpic';

export const rootEpic = combineEpics(fetchImagesEpic);
