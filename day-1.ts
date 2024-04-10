console.log("Day 1 Lecture");

let aString: string;

aString = 'Padawans'

aString = 'update to string';

console.log(aString, 'foo');

let aNum: number;

aNum = 23;

aNum++;

console.log(aNum);

let aBool: boolean = false;

console.log(aBool);

aBool = true;

let aNull = null;

let anObj: object;

anObj = {}; 

let anUndefined: undefined = undefined;

let aNum2 = 2;

let string2 = 'foo';
string2 = 'bar';

let anyVar: any;

anyVar = 'fizz'
anyVar = 23;
anyVar = [];

// ARRAY TYPING

const fooArray = ['abc', 'fizz']
fooArray.push('buzz');

const stringArray: string[] = [];
 
stringArray.push('abc', 'foo')

console.table(stringArray)

const mixedArray: [number, number, string, string] = [23, 34, 'foo', 'bar'];

const nestedArray: [number, string[], string] = [23, ['foo','bar'], 'fizzbuzz'];

const mostlyStringArray: [number, ...string[]]= [23, 'foo','fizz','boo'];

// Functions

// implied return type
function logName(name: string){
    return name.toLowerCase()
}

console.log(logName('fooBar').slice(0,3))


function adder(num1: number, num2: number): number {
    return num1 + num2
}

function logFullName(fName: string, lName: string): void {
    console.log(`${fName} ${lName}`);
}


console.log( ((num: number, num2: number ): number => num + num2)(5, 5));

const arrowAdder = (num: number, num2: number): number => {
    return num + num2;
}


let twoNums: [number, number];

twoNums = [3, 3];

twoNums.push(4);

console.log(twoNums);


// Enums

enum Direction { north, east, south, west };

console.log(Direction.north, ' north');
console.log(Direction.east);
 
enum Size {small='sm', med=2, large=3};

console.log(Size.small);


function takeUnknown(question: unknown){

    if ( typeof(question) == 'string'){
        return question.charAt(0);
    }
    if ( typeof(question) === 'number') return question.toString()
}


function startServer():never{
    while( true ){}
}


let stringOrNum: string | number;

stringOrNum = 23;

stringOrNum = stringOrNum.toString();

console.log(typeof(stringOrNum));


function takeStringOrNum(stringOrNum: string | number){
    console.log(typeof(stringOrNum));
}

takeStringOrNum('23');