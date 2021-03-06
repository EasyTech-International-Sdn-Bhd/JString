# JString
<img src="https://easysales.asia/brandlogo/assets/cover.png" style="height:200px;width:100%"/>

Handy tool for Javascript String. Can be used in <br>`NodeJS`<br>`React-Native`<br>`ReactJS` applications.

---

## Table of Contents 

- [Installation](#installation)
- [Methods](#methods)
- [License](#license)

---

## Installation

With `npm`:
```shell
$ npm install @easytech-international-sdn-bhd/jstring
```

With `yarn`:
```shell
$ yarn add @easytech-international-sdn-bhd/jstring
```

## Methods

```
Any string like 'null'/'undefined' will be auto converted to ''
```

| method  | description  | example  |
|---|---|---|
| `trimHtml`  | Remove all the html tags from string  | JString(`<p>Hello World</p>`).trimHtml().toStr(); <br>`output`: Hello World  |
| `searchDeep`  | Search case insensitive in string  | JString('Hello World').searchDeep('w'); <br>`output`: `true`  |
| `searchTokens`  | Search tokens in string(case insensitive)  | JString('Hello World').searchTokens(['w','h']); <br>`output`: `true`  |
| `isSafe`  | Check if the string `isValid` and returns the string if it's valid otherwise empty string  | JString('    ').isSafe(); <br>`output`: ''  |
| `removeLastChar`  | Remove last character from string. This method comes with an optional parameter. If the optional parameter is provided, the function will remove that parameter only  | var ex = JString('abc-com').removeLastChar().toStr(); <br>`output`: 'abc-co'<br><br>ex.removeLastChar('o').toStr();<br>`output`: 'abc-c' |
| `removeFirstChar`  | Remove first char. Same functionality as `removeLastChar` | - |
| `removeSpecialChar`  | Remove all the special or sensitive characters from string  |  JString('abc_d*e/f^g%h%i$j').removeSpecialChar().toStr();<br>`output`: 'abcdefghij' |
| `replaceInfinity`  | Replace all from string based on given parameter  |  JString('Dogge Doggo').replaceInfinity('g','').toStr();<br>`output`: 'Doe Doo' |
| `rollback`  | Rollback changes  | JString('Dogge Doggo').replaceInfinity('g','').rollback();  |
| `inCurrency`  | Convert into currency format  | JString('12345.67').inCurrency('$').toStr();<br>`output`: '$12,345.67'  |
|  `isJson` | Check whether the string is JSON  | JString('{"jstring":"JSON example"}').isJson();<br>`output`: `true`  |
| `toJson`  | Convert string to JSON. Return `null` if not JSON  | JString('{"jstring":"JSON example"}').toJson();  |
| `isNumber`  | Check if the string can be a `number`  | JString('101').isNumber();<br>`output`: `true`  |
| `toNumber`  | Convert string to number  | JString('101').toNumber();<br>`output`: `101`  |
| `isPassword`  | Check if the string is a number with an optional parameter of minimum number of characters  | JString('abc*'o').isPassword();<br>`output`:`false`  |
| `isFormSafe`  | Check if a string is valid for form or database  | JString('ab#c').isFormSafe();<br>`output`:`false`  |
| `isEmail`  | Check if the string is an email  |  JString('abc.com').isEmail();<br>`output`:`false` |
| `isValid` | Check if the string is a valid string  | JString('').isValid();<br>`output`:`false`  |
| `instanceOfJString`  | Return JString instance | - |
| `instanceOfString`  | Return String instance | - |
| `firstUpperCase`  | Convert first character to upper case | JString('aBC').firstUpperCase().toStr();<br>`output`:'ABC' |
| `firstLowerCase`  | Convert first character to lower case | JString('ABC').firstLowerCase().toStr();<br>`output`:'aBC' |
| `lastUpperCase`  | Convert last character to upper case | JString('abc').lastUpperCase().toStr();<br>`output`:'abC' |
| `lastLowerCase`  | Convert last character to lower case | JString('ABC').lastLowerCase().toStr();<br>`output`:'ABc' |
| `isEqual`  | Compare string case sensitive | JString('AC').isEqual('ac');<br>`output`:`false` |
| `isEqualDeep`  | Compare string case insensitive | JString('AC').isEqualDeep('ac');<br>`output`:`true` |
| `toArray`  | Convert string into `array` of char | JString('ADC').toArray();<br>`output`:`['A','D','C']` |
| `walk`  | Loop through string | JString('abcd').walk((char,index)=>{ }); |
| `occurrenceOf`  | Count number of occurance of char | JString('abcdcc').occurrenceOf('c');<br>`output`:`3` |



## TODO

- Allow schema for password validation
- Allow schema for form validation
- Compress & Decompress string
- ~~Allow tokenize search~~

## Author

💻 🛠 Mohammad Julfikar Mahmud

