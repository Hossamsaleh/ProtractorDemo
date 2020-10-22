const {When} = require('cucumber')
const {
    enterFirstNumber,
    enterSecondNumber,
    openDemoCalculator, 
    calculate, 
    makePause
} = require('../pages/calculatorDemoPage')
const homepage = require('../pages/homepage')

When('erster step',  async () => {
    homepage.get()
    homepage.enterFirstNumber()
    await openDemoCalculator()
    await enterFirstNumber(12)
    await enterSecondNumber(43)
    await calculate()

});