

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

    // first place to break the string up into calculations.
    sequence.forEach((el , index,object) => {
        // determine if we are dealing with a number or an operator
        var val = parseFloat(el)
        // if we are dealing with a number
        if( !isNaN(val) ) {
            if(first == null)
            {
                first = val
                return
            }
            if(second == null)
            {
                second = val
            }
        }
        // if we are not a number
        if(isNaN(val)) {
            // check if standard operator
            if(el.match("[\+\-\/\*]")){
                operation = val
            }
            // if entering into a seperate scope. 
            if(el == "(") {
                // if we dont have a operator than set the operator
                if(operation == null) {
                    operation = "*"
                }
                // Scan the rest of the sequence to find this brackets ending and 
                
                
                // splice it off to be used in this sum. 
                var subseq = object.splice()
                second = TotalSum(subseq,true)
            }
        }
        if(first != null && operation != null && second != null) {
            calculations.push(new Calculation(first,operation,second))
            first = second = operation = null
        }
    })
    return res
}