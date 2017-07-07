import { autorun, observable, computed, action, toJS } from 'mobx';
import {TotalSum , isOperator} from './Calculator_Util'
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
      state.push(observable([]))
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
  @computed get LastSequenceString():string {
    var seq = this.LastSequence
    var res = ""
    seq.forEach(function(element) {
      if(!isOperator(element) && element != "=") {
        element = Number(element).toLocaleString()
      }
      if(res != "") {
        res += " "
      }
      res += element
    });
    return res
  }

  //
  @computed get LastSequenceSum() {
    var seq = this.LastSequence
    if(seq.length == 0) {
      return ""
    }
    var res = TotalSum(seq.peek())
    return res
  }
@computed get LastSequenceSumDisplay() {
  if(this.LastSequence.length == 0) return ""
  return Number(this.LastSequenceSum).toLocaleString()
}
  // TODO Implement this with the button and change the way +- works in code :Z
  @action flipPosNeg(value: bool) {
    // flip the last value in the sequence if the value has not been summed, otherwise flip the answer.
  }

  // Adds a number to the currently last Sequence
  @action addNumber(value : string) {
    var {arrayPos,indexPos} = this.LastSequencePos()
    var Sequence = this.LastSequence
    var curValue = Sequence[indexPos]
    var MaxNumberLength = 15
    if(Sequence[indexPos] == "=") {
      this.clear()
      Sequence = this.LastSequence
    }
    if(Sequence.length == 0) {
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
    // Max Number length because the math library does weird shit above this for now
    if(curValue.length >= MaxNumberLength) {
      return
    }

    if(isOperator(Sequence[indexPos])){
      // if this isnt a negative operator
      if(Sequence[indexPos] != "-") {
          Sequence.push(value)
          return
      } 
      // since this is a negative Index, check if the previous is also a operator
      if (!isOperator(Sequence[indexPos-1])) {
        // its not a operator so dont make this a negative value instead push it as a seperate element (for visual reasons)
        Sequence.push(value)
        return
      } 
    }
    
    Sequence[indexPos] += value
    
  }
  // Removes one element from the Sequence
  @action backspace() {
    var {arrayPos,indexPos} = this.LastSequencePos()
    var Sequence = this.LastSequence
    var curValue = Sequence[indexPos]
    if(Sequence.length == 0) {
      return
    }
    if(curValue == "=") {
      this.clear()
      return
    }
    curValue = curValue.slice(0,-1)
    Sequence[indexPos] = curValue
    if(curValue.length == 0) {
      Sequence.pop()
    }
  }
  // Finishes the sequence by placing a '=' at the end
  @action finish() {
    var Sequence = this.LastSequence
    if( Sequence.slice(-1) != "=") {
      Sequence.push("=")
    }
  }

  // Pushes the state to a new Sequence 
  @action clear() {
    state.push(observable([]))
  }

  // Adds a operation to the last sequence
  @action addOperation(Operation : string) {
    var {arrayPos,indexPos} = this.LastSequencePos()
    var Sequence = this.LastSequence
    var curValue = Sequence[indexPos]
    var previousValue = Sequence[indexPos-1]
    
    // only a subset of operations are valid to start a sequence
    if (indexPos == -1 ) {
      if(Operation != '-') {
        Sequence.push(Operation)
      }
      return
    }
    // check if the sequence is finished but we want to continue it on.
    if(curValue == "=") {
      var value = toJS(this.LastSequenceSum).toString()
      this.clear()
      Sequence = this.LastSequence
      Sequence.push(value)
      Sequence.push(Operation)
      console.log(Sequence)
      return
    }
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
const state = window.state = observable([])
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
// Brackets
ke.pressed.on("(",() => CalcStore.addOperation("("))
ke.pressed.on(")",() => CalcStore.addOperation(")"))
ke.pressed.on("[",() => CalcStore.addOperation("("))
ke.pressed.on("]",() => CalcStore.addOperation(")"))
ke.pressed.on("{",() => CalcStore.addOperation("("))
ke.pressed.on("}",() => CalcStore.addOperation(")"))

// Finish
ke.pressed.on("enter",() => CalcStore.finish())

// Delete keys
ke.down.on("backspace",() => CalcStore.backspace())
ke.pressed.on("delete",() => CalcStore.backspace())
export default CalcStore;
