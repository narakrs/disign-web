import * as Types from './../constants/ActionTypes';
var initialState = [];

var findIndex = (products, id) => {
    var result = -1;
    products.forEach((product, index) => {
        if (product.id === id) {
            result = index;
        }
    });
    return result;
}

const products = (state = initialState, action) => {
    var index = -1;
    var { id, product } = action;
    switch (action.type) {
        case Types.FETCH_PRODUCTS:
            state = action.products;
            return state;
        case Types.UPDATE_PRODUCTSFT:
            return {
                filter: action.filter,
                data: state.data,
            }
        case Types.IMPORT_PRODUCTS:
            return {
                filter: state.filter,
                insert: action.products.insert,
                update: action.products.update,
                data: action.products.data
            };
        default: return [...state];
    }
};

export default products;