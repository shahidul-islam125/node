/*
*Title: Basic node app Example
*Description: A simple node app that returns random quotes per second interval
*Author: SHAHIDUL ISLAM
*Date: 15 Feb 23

*/

//Dependecies
const quotesFile = require('./quotes')
const mathFile = require('./math')

//App object - module scaffolding
const app = {}

//Configuration
app.config = {
    timeBetweenRandom : 1000
}

//Reqr function definition

app.printAQuote = function printAQuote(){

    //Get a quotes
    const allQuotes = quotesFile.renderQuotes()

    //get the length of quotes array
    const lengthOfArray= allQuotes.length

    //generating random number
    const getRandom = mathFile.randomNum(1, lengthOfArray)

    //select a quote at that position (minus one)
    const selectedQuote = allQuotes[getRandom - 1]

    //print selected quote
    console.log(selectedQuote)
}

//create indefinite loop for getting quotes per second interval
app.indefiniteLoop = function indefiniteLoop(){
    setInterval(app.printAQuote, app.config.timeBetweenRandom)
}

//invokation
app.indefiniteLoop()