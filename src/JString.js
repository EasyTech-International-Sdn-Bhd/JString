const { isEmpty, isNull, isObject, isSymbol, isUndefined, isString } = require('./JString.varCheck');
const EMPTY = '';
const NAN = 0 / 0;
const reTrim = /^\s+|\s+$/g;
const reIsBadHex = /^[-+]0x[0-9a-f]+$/i;
const reIsBinary = /^0b[01]+$/i;
const reIsOctal = /^0o[0-7]+$/i;
const freeParseInt = parseInt;

class __JString extends String{
    /**
     * Custom String()
     * @param { String } str 
     * @example var str = new JString('your string')
     *          // to check if string is valid
     *          str.isValid()
     *          // to convert json string to json object
     *          var json = new JString('{"key":"11","value":"Hola"}')
     *              json = json.isValid() ? json.toJson() : empty;
     *          // to get a data from json
     *          var key = json.pick('key')
     *          // to convert to Float
     *          var num = new JString('10.20');
     *              num = num.isValid() ? num.toNumber() : 0
     */
    constructor(props) {
        props = isUndefined(props) ? EMPTY : props;
        props = isNull(props) ? EMPTY : props;
        props = props === 'null' ? EMPTY : props;
        props = props === 'undefined' ? EMPTY : props;
        props = isNaN(props) === false ? String(props) : props;
        super(props);
        this.init = props;
        this.str = props || EMPTY;
        this.json = null;
    }

    isValid(){
        return isString(this.str) && !isUndefined(this.str) && !isEmpty(this.str);
    }

    isEmail(){
        var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(String(this.str).toLowerCase());
    }

    isFormSafe(){
        var format = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/;
        return !(format.test(this.str));
    }

    isPassword(minimumCharLen = 5){
        return (!(/[</\(^*|\.,'":;)>]/.test(this.str))) &&
                this.str.length > (minimumCharLen-1);
    }

    isNumber(){
        return isNaN(this.str) === false;
    }

    toNumber(){
        var a = this.str;
        if(isSymbol(a)){
            return NAN;
        }
        if(isObject(a)){
            const other = typeof a.valueOf === 'function' ? a.valueOf() : value;
            a = isObject(other) ? `${other}` : other;
        }
        if(isString(a)){
            return a === 0 ? a : +a;
        }
        a = a.replace(reTrim, '');
        const isBinary = reIsBinary.test(a);
        return (isBinary || reIsOctal.test(a))
            ? freeParseInt(value.slice(2), isBinary ? 2 : 8)
            : (reIsBadHex.test(a) ? NAN : +a);
    }

    isJson(){
        if(!this.isValid()){
            return false;
        }
        if(this.str == 0 || this.toNumber() > 0){
            return false;
        }
        try {
            this.json = JSON.parse(this.str);
            return this;
        } catch (error) {
            this.json = null;
            return false;
        }
    }

    inCurrency(currency = 'RM') {
        var num = this.toNumber();
        return currency + num.toFixed(2).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')
    }

    rollback(){
        this.str = this.init;
        return this;
    }

    replaceInfinity(find = '', replace = ''){
        var re  = new RegExp(find, 'g');
        this.str = this.str.replace(re, replace);
        return this;
    }

    removeSpecialChar(){
        this.str = this.replaceInfinity(" ","");
        this.str = this.str.replace(/[`~!@#$%^&*()_|+\-=?;:'",.<>\{\}\[\]\\\/]/gi, '');
        return this;
    }

    removeLastChar(character = ''){
        this.str = String(this.str).trim(); 
        if(this.str.length > 0){
            let lastChar = this.str.substr(this.str.length - 1);
            if(character && lastChar === character){
                this.str = this.str.substr(0,this.str.length - 1);
            }else{
                this.str = this.str.substr(0,this.str.length - 1);
            }
        }
        return this;
    }

    searchDeep(src = ''){
        return !!~this.str.search(new RegExp(src, 'i'));
    }

    toStr(){
        return this.str;
    }

    toJson(){
        if(isNull(this.json)){
            this.isJson();
        }
        return this.json;
    }

    instanceOfJString(){
        return this;
    }

    instanceOfString(){
        return String(this.str);
    }

    isSafe(){
        if(this.isValid()){
            return this.str;
        }
        return EMPTY;
    }

    trimHtml(){
        return this.str.replace(/<\/?[^>]+(>|$)/g, "");
    }
}

module.exports = __JString;