import { combineEpics } from 'redux-observable';
import { fetchImagesEpic } from './FetchImageEpic';

const epics = [
  fetchImagesEpic,
];

export const rootEpic = combineEpics(...epics);

