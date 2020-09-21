import { combineReducers } from 'redux';
import products from './products';
import itemEditing from './itemEditing';
import customer from './customer';
import supliers from './supliers';
import invoices from './invoices'
import login from './login';

const appReducers = combineReducers({
    products,
    itemEditing,
    customer,
    invoices,
    login,
    supliers
});

export default appReducers;