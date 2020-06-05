const __JString = require('./src/JString');
/**
 * @author Mohammad Julfikar Mahmud
 * @class JString
 * @param {*} your_var The value to process
 * @returns { JString | String } instance
 * @see String
 * @example
 * JString('<p>Hello World</p>').trimHtml().toStr();
 * // => Hello World
 * JString('Hello World').searchDeep('w'); // case insensitive search
 * // => true
 * JString('Hello World').searchTokens(['w','h']); // case insensitive search
 * // => true
 * JString('').isSafe();
 * // => ''
 * var ex = JString('abc.com').removeLastChar().toStr();
 * // => abc.co
 * ex.removeLastChar('r').toStr(); // `r` is not the last charanceter
 * // => abc.co
 * JString('abc_d*e/f^g%h%i$j').removeSpecialChar().toStr();
 * // => abcdefghij
 * var ex = JString('Dogge Doggo').replaceInfinity('g','');
 * // => Doe Doo
 * ex.rollback().toStr();
 * // => Dogge Doggo
 * JString('12345.67').inCurrency('$').toStr();
 * // => $12,345.67
 * var ex = JString('{"jstring":"JSON example"}');
 * ex.isJson() ? ex.toJson() : ex.toStr();
 * // => [object Object]
 * var ex = JString('101');
 * ex.isNumber();
 * // => true
 * ex.toNumber();
 * // => 101
 * JString('abc*'o').isPassword();
 * // => false 
 * JString('ab#c').isFormSafe();
 * // => false
 * JString('abc.com').isEmail();
 * // => false
 * JString('').isValid();
 * // => false
 * JString('abc').firstUpperCase().toStr();
 * // => Abc
 * JString('ABC').firstLowerCase().toStr();
 * // => aBC
 * JString('ABc').lastUpperCase().toStr();
 * // => ABC
 * JString('ABC').lastLowerCase().toStr();
 * // => ABc
 * JString('ABC').isEqual('Abc');
 * // => false
 * JString('ABC').isEqualDeep('Abc');
 * // => true
 */
module.exports = function(your_var){
    return new __JString(your_var);
}