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

const customer = (state = initialState, action) => {
    switch (action.type) {
        case Types.FETCH_CUSTOMER:
            state = action.customer;
            return state;
        case Types.UPDATE_CUSTOMERFT:
            return {
                filter:action.filter,
                data:state.data
            }
        case Types.IMPORT_CUSTOMER:
            return {
                filter: state.filter,
                insert :action.customer.insert,
                update : action.customer.update,
                data : action.customer.data
            };
        default: return [...state];
    }

};

export default customer;