import { autorun, observable, computed, action } from 'mobx';
const ke = require('key-emit')(document);

class CalculatorStore {
  constructor() {
    state.push(observable([]))
  }
  @observable test = "init"

  @action changeAppState(newState) {
    state.replace(newState) 
  }

  @observable LastSequencePos() {
    var ap = state.length - 1 
    
    if(ap == -1) {
      ap = 0
      
      console.log("Adding Array")
      console.log(state)
      state.push(observable([]))
      
      console.log(state)
    }
    var ip = state[ap].length - 1
    if(ip == -1) {
      ip = 0
    }
    return {arrayPos:ap,indexPos:ip}
  }
  // get Last Sequence in the array (active)
  @computed get LastSequence() {
    var seq = state[state.length-1]
    return seq
  }
  @computed get LastSequenceString() {
    var seq = this.LastSequence
    var res = ""
    seq.forEach(function(element) {
      res += element + " "
    });
    return res
  }

  @computed get LastSequenceSum() {
    var seq = this.LastSequence
    var res = 0
    seq.forEach((v) => {
      
    })
    return "N/A"
  }

  // Adds a number to the currently last Sequence
  @action addNumber(value : string) {
    var {arrayPos,indexPos} = this.LastSequencePos()
    var Sequence = this.LastSequence
    if(Sequence[indexPos] === undefined) {
      Sequence.push( value )
      return
    }
    // if a dot make sure one doesnt exist first
    if(value == ".") {
      if(Sequence[indexPos].indexOf(".") != -1) {
        // later make some cool error pop up??
        return
      }
    }
    if(isOperator(Sequence[indexPos])){
      if(Sequence[indexPos] != "-" && isOperator(Sequence[indexPos])) {
        Sequence.push(value)
        return
      }
      if(Sequence[indexPos] == "-" && !isOperator(Sequence[indexPos-1])) {
        Sequence.push(value)
        return
      }
    }
    Sequence[indexPos] += value
    
  }

  // Adds a operation to the last sequence
  @action addOperation(Operation : string) {
    var {arrayPos,indexPos} = this.LastSequencePos()
    var Sequence = this.LastSequence
    // only a subset of operations are valid to start a sequence
    if (indexPos == -1 ) {
      if(Operation != '-') {
        Sequence.push(Operation)
      }
      return
    }
    var curValue = Sequence[indexPos]
    var previousValue = Sequence[indexPos-1]

    // if operator already present. Overwrite checks / handling 
    if(isOperator(curValue)) {
      // these should replace whatever operator is present in the chain
      if(Operation == "/" || Operation == "*" || Operation == "+") {
        // edge case that we are doing something with multiple operators in a row
        // i.e 10 + - and go to replace the - with a times or divide
        while(previousValue != undefined && isOperator(previousValue)){
          indexPos--
          Sequence.pop()
        }
        Sequence[indexPos] = Operation  
        return      
      }
      // if we want to do a minus it should only push if we see a / or * and replace a +
      if(Operation == "-") {
        if(curValue == "/" || curValue == "*") {
          Sequence.push(Operation)
          return
        }
        if(curValue == "-" || curValue == "+") {
          Sequence[indexPos] = Operation
          return
        }
      }
      
    }
    // push this to the back
    Sequence.push(Operation)
    
  }    
}
const state =window.state = observable([])
const CalcStore = window.store = new CalculatorStore();


//----- Register Key Events! -----
ke.pressed.on("0-9", (value) => {
  CalcStore.addNumber(value.toString())
})
// Add dots as numbers because floating point numbers
ke.pressed.on(".", () => {
  CalcStore.addNumber(".")
})
// Operators
ke.pressed.on("+",() => CalcStore.addOperation("+"))
ke.pressed.on("-",() => CalcStore.addOperation("-"))
ke.pressed.on("/",() => CalcStore.addOperation("/"))
ke.pressed.on("*",() => CalcStore.addOperation("*"))

function isOperator(v): boolean {
  var operators = ["+","-","/","*","(",")"]
  return operators.find((o) => {return v == o}) != undefined ? true:false 
}

export default CalcStore;
