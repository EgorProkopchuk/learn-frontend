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

