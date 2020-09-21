import * as Types from './../constants/ActionTypes';
var initialState = {tt:3};//tt:3

var findIndex = (products, id) => {
    var result = -1;
    products.forEach((product, index) => {
        if (product.id === id) {
            result = index;
        }
    });
    return result;
}

const login = (state = initialState, action) => {
    switch (action.type) {
        case Types.LOGIN:
            return {
                tt:action.login
            };
        case Types.LOGUOT:
            return{
                tt:action.login
            };
        default: return state;
    }
};

export default login;