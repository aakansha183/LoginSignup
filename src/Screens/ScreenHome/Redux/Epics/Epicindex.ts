import { combineEpics, Epic } from 'redux-observable';
import { fetchImagesEpic } from './FetchImageEpic';

const epics :Epic[]= [
  fetchImagesEpic,
] as Epic[];

export const rootEpic = combineEpics(...epics);

