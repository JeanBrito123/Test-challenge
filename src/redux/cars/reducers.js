import * as types from './types';

const InitialState = {};

export default function listStore(state = InitialState, action) {
  switch (action.type) {
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
