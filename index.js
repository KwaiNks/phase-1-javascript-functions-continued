function saturdayFun(defValue = "roller-skate"){
    return `This Saturday, I want to ${defValue}!`;
}

function mondayWork(value = "go to the office"){
   return `This Monday, I will ${value}.`;
}

function wrapAdjective(outerValue = "*"){
    return function(innerValue = "special"){
        return `You are ${outerValue}${innerValue}${outerValue}!`;
    }

}