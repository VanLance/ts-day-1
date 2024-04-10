console.log("Day 1 Lecture");
var aString;
aString = 'Padawans';
aString = 'update to string';
console.log(aString, 'foo');
var aNum;
aNum = 23;
aNum++;
console.log(aNum);
var aBool = false;
console.log(aBool);
aBool = true;
var aNull = null;
var anObj;
anObj = {};
var anUndefined = undefined;
var aNum2 = 2;
var string2 = 'foo';
string2 = 'bar';
var anyVar;
anyVar = 'fizz';
anyVar = 23;
anyVar = [];
// ARRAY TYPING
var fooArray = ['abc', 'fizz'];
fooArray.push('buzz');
var stringArray = [];
stringArray.push('abc', 'foo');
console.table(stringArray);
var mixedArray = [23, 34, 'foo', 'bar'];
var nestedArray = [23, ['foo', 'bar'], 'fizzbuzz'];
var mostlyStringArray = [23, 'foo', 'fizz', 'boo'];
// Functions
// implied return type
function logName(name) {
    return name.toLowerCase();
}
console.log(logName('fooBar').slice(0, 3));
function adder(num1, num2) {
    return num1 + num2;
}
function logFullName(fName, lName) {
    console.log("".concat(fName, " ").concat(lName));
}
console.log((function (num, num2) { return num + num2; })(5, 5));
var arrowAdder = function (num, num2) {
    return num + num2;
};
var twoNums;
twoNums = [3, 3];
twoNums.push(4);
console.log(twoNums);
// Enums
var Direction;
(function (Direction) {
    Direction[Direction["north"] = 0] = "north";
    Direction[Direction["east"] = 1] = "east";
    Direction[Direction["south"] = 2] = "south";
    Direction[Direction["west"] = 3] = "west";
})(Direction || (Direction = {}));
;
console.log(Direction.north, ' north');
console.log(Direction.east);
var Size;
(function (Size) {
    Size["small"] = "sm";
    Size[Size["med"] = 2] = "med";
    Size[Size["large"] = 3] = "large";
})(Size || (Size = {}));
;
console.log(Size.small);
function takeUnknown(question) {
    if (typeof (question) == 'string') {
        return question.charAt(0);
    }
    if (typeof (question) === 'number')
        return question.toString();
}
function startServer() {
    while (true) { }
}
var stringOrNum;
stringOrNum = 23;
stringOrNum = stringOrNum.toString();
console.log(typeof (stringOrNum));
function takeStringOrNum(stringOrNum) {
    console.log(typeof (stringOrNum));
}
takeStringOrNum('23');
