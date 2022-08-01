import * as types from './types';

const addlist = payload => {
    return {
        type: types.LIST_PRODUCTS_STAR,
        payload,
    };
};


export {
    addlist
}
