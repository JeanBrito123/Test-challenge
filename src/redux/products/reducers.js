import * as types from './types';

const InitialState = {};

export default function productsStore(state = InitialState, action) {
  switch (action.type) {
    case types.PRODUCTS_START:
      return {
        ...state,
        loading: true,
        products: null,
        error: null,
        showModal: false,
      };
    case types.PRODUCTS_COMPLETE:
      return {
        ...state,
        loading: null,
        products: action.data.products,
        error: null,
        msgModal: `Productos cargados exitosamente.`,
      };
    case types.PRODUCTS_ERROR:
      return {
        ...state,
        loading: null,
        error: action.error,
        products: null,
        msgModal: `Products: ${action.error}`,
      };
    case types.LIST_PRODUCTS_STAR:
      return {
        ...state,
        loading: true,
        listProducts: [],
        error: null,
        showModal: false,
      };
    case types.LIST_PRODUCTS_COMPLETE:
      return {
        ...state,
        loading: null,
        listProducts: action.list,
        error: null,
      };
    default:
      return state;
  }
}
