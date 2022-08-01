import * as types from './types';

const colors = payload => {
    return {
        type: types.COLORS_STAR,
        payload,
    };
};


export {
    colors
}
