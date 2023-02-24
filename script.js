// task 1

// for (let i = 1; i <= 100; i++) {
//     console.log(i);
// }

// task 2

// for (let i = 11; i <= 33; i++) {
//     console.log(i);
// }

// task 3

// for (let i = 0; i <= 100; i += 2) {
//     console.log(i);
// }

// task 4

// for (let i = 1; i <= 99; i += 2) {
//     console.log(i);
// }

// task 5

// for (let i = 100; i >= 0; i--) {
//     console.log(i);
// }

//task 6

// let arr = ['a', 'b', 'c', 'd', 'e'];
//
// for (let element of arr) {
//     console.log(element);
// }

// task 7

// let obj = {x: 1, y: 2, z: 3};
//
// for (let key in obj) {
//     console.log(key);
// }

// task 8

// let obj = {x: 1, y: 2, z: 3};
//
// for (let key in obj) {
//     console.log(obj[key]);
// }

// task 9

// let i = 1;
//
// while (i <= 100) {
//     console.log(i);
//     i++;
// }

// task 10

// let i = 11;
//
// while (i <= 33) {
//     console.log(i);
//     i++;
// }

// task 11

// function multiplyByThree(num) {
//     let counter = 0;
//
//     while (num <= 1000) {
//         counter++;
//         num *= 3;
//     }
//     console.log(num);
//     console.log(counter)
// }
//
// multiplyByThree(20);

// task 12

// let arr = ['a', 'b', 'c', 'd', 'e'];
//
// for (let i = 0; i < arr.length; i++) {
//     console.log(arr[i]);
// }

// task 13

// let arr = ['a', 'b', 'c', 'd', 'e'];
//
// for (let i = 1; i < arr.length - 1; i++) {
//     console.log(arr[i]);
// }

// task 14

// let arr = ['a', 'b', 'c', 'd', 'e'];
//
// for (let i = arr.length - 1; i >= 0; i--) {
//     console.log(arr[i]);
// }

// task 15

// let arr = ['a', 'b', 'c', 'd', 'e'];
//
// for (let i = 0; i < arr.length; i++) {
//     console.log(arr[i]);
// }

// task 16

// let arr = [2, 5, 9, 15, 1, 4];
//
// for (let elem of arr) {
//     if (elem > 3 && elem < 10) {
//         console.log(elem);
//     }
// }

// task 17

// let obj = {a: 1, b: 2, c: 3, d: 4, e: 5};
//
// for (let key in obj) {
//     if (obj[key] % 2 === 1) {
//         console.log(obj[key]);
//     }
// }

// task 18

// let res = 0
//
// for (let i = 2; i <= 100; i += 2) {
//     res += i;
// }
//
// console.log(res);

// task 19

// let res = 0;
//
// for (let i = 1; i <= 99; i += 2) {
//     res += i;
// }
//
// console.log(res);

// task 20

// let res = 1;
//
// for (let i = 1; i <= 20; i++) {
//     res *= i;
// }
//
// console.log(res);

// task 21

// let arr = [2, 5, 9, 3, 1, 4];
// let res = 0;
//
// for (let elem of arr) {
//     res += elem;
// }
//
// console.log(res);

// task 22

// let arr = [2, 5, 9, 3, 1, 4];
// let res = 0;
//
// for (let elem of arr) {
//     if (elem % 2 ===0) {
//         res += elem;
//     }
// }
//
// console.log(res);

// task 23

// let arr = [2, 5, 9, 3, 1, 4];
// let res = 0;
//
// for (let elem of arr) {
//     res += (elem ** 2);
// }
//
// console.log(res);

// task 24

// let arr = [2, 5, 9, 3, 1, 4];
// let res = 1;
//
// for (let i = 0; i < arr.length; i++) {
//     res *= arr[i];
// }
//
// console.log(res);

// task 25

// let str = '';
//
// for (let i = 0; i < 5; i++) {
//     str += '-';
// }
//
// console.log(str);

// task 26

// let str = '';
//
// for (let i = 1; i < 10; i++) {
//     str += i;
// }
//
// console.log(str);

// task 27

// let str = '';
//
// for (let i = 9; i > 0; i--) {
//     str += i;
// }
//
// console.log(str);

// task 28

// let str = '';
//
// for (let i = 1; i < 10; i++) {
//     str += ('-'+ i);
// }
//
// console.log(str);

// task 29

// for (let i = 10; i <= 1000; i++) {
//     let str = String(i);
//     console.log(str[0]);
// }

// task 30

// for (let i = 10; i <= 1000; i++) {
//     let str = String(i);
//     let sum = Number(str[0]) + Number(str[1]);
//     console.log(sum);
// }

// task 31

// for (let i = 10; i <= 1000; i++) {
//     let str = String(i);
//     if (+str[0] === 1) {
//         console.log(+str);
//     }
// }

// task 32

// for (let i = 10; i <= 1000; i++) {
//     let str = String(i);
//
//     if (+str[0] + +str[1] === 5) {
//         console.log(str);
//     }
//
// }

// task 33

// let arr = [1, 56, 12, 65, 9, 30, 84, 61, 19, 0, 36, 75, 25, 97, 159];
//
// for (let elem of arr) {
//     if (elem !== 0) {
//         console.log(elem);
//     } else {
//         console.log(elem);
//         break;
//     }
// }

// task 34

// let arr = [32, 16, 9, 69, 10, 5, 48, -3, 7, 40, -10, 6, 3, -18, 1, 8];
// let sum = 0;
//
// for (let elem of arr) {
//     if (elem > 0) {
//         sum += elem;
//     } else {
//         break;
//     }
// }
//
// console.log(sum);

// task 35

// let arr = [38, 78, 26, -3, 9, 17, 25, 3, 8, 0, 15, 26];
//
// for (let elem of arr) {
//     if (elem === 3) {
//         console.log(arr.indexOf(elem));
//         break;
//     }
// }

// task 36

// let result = 0
// let count = 1;
//
// while(result <= 100) {
//     result += count;
//     count++;
// }
//
// console.log(count - 1);

// task 37

// for (let i = 1; i <= 9; i++) {
//     for (let j = 1; j <= 3; j++) {
//         document.write(i);
//     }
// }

// task 38

// let s = '';
//
// for (let i = 1; i <= 3; i++) {
//     for ( let j = 1; j <= 3; j++){
//         s += ` ${i}${j}`;
//     }
// }
// let res = s.trim();
// console.log(res);

// task 39

// let a = [];
//
// for (let i = 1; i <= 3; i++) {
//     for ( let j = 1; j <= 3; j++){
//         for (let k = 1; k <= 3; k++) {
//             a.push(`${i}${j}${k}`);
//         }
//     }
// }
//
// let str = a.join(' ');
//
// console.log(str);

// task 40

// let arr = [];
//
// for (let i = 1; i <= 10; i++) {
//     arr.push(i);
// }
//
// console.log(arr);

// task 41

// let arr = [];
//
// for (let i = 1; i <= 10; i++) {
//     arr.push('x');
// }
//
// console.log(arr);

// task 42

// let arr1 = [54, 65, -234, 75, -32, 0, 3, -35, -254, 64, -97, 42, -33];
// let arr2 = [];
//
// for (let i = 0; i < arr1.length; i++) {
//     if (arr1[i] > 0) {
//         arr2.push(arr1[i]);
//     }
// }
//
// console.log(arr2);

// task 43

// let arr = [5, 7, 12, 6, 35, 8, 3, 9];
//
// for (let i = 0; i < arr.length; i++) {
//     arr[i] = arr[i] ** 2;
// }
//
// console.log(arr);

// task 44

// let arr = [5, 8, 2, 3245, 4, 65, 654, 885, 22, 6];
//
// for (let i = 0; i < arr.length; i++) {
//     arr[i] = arr[i] - 1;
// }
//
// console.log(arr);

// task 45

// let arr = [45, 2, 5, 76, 8, 32, 70, 43, 1];
//
// for (let i = 0; i < arr.length; i++) {
//     arr[i] = arr[i] + 10;
// }
//
// console.log(arr);

// task 46

// let arr1 = ['пн', 'вт', 'ср', 'чт', 'пт', 'сб', 'вс'];
// let arr2 = [1, 2, 3, 4, 5, 6, 7];
//
// let obj = {};
//
// for (let i = 0; i <= 6; i++) {
//     obj[arr1[i]] = arr2[i];
// }
// console.log(obj);

// task 47

// let obj = {a: 1, b: 2, c: 3, d: 4, e: 5};
// let newObj = {};
//
// for (let key in obj) {
//     if (obj[key] % 2 === 0) {
//         newObj[key] = obj[key];
//     }
// }
//
// console.log(newObj);

// task 48

// let obj = {a: 1, b: 2, c: 3, d: 4, e: 5};
// let newObj = {};
//
// for (let key in obj) {
//     let someKey = obj[key];
//     newObj[someKey] = key;
// }
//
// console.log(newObj);

// task 49

// let obj = {x: 1, y: 2, z: 3};
//
// for (let key in obj) {
//     obj[key] = obj[key] ** 2;
// }
//
// console.log(obj);

// task 50
//
// let obj = {x: 1, y: 2, z: 3};
//
// for (let key in obj) {
//     obj[key] = obj[key] + 1;
// }
//
// console.log(obj);

// task 51

// let arr = ['a', 'b', 'c', 'd', 'e'];
// let flag = false;
//
// for (let elem of arr) {
//     if (elem === 'c') {
//         flag === true;
//         break;
//     }
// }
//
// if (flag === true) {
//     console.log('+++');
// } else {
//     console.log('---')
// }

// task 52

// function isPrime (num) {
//     if (num === 1 || num <= 0) {
//         return false;
//     } else {
//         for(let i = 2; i < num; i++) {
//             if(num % i === 0) {
//                 return false;
//             }
//         }
//         return true;
//     }
// }

// task 53

// let arr = [1, 2, 3, 2, 4, 3, 5, 6, 3, 2, 3];
// let counter = 0;
//
// for (let elem of arr) {
//     if (elem === 3) {
//         counter++;
//     }
// }
//
// console.log(counter);

// task 54

// let arr = [1, 2, 3, 2, 4, 3, 5, 6, 3, 2, 3];
// let count3 = 0;
// let count2 = 0;
//
// for (let elem of arr) {
//     if (elem === 3) {
//         count3++;
//     }
//     if (elem === 2) {
//         count2++;
//     }
// }
//
// console.log(count3);
// console.log(count2);

// task 55

// let str = 'ifqhei vqrhoegb ioeoimf';
// let counter = {};
// let arr = Array.from(str);
//
// for (let elem of arr) {
//     if (counter[elem] === undefined) {
//         counter[elem] = 1;
//     } else {
//         counter[elem]++;
//     }
// }
//
// console.log(counter);

// task 56
//
// let str = 'kqenvjib vjewib jvewiwrot';
// let counter = {};
// let arr = str.split('');
//
// for (let elem of arr) {
//     if (counter[elem] === undefined) {
//         counter[elem] = 1;
//     } else {
//         counter[elem]++;
//     }
// }
//
// console.log(counter);

// task 57

// let arr = [4, 7, 9, 1, 7, 3, 8, 2, 6];
// for (let i = 0; i < arr.length - 1; i++) {
//     console.log(arr[i + 1]);
// }

// task 58

// let arr = [4, 7, 9, 1, 7, 3, 8, 2, 6];
//
// for (let i = 0; i < arr.length - 1; i++) {
//     console.log(arr[i] + arr[i + 1]);
// }

// task 59

// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
//
// for (let i = 2; i <= arr.length; i++) {
//     console.log(`${arr[i - 2]} ${arr[i - 1]}`);
// }

// task 60

// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
//
// for (let i = 2; i < arr.length; i++) {
//     let sum = arr[i - 2] + arr[i - 1] + arr[i];
//     console.log(sum);
// }

// task 61
// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
//
// for (let i = 1; i < arr.length - 1; i++) {
//     let sum = arr[i - 1] + arr[i] + arr[i + 1];
//     console.log(sum);
// }

// task 62

// let arr = [10, 20, 30, 40, 21, 32, 51];
// let sum = 0;
//
// for (let elem of arr) {
//     let str = String(elem);
//     if (str[0] === '1' || str[0] === '2') {
//         sum += Number(str);
//     }
// }
//
// console.log(sum);

// task 63

// let obj = {a: 10, b: 20, c: 30, d: 40, e: 50};
// let sum = 0;
//
// for (let elem in obj) {
//     let toStr = String(obj[elem]);
//     if (toStr[0] === '1' || toStr[0] === '2') {
//         sum += Number(toStr);
//     }
// }
//
// console.log(sum);

// task 64

// for (let i = 10; i >= 0; i--) {
//     console.log(i);
// }

// task 65

// let i = 0;
//
// while (i <= 10) {
//     console.log(i);
//     i++;
// }

// task 66

// let res = 0;
//
// for (let i = 1; i <= 10; i++) {
//     res += i;
// }
//
// console.log(res);

// task 67

// let res = 1;
//
// for (let i = 1; i <= 10; i++) {
//     res *= i;
// }
//
// console.log(res);

// task 68

// let arr = ['1', '2', '3', '4', '5'];
// let sum = 0;
//
// for (let elem of arr) {
//     sum += +elem;
// }
//
// console.log(sum); // должно вывести 15

// task 69

// let arr = ['1', '2', '3', '4', '5'];
// let sum = 0;
//
// for (let elem of arr) {
//     sum += +elem;
// }
//
// console.log(sum); // должно вывести 15

// task 70

// let arr = ['1', '2', '3', '4', '5'];
// let sum = 0;
//
// for (let i = 0; i < arr.length; i++) {
//     sum += +arr[i];
// }
//
// console.log(sum);

// task 71

// let arr = ['1', '2', '3', '4', '5'];
// let sum = 0;
//
// for (let i = 0; i < arr.length; i++) {
//     sum += +arr[i];
// }
//
// console.log(sum);

// task 72

// let arr = [1, 2, 3, 4, 5];
// let arr2 = [];
//
// for (let elem of arr) {
//     let square = elem ** 2;
//     arr2.push(square);
// }
//
// console.log(arr2);

// task 73

// let arr = [];
//
// for (let i = 1; i <= 5; i++) {
//     arr.push(i);
// }
//
// console.log(arr);

// task 74

// let obj = {a: 1, b: 2, c: 3};
// let sum = 0;
//
// for (let elem in obj) {
//     sum += obj[elem];
// }
//
// console.log(sum);

// task 75

// let obj = {a: 1, b: 2, c: 3};
// let sum = 0;
//
// for (let key in obj) {
//     sum += obj[key];
// }
//
// console.log(sum);

// task 76

// let arr = [1, 2, 3, 4, 5];
// let res;
//
// for (let elem of arr) {
//     if (elem === 3) {
//         res = '+++';
//         break;
//     } else {
//         res = '---';
//     }
// }
//
// console.log(res);

// task 77

// let arr = [];
//
// for (let i = 1; i <= 5; i++) {
//     arr.push(i);
// }
//
// console.log(arr);

// task 78

// let arr = [1, 2, 4, 5];
// let res = false;
//
// for (let elem of arr) {
//     if (elem === 3) {
//         res = true;
//         break;
//     }
// }
//
// console.log(res);

// task 79

// let arr = [1, 2, 3, 4, 5];
//
// for (let elem of arr) {
//     if (elem % 2 === 0) {
//         console.log(elem);
//     }
// }

// task 80

// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// let res = [];
//
// for (let elem of arr) {
//     if (elem % 2 !== 0) {
//         res.push(elem);
//     }
// }
//
// console.log(res);