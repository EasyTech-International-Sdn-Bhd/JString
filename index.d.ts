declare interface IJStringResult{
    str: string;
    json: object | Array<string | object | number>;
    init: string;
}
declare interface IJString {
    isValid(): boolean;
    isEmail(): boolean;
    isFormSafe(): boolean;
    isPassword(minimumCharLen?: number): boolean;
    isNumber(): boolean;
    toNumber(): number;
    isJson(): this;
    inCurrency(currency?: string): string;
    rollback(): this;
    replaceInfinity(find: string, replace: string): this;
    removeSpecialChar(): this;
    removeLastChar(character?: string): this;
    removeFirstChar(character?: string): this;
    searchDeep(src: string): boolean;
    searchTokens(tokens: Array<string>,matchAny?: boolean): boolean;
    toJson(): object | Array<string | object | number>;
    instanceOfJString(): this;
    instanceOfString(): String;
    isSafe(): string | Empty;
    trimHtml(): string;
    firstUpperCase(): this;
    firstLowerCase(): this;
    lastUpperCase(): this;
    lastLowerCase(): this;
    isEqual(compare: string): boolean;
    isEqualDeep(compare: string): boolean;
    toArray(): Array<string>;
    walk(callback: Iterator);
    occurrenceOf(piece: string, ignoreCase?: boolean): number;
}
declare type Empty = "";
declare interface Iterator{
    (char: string, index:number): void;
}
declare class JStringClass extends String implements IJStringResult, IJString{
    constructor(props: string);
    str: string;
    json: object | Array<string | Object | number>;
    init: string;
    isValid(): boolean;
    isEmail(): boolean;
    isFormSafe(): boolean;
    isPassword(minimumCharLen?: number): boolean;
    isNumber(): boolean;
    toNumber(): number;
    isJson(): this;
    inCurrency(currency?: string): string;
    rollback(): this;
    replaceInfinity(find: string, replace: string): this;
    removeSpecialChar(): this;
    removeLastChar(character?: string): this;
    removeFirstChar(character?: string): this;
    searchDeep(src: string): boolean;
    searchTokens(tokens: Array<string>,matchAny?: boolean): boolean;
    toJson(): object | Array<string | object | number>;
    instanceOfJString(): this;
    instanceOfString(): String;
    isSafe(): string | Empty;
    trimHtml(): string;
    firstUpperCase(): this;
    firstLowerCase(): this;
    lastUpperCase(): this;
    lastLowerCase(): this;
    isEqual(compare: string): boolean;
    isEqualDeep(compare: string): boolean;
    toArray(): Array<string>;
    walk(callback: Iterator);
    occurrenceOf(piece: string, ignoreCase?: boolean): number;
}

interface JStringContructor {
    new (prop: string): JStringClass;
    (prop?: any): JStringClass;
}

declare var JString: JStringContructor;
export as namespace JString;
export = JString;

