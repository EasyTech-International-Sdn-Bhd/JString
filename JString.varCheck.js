const toString = Object.prototype.toString;

function tagType(a){
    if(a === null){
        return a === undefined ? '[object Undefined]' : '[object Null]';
    }
    return toString.call(a);
}

function isSymbol(a){
    const typeOfvar = typeof(a);
    return typeOfvar === 'symbol' ||
            (typeOfvar === 'object' && 
                a !== null && 
                tagType(a) === '[object Symbol]'
            );
}

function isObject(a){
    const typeOfvar = typeof(a);
    return a !== null && 
        (typeOfvar === 'object' || 
        typeOfvar === 'function'); 
}

function isNull(a){
    return a === null;
}

function isUndefined(a){
    return a === undefined;
}

function isEmpty(a){
    const typeOfvar = typeof(a);
    return a === null 
            ||a === undefined 
            ||a === 'undefined'
            ||a === 'null'
            ||a === '[object Undefined]'
            ||a === '[object Null]'
            ||typeOfvar !== 'string'
            || (typeOfvar === 'string' && String(a).trim().length === 0);
}

function isString(a){
    return typeof(a) === 'string';
}

module.exports = {
    isSymbol,
    isObject,
    isNull,
    isUndefined,
    isEmpty,
    isString
}