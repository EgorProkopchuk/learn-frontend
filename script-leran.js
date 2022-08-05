for (let i = 0; i < 3; i++) {
    console.log(i);
    for (let j = 0; j < 3; j++){
        console.log(j);
    }
}

// *
// **
// ***
// ****
// *****
// ******


// let result = '';
// const lenght = 7;

// for (let i = 1; i < lenght; i++){
//     for (let j = 0; j < i; j++){
//         result += '*';
//     }
//     result += '\n';
// }

// console.log(result);

// function secondTask() {
//     for (let i = 20; i => 10; i--){
//         if (i === 13) break;
//     }
//     console.log(i);
// }

// secondTask();

// function fifthTask() {
//     const arrayOfNumbers = [];

//     for (let i = 5; i < 11; i++) {
//         arrayOfNumbers[i - 5] = i;
//     }

//     console.log(arrayOfNumbers);
//     return arrayOfNumbers;
// }

// fifthTask();

// function secondTask() {
//     // Значения массива менять нельзя, тут он проверяется автоматически именно на эти значения
//     const data = [5, 10, 'Shopping', 20, 'Homework'];
    
//     for (let i = 0; i < data.length; i++){
//         if (typeof(data[i]) === 'number') {
//             data[i] = data[i]*2;
//         }else{
//             data[i] = `${data[i]} - done`;
//         }
//     }
//     console.log(data);
//     return data;
// }

// secondTask();

// console.log(typeof(10));

// function thirdTask() {
//     // Значения массива менять нельзя, тут он проверяется автоматически именно на эти значения
//     const data = [5, 10, 'Shopping', 20, 'Homework'];
//     const result = [];

//     for (let i = 1; i <= data.length; i++){
//         result[i - 1] = data[data.length - i];
//     }
//     console.log(result);
//     return result;
// }

// thirdTask();

// const lines = 5;
// let result = '';

// for (let i = 0; i <= lines; i++) {
//     for (let j = 0; j < lines - i; j++) {
//         result += " ";
//     }
//     for (let j = 0; j < 2 * i + 1; j++) {
//         result += "1";
//     }
//     result += "\n";
// }

// console.log(result);

// let num = 20;

// function showFirstMessage(text) {
//     console.log(text);
//     num = 10;
//     let a = 5;
// }

// showFirstMessage("Hello world");

// console.log(a);

// function calc(a, b) {
//     return (a + b);
// }

// console.log(calc(4, 3));
// console.log(calc(6, 25));
// console.log(calc(-1, 10));

// function ret() {
//     let num = 50;
//     return num;
// }

// const anotherNum = ret();
// console.log(anotherNum);

// const usdCurr = 28;
// const eurCurr = 23;
// const rubCurr = 50;

// function convert(amount, curr) {
//     console.log(curr * amount);
// }

// convert(500, usdCurr);
// convert(500, eurCurr);

// function getMathResult(a, b) {
//     if (typeof(b) != 'number' || b <= 0) {
//         return a;
//     }

//     let c = '';

//     for (let i = 1; i <= b; i++) {
//         if (i == b) {
//             c += `${a * i}`;
//         }else {
//             c += `${a * i}---`;
//         }
//     }
//     return c;
// }

// const fruit = 'Some fruit';

// console.log(fruit.indexOf('f'));

// const logg = 'Hello world';

// console.log(logg.slice(6, 10));

// console.log(logg.substring(6, 11));

// console.log(logg.substr(6, 5));

// const num = 12.2543;

// console.log(Math.round(num));

// const test = '234.32543px';

// console.log(parseInt(test));

// console.log(parseFloat(test));

