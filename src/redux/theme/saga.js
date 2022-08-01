import { put, takeLatest } from 'redux-saga/effects';
import * as types from './types';

export function* colorsList({ payload }) {
  try {
    
    yield put({
      type: types.COLORS_COMPLETE,
      colors: payload,
    });
  } catch (error) {
    console.log(error)
  }
};

export function* sagaColors() { 
  yield takeLatest(types.COLORS_STAR, colorsList);  
}
