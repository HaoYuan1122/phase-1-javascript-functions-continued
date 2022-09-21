// code your solution here
function saturdayFun(a="roller-skate"){
    return `This Saturday, I want to ${a}!`
}

console.log(saturdayFun())

const mondayWork=function(a="go to the office"){
    return `This Monday, I will ${a}.`
}

function wrapAdjective (a="special"){

    return (function(b="*"){return `You are ${a}${b}${a}!`})

}
console.log(wrapAdjective("%")("a dedicated programmer"))