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

const supliers = (state = initialState, action) => {
    switch (action.type) {
        case Types.FETCH_SUPLIERS:
            state = action.supliers;
            return state;
        case Types.UPDATE_SUPLIERSFT:
            return {
                filter:action.filter,
                data:state.data
            }
        case Types.IMPORT_SUPLIERS:
            return {
                filter: state.filter,
                insert :action.supliers.insert,
                update : action.supliers.update,
                data : action.supliers.data
            };
        default: return [...state];
    }

};

export default supliers;