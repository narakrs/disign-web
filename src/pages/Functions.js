export var findIndex = (dataSearch, key) => {
    var result = -1;
    dataSearch.forEach((product, index) => {
        if (product.key === key) {
            result = index;
        }
    });
    return result;
}