import { all } from 'redux-saga/effects';
import { sagaProducts } from './products/saga';
import { sagaCars } from './cars/saga';
import { sagaColors } from './theme/saga';

export default function* rootSaga() {
    yield all([ sagaProducts(), sagaCars(), sagaColors() ]);
  };
  