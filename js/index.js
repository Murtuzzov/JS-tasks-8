// ЗАДАЧА 1 | найти сумму положительных
// элементов в массиве
// const numbersArr = [1,-2,3,-4,5];
// let sum = 0;
// for(let i = 0; i<numbersArr.length; i+=1){
//  if(numbersArr[i] < 0){
//    continue;
//  }else {
//    sum+=numbersArr[i];
//  }
// }
// console.log(sum)
///////////////////////////////////////////////////////////////////////////////////
// ЗАДАЧА No2 | найти количество
// отрицательных элементов в массиве
// const numbersArr = [1,2,-3,-4,5,6,-7,8]
// let negativeNum = 0;

// for ( let i = 0; i<numbersArr.length; i+=1){
//  if(numbersArr[i] < 0){
//    negativeNum+=1
//  }
// }
// console.log(negativeNum)
////////////////////////////////////////////////////////////////////////////////////
//ЗАДАЧА No3 | отфильтровать массив,
//оставив только уникальные значения
//const numbersArr = [1,2,2,4]
//const newNumArr = []
//for(let i = 0; i<numbersArr.length; i+=1){
//  if(!newNumArr.includes(numbersArr[i])){
//    newNumArr.push(numbersArr[i])
//  }
//}
//console.log(newNumArr)
////////////////////////////////////////////////////////////////////////////////////
//ЗАДАЧА No4 | найти сумму элементов
//на четных позициях в массиве
//индекс начинается с нуля
//const numbersArr = [1,2,3,4,5,6,7,8];
//let sum=0;
//for(let i = 0; i<numbersArr.length; i+=1){
//  if(numbersArr[i] % 2 !==0 ){
//    continue;
//  } else {
//    sum+=numbersArr[i]
//  }
//}
//console.log(sum)
/////////////////////////////////////////////////////////////////////////////////
//ЗАДАЧА No5 | проверить, является ли каждый
//элемент массива целым числом
//const numbersArr = [4, -9, 2.5, 12, -1];
//for (let i = 0; i < numbersArr.length; i += 1) {
//  if (numbersArr[i] % 1 === 0) {
//    console.log(numbersArr[i] + " является целым числом.");
//  } else {
//    console.log(numbersArr[i] + " не является целым числом.");
//  }
//}
///////////////////////////////////////////////////////////////////////////////
//ЗАДАЧА No6 | найти индекс первого
//отрицательного элемента в массиве
//const numbersArr = [3,9,5,-7,6];
//let index = 0;
//for(let i = 0; i<numbersArr.length; i+=1){
//  if(numbersArr[i]<0){
//   index = i
//  }
//}
//console.log(Отрицательный элемент массива находится на ${index} индексе)
////////////////////////////////////////////////////////////////////////////////////
//ЗАДАЧА No7 | Создать новый массив
//содержащий элементы, преобразованные 
//в верхний регистр(если они строкового
//типа)
//const stringArr = ["apple", "banana", "kiwi"];
//const newStringArr = []
//for(let i = 0; i<stringArr.length; i+=1){
//  if(typeof stringArr[i] === "string"){
//   newStringArr.push(stringArr[i].toUpperCase());
//  } else {
//   continue;
//  }
//}
//console.log(newStringArr);
/////////////////////////////////////////////////////////////////////////////////////
//ЗАДАЧА No8 | проверить, содержит ли
//массив только уникальные значения 
//(без дубликатов)
//const numbersArr =[2,4,7,,2,1,5,8]
//const uniqueElement = [] 
//for (let i = 0; i<numbersArr.length; i+=1){
//  if(!uniqueElement.includes(numbersArr[i])){
//    uniqueElement.push(numbersArr[i])
//  }
//} if (uniqueElement.length === numbersArr.length) {
//  console.log("Массив хранит только уникальные значения");
//} else {
//  console.log("В массиве есть неуникальные значения");
//}
/////////////////////////////////////////////////////////////////////////////////////////
//ЗАДАЧА No9 |проверить, содержит ли массив
//хотя бы одно отриц.значение
//const numbersArr = [1, 2, 3, 4];
//let negativeNum = false;
//for (let i = 0; i < numbersArr.length; i += 1) {
//  if (numbersArr[i] < 0) {
//    negativeNum = true;
//    }
//}

//if (negativeNum) {
//  console.log("Массив содержит отрицательное значение");
//} else {
//  console.log("Массив не содержит отрицательных значений");
//}
///////////////////////////////////////////////////////////////////////////////////////////
//ЗАДАЧА No10 | найти сумму элементов, 
//расположенных до определённого индекса 
//в массиве 
//const numbersArr = [1,4,3,8,6]
//let sum = 0;
//for(let i = 0; i<numbersArr[2]; i+=1){
//  sum+=numbersArr[i]
//}
//console.log(sum)
///////////////////////////////////////////////////////////////////////////////////////////
//ЗАДАЧА No11 | проверить, содержит ли
//массив только числовые значения
//const mixedArr = ["lemon", 2, "kiwi", 4]
//let notNumber = false
//for(let i = 0; i < mixedArr.length; i+=1){
//  if(typeof mixedArr[i] === "string"){
//    notNumber = true
//    }
//}
//if(!notNumber){
//  console.log("Массив содержит только числовые значения")
//} else {
//  console.log("Массив содержит не только числовые значения")
//}
////////////////////////////////////////////////////////////////////////////////////////////////
//ЗАДАЧА No12 | Создать новый массив,
//содержащий элементы удовлетворяющие
//определённому условию(например больше 10)
//const numbersArr = [1,2,3,4,5,6,7,8]
//const newNumArr =[]
//for(let i = 0; i < numbersArr.length; i+=1){
//  if(numbersArr[i] < 5){
//    newNumArr.push(numbersArr[i])
//  }else {
//    continue;
//  }
//}
//console.log(newNumArr)
/////////////////////////////////////////////////////////////////////////////////////////////////
//ЗАДАЧА No13 | найти индекс последнего 
//элемента в массиве, равного 
//определённому значению 
//Не смог решить 
///////////////////////////////////////////////////////////////////////////////////////////////
//ЗАДАЧА No14 | проверить, содержит 
//ли массив хотя бы одно положительное 
//значение
//const numbersArr = [-1, -2, -3, 4, -5];
//let hasNegativeNum = true;
//for(let i = 0; i < numbersArr.length; i += 1) {
//  if(numbersArr[i] > 0) {
//    hasNegativeNum = false;  
//}
//} 
//if(hasNegativeNum) {
//  console.log("Массив не содержит положительных значений");
//} else {
//  console.log("Массив содержит положительное значение");
//}
/////////////////////////////////////////////////////////////////////////////////////
//ЗАДАЧА No15 | преобразовать массив 
//в объект, где индексы массива станут
//ключами объекта 
//const fruits = ["banana", "kiwi", "apple", "orange", "lemon"]
//const fruitsObj = {}
//for(let i = 0; i<fruits.length; i+=1){
//fruitsObj[[i]] = fruits[i];
//}
//console.log(fruitsObj)
/////////////////////////////////////////////////////////////////////////////////////
//ЗАДАЧА No17 | удалить все элементы массива 
//кроме тех, которые кратны 3(трём)
//const numbersArr =[1,2,3,4,5,6,7,8,9,10]
//let newNumArr = []
//for(let i = 0; i < numbersArr.length; i+=1){
//  if(numbersArr[i] % 3 === 0){
//    newNumArr.push(numbersArr[i])
// }
//} 
//  console.log(newNumArr)