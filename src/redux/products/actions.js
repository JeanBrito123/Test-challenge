import * as types from './types';


const getProducts = (payload) => {
    return {
        type: types.PRODUCTS_START,
        payload
    };
};

const putProducts = payload => {
    return {
        type: types.UPDATE_PRODUCTS_STAR,
        payload,
    };
};


export {
    getProducts,
    putProducts
}
