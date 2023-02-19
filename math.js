/*
*Title: Math library
*Description: A utility library for math functions
*Author: SHAHIDUL ISLAM
*Date: 16 Feb 23
*/

//Math object - Module scaffolding
const math = {}

//Reqr function to generate random index of an array

math.randomNum = function randomNum(min, max){
let minimum = min;
let maximum = max;
minimum = typeof minimum === 'number'? minimum : 0
maximum = typeof maximum === 'number'? maximum : 0
const generatRandomNum = Math.floor(Math.random() * (maximum - minimum + 1) + min)
return generatRandomNum;
}

//Export the module
module.exports = math