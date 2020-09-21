import * as Types from './../constants/ActionTypes';
import callApi from './../utils/apiCaller';
//Login
export const actLoginRequest = (email,password) => {
    return dispatch => {
        return callApi('login', 'PUT', {email,password}).then(res => {
            if(res){
                const {data}=res;
                localStorage.setItem('token',data.access_token);
                console.log(data); 
                dispatch(actLogin(1));}
            else{ dispatch(actLogin(0));};
        });
    };
}
export const actLogin = (login) => {
    return {
        type : Types.LOGIN,
        login
    }
}
export const actLogoutRequest= () => { 
    return {
        type : Types.LOGUOT,
        login:3
    }
}
export const actLogout = () => {
    return {
        type : Types.LOGUOT,
        login:3
    }
}
//get All
export const actFetchRequest = (table) => {
    switch (table){
        case 'customer': return dispatch => {
            return callApi(`fetch/${table}`,'GET', null).then(res => {
                dispatch(actFetchCustomer(res.data));
            });
        };
        case 'products': return dispatch => {
            return callApi(`fetch/${table}`, 'GET', null).then(res => {
                dispatch(actFetchProducts(res.data));
            });
        };
        case 'supliers': return dispatch => {
            return callApi(`fetch/${table}`, 'GET', null).then(res => {
                dispatch(actFetchSupliers(res.data));
            });
        };
        case 'invoices': return dispatch => {
            return callApi(`fetch/${table}`, 'GET', null).then(res => {
                dispatch(actFetchInvoices(res.data));
            });
        };
        default: return null
    }
}

//update 
export const actUpdateFTRequest = (key,value,iduser,table) => {
    switch (table){
        case 'customer':  return dispatch => {
            return callApi(`update/${table}ft`, 'PUT', {key,value,iduser}).then(res => {
                dispatch(actUpdateCustomerFT(res.data));
            });
        };
        case 'products':return dispatch => {
            return callApi(`update/${table}ft`, 'PUT', {key,value,iduser}).then(res => {
                dispatch(actUpdateProductsFT(res.data));
            });
        };
        case 'supliers':return dispatch => {
            return callApi(`update/${table}ft`, 'PUT', {key,value,iduser}).then(res => {
                dispatch(actUpdateSupliersFT(res.data));
            });
        };
        case 'invoices': return dispatch => {
            return callApi(`update/${table}ft`, 'PUT', {key,value,iduser}).then(res => {
                dispatch(actUpdateInvoicesFT(res.data));
            });
        };
        default: return null
    }
}

//import 
export const actImportRequest = (data,table) => {
    switch (table){
        case 'customer':  return dispatch => {
            return callApi(`import/${table}`, 'PUT', {data}).then(res => {
                dispatch(actImportCustomer(res.data));
            });
        };
        case 'products':return dispatch => {
            return callApi(`import/${table}`, 'PUT', {data}).then(res => {
                dispatch(actImportProducts(res.data));
            });
        };
        case 'supliers':return dispatch => {
            return callApi(`import/${table}`, 'PUT', {data}).then(res => {
                dispatch(actImportSupliers(res.data));
            });
        };
        case 'invoices': return dispatch => {
            return callApi(`import/${table}`, 'PUT', {data}).then(res => {
                dispatch(actImportInvoices(res.data));
            });
        };
        default: return null
    }
}
//insert
export const actInsertRequest = (data,table) => {
    switch (table){
        case 'customer':  return dispatch => {
            return callApi(`insert/${table}`, 'PUT', {data}).then(res => {
                dispatch(actImportCustomer(res.data));
            });
        };
        case 'products':return dispatch => {
            return callApi(`insert/${table}`, 'PUT', {data}).then(res => {
                dispatch(actImportProducts(res.data));
            });
        };
        case 'supliers':return dispatch => {
            return callApi(`insert/${table}`, 'PUT', {data}).then(res => {
                dispatch(actImportSupliers(res.data));
            });
        };
        case 'invoices': return dispatch => {
            return callApi(`insert/${table}`, 'PUT', {data}).then(res => {
                dispatch(actImportInvoices(res.data));
            });
        };
        default: return null
    }
}

//customer^^^^^^
export const actFetchCustomer = (customer) => {
    return {
        type : Types.FETCH_CUSTOMER,
        customer
    }
}
export const actImportCustomer = (customer) => {
    console.log('TTT',customer);
    return {
        type : Types.IMPORT_CUSTOMER,
        customer
    }
}
export const actUpdateCustomerFT = (filter) => {
    console.log('TTT',filter);
    return {
        type : Types.UPDATE_CUSTOMERFT,
        filter
    }
}
//Products^^^^^

export const actFetchProducts = (products) => {
  
    return {
        type : Types.FETCH_PRODUCTS,
        products
    }
}
export const actUpdateProductsFT = (filter) => {
    console.log('TTT',filter);
    return {
        type : Types.UPDATE_PRODUCTSFT,
        filter
    }
}

export const actImportProducts = (products) => {
    console.log('TTT',products);
    return {
        type : Types.IMPORT_PRODUCTS,
        products
    }
}
//supplers 
export const actFetchSupliers = (supliers) => {
    console.log('TTT',supliers);
    return {
        type : Types.FETCH_SUPLIERS,
        supliers
    }
}

export const actUpdateSupliersFT = (filter) => {
    console.log('TTT',filter);
    return {
        type : Types.UPDATE_SUPLIERSFT,
        filter
    }
}
export const actImportSupliers = (supliers) => {
    console.log('slT',supliers);
    return {
        type : Types.IMPORT_SUPLIERS,
        supliers
    }
}
//invoices
export const actFetchInvoices = (invoices) => {
    console.log('TTT',invoices);
    return {
        type : Types.FETCH_INVOICES,
        invoices
    }
}

export const actUpdateInvoicesFT = (filter) => {
    console.log('TTT',filter);
    return {
        type : Types.UPDATE_INVOICESFT,
        filter
    }
}
export const actImportInvoices = (invoices) => {
    console.log('slT',invoices);
    return {
        type : Types.IMPORT_INVOICES,
        invoices
    }
}
