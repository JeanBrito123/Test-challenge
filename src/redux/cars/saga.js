import { put, takeLatest } from 'redux-saga/effects';
import { get } from 'lodash';
import * as types from './types';

export function* listProducts({ payload }) {
  try {
    
    yield put({
      type: types.LIST_PRODUCTS_COMPLETE,
      list: payload,
    });
  } catch (error) {
    console.log(error)
  }
};

export function* sagaCars() { 
  yield takeLatest(types.LIST_PRODUCTS_STAR, listProducts);  
}

export const loading = state => get(state, 'productsStore.loading');
export const error = state => get(state, 'productsStore.error');
