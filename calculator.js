var firstTerm = 0;
var firstTermExists = false;
var operator = 0;
var previousTermWasNumber = false;

function toggleOnOff() {
  if(document.querySelector("#display").value == "OFF") {
    document.querySelector("#display").value = "0";
  }else{
    document.querySelector("#display").value = "OFF";
  }
}

document.querySelector(".on").onclick = function () {
  toggleOnOff();
}

document.onkeypress = function(event) {
  if(event.key == " ") {
    toggleOnOff();
  }

}

var numberButtons = document.querySelectorAll(".number");
for (var i = 0; i < numberButtons.length; i++){
  numberButtons[i].onclick = function() {

    if(document.querySelector("#display").value == "OFF"){
      return;
    }

    if(this.innerHTML == "."){
      if(document.querySelector("#display").value.includes(".")){
        console.log("fin re");
        return;
      }
    }

    var selectedNumber = this.innerHTML;
    console.log(selectedNumber);
    var currentValue = document.querySelector("#display").value;
    console.log(currentValue);

    if(currentValue == 0 || currentValue == "OFF" || previousTermWasNumber == false){
      document.querySelector("#display").value = selectedNumber;
      previousTermWasNumber = true;
    } else {
      currentValue = currentValue + selectedNumber;
      document.querySelector("#display").value = currentValue;
    }

  }
}

var operatorButtons = document.querySelectorAll(".operator");
for (var i = 0; i < operatorButtons.length; i++){
  operatorButtons[i].onclick = function() {
    firstTermExists = true;
    firstTerm = document.querySelector("#display").value;
    operator = this.innerHTML;
    if(this.innerHTML == "x"){
      operator = "*";
    }
    previousTermWasNumber = false;
  }
}

document.querySelector(".equal").onclick = function() {
  if(!firstTermExists){

  } else {
      var secondTerm = document.querySelector("#display").value;
      var first = parseFloat(firstTerm);
      var second = parseFloat(secondTerm);
      var output;

      if(operator == "+") {
        output = first + second;
      }

      if(operator == "-") {
        output = first - second;
      }

      if(operator == "*") {
        output =  first * second;
      }

      if(operator == "/") {
        if(second == 0){
          output = "Infinity";
        } else {
        output = first / second;
        }
    }

    document.querySelector("#display").value = output;
    previousTermWasNumber = false;

  }
}

document.querySelector(".ac").onclick = function() {
  firstTerm = 0;
  firstTermExists = false;
  operator = 0;
}
