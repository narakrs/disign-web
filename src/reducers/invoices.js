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

const invoices = (state = initialState, action) => {
    switch (action.type) {
        case Types.FETCH_INVOICES:
            state = action.invoices;
            return state;
        case Types.UPDATE_INVOICESFT:
            return {
                filter:action.filter,
                data:state.data
            }
        case Types.IMPORT_INVOICES:
            return {
                filter: state.filter,
                insert : action.invoices.insert,
                update : action.invoices.update,
                data : action.invoices.data
            };
        default: return [...state];
    }

};

export default invoices;