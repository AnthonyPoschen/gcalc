var math = require('mathjs')

function Calculation(first,operation,second,result = null) {
    this.first = first
    this.operation = operation
    this.second = second
    this.result = result
}


export function TotalSum(sequence, recursion = false) {

    var res = 0
    var calculations = []
    var first , second , operation = null

    var str = sequence.join().replace(/[^-()\d/*+.]/g, '')

    // check we dont end in a operator cause eval will go nuts
    while(isOperator(str.slice(-1))) {
        str = str.substr(0,str.length - 1)
    }

    // count open & closed brackets and add any missing closing brackets to the end of the calculation
    var openbracket = (str.match(/\(/g) || []).length - (str.match(/\)/g) || []).length
    while(openbracket > 0) {
        openbracket--
        str += ")"
    }
    
    res = math.eval(str)
    //res = cleanEval(str)
    if (res == "Infinity") {
        return ""
    }
    return res
}
function cleanEval(fn) {
  return new Function('return ' + fn)();
}

export function isOperator(v): boolean {
  var operators = ["+","-","/","*","(",")","^","%"]
  return operators.find((o) => {return v == o}) != undefined ? true:false 
}