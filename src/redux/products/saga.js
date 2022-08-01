import { put, takeLatest } from 'redux-saga/effects';
import { get } from 'lodash';
import * as types from './types';
import { data } from '../../database/data';

export function* products() {
  try {
    if (data !== undefined && data.status === 200) {
      yield put({
        type: types.PRODUCTS_COMPLETE,
        data,
      });
    }
  } catch (error) {
    if (error.response !== undefined) {
      if (error.response.status === 400) {
        const errorDirec = 'Los datos enviado son incorrectos';
        yield put({
          type: types.PRODUCTS_ERROR,
          error: errorDirec,
        });
      }else if (error.response.status === 401) {
        const errorDirec = 'Requiere autorización para esta área';
        yield put({
          type: types.PRODUCTS_ERROR,
          error: errorDirec,
        });
      } else if (error.response.status === 404) {
        const errorDirec = 'Esta dirección no existe';
        yield put({
          type: types.PRODUCTS_ERROR,
          error: errorDirec,
        });
      } else if (error.response.status === 500) {
        const errorServer =
          'Disculpe. Ha habido un problema interno del servidor';
        yield put({
          type: types.PRODUCTS_ERROR,
          error: errorServer,
        });
      } else {
        yield put({
          type: types.PRODUCTS_ERROR,
          error: 'Disculpe. Ha habido un problema interno del servidor',
        });
      }
    } else {
      const errorConex = 'ERROR DE CONEXIÓN';
      yield put({
        type: types.PRODUCTS_ERROR,
        error: errorConex,
      });
    }
  }
};

export function* updateProducts({ payload }) {
  try {
    if (payload.length) {
      yield put({
        type: types.PRODUCTS_COMPLETE,
        data: {status: 200, products: payload},
      });
    }
  } catch (error) {
    if (error.response !== undefined) {
      if (error.response.status === 400) {
        const errorDirec = 'Los datos enviado son incorrectos';
        yield put({
          type: types.PRODUCTS_ERROR,
          error: errorDirec,
        });
      }else if (error.response.status === 401) {
        const errorDirec = 'Requiere autorización para esta área';
        yield put({
          type: types.PRODUCTS_ERROR,
          error: errorDirec,
        });
      } else if (error.response.status === 404) {
        const errorDirec = 'Esta dirección no existe';
        yield put({
          type: types.PRODUCTS_ERROR,
          error: errorDirec,
        });
      } else if (error.response.status === 500) {
        const errorServer =
          'Disculpe. Ha habido un problema interno del servidor';
        yield put({
          type: types.PRODUCTS_ERROR,
          error: errorServer,
        });
      } else {
        yield put({
          type: types.PRODUCTS_ERROR,
          error: 'Disculpe. Ha habido un problema interno del servidor',
        });
      }
    } else {
      const errorConex = 'ERROR DE CONEXIÓN';
      yield put({
        type: types.PRODUCTS_ERROR,
        error: errorConex,
      });
    }
  }
}


export function* sagaProducts() {
  yield takeLatest(types.PRODUCTS_START, products);
  yield takeLatest(types.UPDATE_PRODUCTS_STAR, updateProducts);  
}

export const loading = state => get(state, 'productsStore.loading');
export const error = state => get(state, 'productsStore.error');
