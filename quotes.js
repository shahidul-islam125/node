/*
*Title: Quotes library
*Description: A utility library for generating some quotes.
*Author: SHAHIDUL ISLAM
*Date: 15 Feb 23
*/

//Dependencies
const fs = require('fs')

//Quotes object - Module scaffolding
const quotes = {}

//Reqr function to getting array of quotes
quotes.renderQuotes = function renderQuotes(){

//Genereting txt contents from txt file
const readFileContents = fs.readFileSync('./quotes.txt', 'utf-8')

//Turn the string into an array
const arrayOfQuotes = readFileContents.split(/\r?\n/)

//Return the array
return arrayOfQuotes;
}

//Export this file
module.exports = quotes;
