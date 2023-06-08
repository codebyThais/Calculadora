function addToDisplay(value) {
   var currentDisplay = document.getElementById("currentDisplay");
   var previousDisplay = document.getElementById("previousDisplay");
   var lastChar = currentDisplay.value.slice(-1);
   if (currentDisplay.value.length >= 15) {
      return;
   }
   if (value === ',' && currentDisplay.value === "") {
      currentDisplay.value = "0,";
      return;
   }
   if (['+', '-', 'x', '÷'].includes(value) && ['+', '-', 'x', '÷'].includes(lastChar)) {
      return; // Impede a adição consecutiva de operadores matemáticos
   }
   if ((value === ',' && lastChar === ',') || (['+', '-', 'x', '÷'].includes(lastChar) && value === ',')) {
      return; // Impede a adição de vírgula após operadores matemáticos e vírgula
   }
   if (['+', '-', '*', '/'].includes(value) && lastChar === ',') {
      return; // Impede a adição de operadores matemáticos após a vírgula
   }
   currentDisplay.value += value;
 }

 function clearDisplay() {
   var currentDisplay = document.getElementById("currentDisplay");
   var previousDisplay = document.getElementById("previousDisplay");
   currentDisplay.value = "";
   previousDisplay.value = "";
 }
 
 function deleteCharacter() {
   var currentDisplay = document.getElementById("currentDisplay");
   currentDisplay.value = currentDisplay.value.slice(0, -1);
 }
 
 function calculate() {
   var currentDisplay = document.getElementById("currentDisplay");
   var previousDisplay = document.getElementById("previousDisplay");
   var expression = currentDisplay.value;

   expression = expression.replace(/÷/g, "/"); // Substitui ÷ por /
   expression = expression.replace(/x/g, "*"); // Substitui x por *
   expression = expression.replace(/,/g, "."); // Substitui , por .

   try {
     var result = eval(expression);
     previousDisplay.value = currentDisplay.value;
     currentDisplay.value = result;
   } catch (error) {
      currentDisplay.value = "Erro";
   }
}