// code your solution here
function saturdayFun(fun = "roller-skate"){
    return `This Saturday, I want to ${fun}!`;
}

function mondayWork(monActivity = "go to the office"){
    return `This Monday, I will ${monActivity}.`
}

function wrapAdjective(adjective = "*"){
    const innerFunction = function(parameter = "special"){
        return `You are ${adjective}${parameter}${adjective}!`
    }
    return innerFunction
}