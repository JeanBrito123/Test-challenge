import * as types from './types';

const InitialState = {};

export default function listStore(state = InitialState, action) {
  switch (action.type) {
    case types.COLORS_STAR:
      return {
        ...state,
        colors: null,
      };
    case types.COLORS_COMPLETE:
      return {
        ...state,
        colors: action.colors,
      };
    default:
      return state;
  }
}
