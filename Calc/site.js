
var firstNumberTextBox = document.getElementById("firstNumberTextBox")
var secondNumberTextBox = document.getElementById("secondNumberTextBox")
var operand = ""
var addButton = document.getElementById("addButton")
var subtractButton = document.getElementById("subtractButton")
var multiplyButton = document.getElementById("multiplyButton")
var divideButton = document.getElementById("divideButton")
var equalButton = document.getElementById("equalButton")
var clearButton = document.getElementById("clearButton")
var h1 = document.getElementById("result")
addButton.addEventListener('click',function(){
  operand = "+"
})

subtractButton.addEventListener('click',function(){
  operand = "-"
})

multiplyButton.addEventListener('click',function(){
  operand = "*"
})

divideButton.addEventListener('click',function(){
  operand = "/"
})

clearButton.addEventListener('click',function(){
  firstNumberTextBox.value= ""
  secondNumberTextBox.value= ""
  h1.innerHTML = ""
})


equalButton.addEventListener('click',function(){
  number1 = firstNumberTextBox.valueAsNumber
  number2 = firstNumberTextBox.valueAsNumber
  var result
   if(operand == "+") {
    console.log(number1,number2)
      result = number1 + number2
      console.log(result)
   } else if(operand == "-") {
      result = number1 - number2
   } else if(operand == "*") {
      result = number1 * number2
   } else if(operand == "/") { 
      result = number1 / number2
   }
   console.log(result)
   h1.innerHTML = result
})




