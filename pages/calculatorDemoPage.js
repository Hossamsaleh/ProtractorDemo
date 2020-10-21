const { $, Key, browser } = require('protractor')

const _locators = {
    firstNumber: $('input[ng-model="first"]'),
    secondNumber: element(by.model('second')),
    calculate:$('#gobutton')
}

const enterFirstNumber = async (number, next) => {
    await _locators.firstNumber.sendKeys(number)
    await next()
}

const enterSecondNumber = async (number, next) => {
    await _locators.secondNumber.sendKeys(number)
    next()
}

const makePause = async () =>{
    return await browser.sleep(1000)
}

const openDemoCalculator = async ()=>{
    await browser.get('https://juliemr.github.io/protractor-demo/')
}

const calculate = async ()=>{
    await _locators.calculate.click()
}

module.exports = {
 enterFirstNumber,
 enterSecondNumber,
 openDemoCalculator,
 calculate,
 makePause
}