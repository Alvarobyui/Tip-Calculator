//Traer todos los inputs y outputs
// Calcular el porcentaje de propinas
// imprimir el resultado
//implementar botón "reset"
//alertar cuando el numero de personas es cero.
//implementar restricctón para seleccionar solo un botón de porcentaje.

//Inputs
function $(id) {
  return document.getElementById(id);
}
let amountInput = $("amount-input");
const btn5= $("btn-5%");
const btn10= $("btn-10%");
const btn15= $("btn-15%");
const btn25= $("btn-25%");
const btn50= $("btn-50%");
let customInput= $("custom-input");
let peopleInput= $("people-input");

//Para alertar cuando el usuario pone 0 en numero de personas
let animatedAlert = $("animated-alert");

// Outputs/ para imprimir resultado
let tipResult= $("tip-result");
let totalResult= $("total-result");

//para trabajar en la lógica
const btnReset= $("reset-btn");
let amountValue = 0;
let percentageValue = 0;
let peopleValue = 0;
let customValue = 0;

let taxAmount = 0;
let total = 0;

const buttons = [...document.getElementsByClassName("little-box")];
console.log(buttons);
let lastActive;
buttons.forEach((button, index, array) => {
  button.addEventListener("click", ()=> {
    lastActive = array.find((button) => button.classList[1] === "active");
    if (lastActive) {
      lastActive.classList.remove("active");
    }

    button.classList.toggle("active");
  });
});


btnReset.disabled = true;

function displayResult() {
  if ((taxAmount !== NaN)) {
    tipResult.textContent = taxAmount.toFixed(2);
  } else {
    totalResult.textContent = "0.00";
  }
  if ((total !== NaN)) {
    totalResult.textContent = total.toFixed(2);
  } else {
    totalResult.textContent = "0.00";
  }
  
} 

function calculateTax(tip) {
  amountValue = parseFloat(amountInput.value);
  percentageValue = parseFloat(tip);
  peopleValue = parseInt(peopleInput.value);

  if (!(peopleValue < 1)) {  
    taxAmount = (amountValue * percentageValue) / peopleValue;
    total = ((amountValue * percentageValue) + amountValue) / peopleValue;
    displayResult();
  } else {
    animatedAlert.style.visibility = "visible";
  }
};

//eventos para los inputs, se activan cada vez que el valor del imput cambia
amountInput.addEventListener("input", ()=>{
  amountValue = parseFloat(amountInput.value);
  console.log(`${amountValue} as a ${typeof(amountValue)}`);
  if(((peopleValue !=="") && (percentageValue !== 0))) {
    btnReset.disabled = false;
    calculateTax(percentageValue);
    } else {
      tipResult.textContent = "0.00";
      totalResult.textContent = "0.00";
      btnReset.disabled = true;

    }
});
peopleInput.addEventListener("input", ()=>{
  peopleValue = parseInt(peopleInput.value);
  console.log(`${peopleValue} as a ${typeof(peopleValue)}`);
  if((percentageValue !== 0 && amountValue !== 0)) {
    animatedAlert.style.visibility = "hidden";
    btnReset.disabled = false;
    calculateTax(percentageValue);
  } else {
    tipResult.textContent = "0.00";
    totalResult.textContent = "0.00";
    btnReset.disabled = true;
  }
});


/*Botones de para calcular el porcentaje de propina*/

btn5.addEventListener("click", () =>{
  percentageValue = btn5.value;
  console.log(`${percentageValue} as a ${typeof(percentageValue)}`);
  if (amountValue == 0 || peopleValue == 0) {
    btnReset.disabled = true;
    tipResult.textContent = "0.00";
    totalResult.textContent = "0.00";
  } else {
    console.log("it works");
    console.log(percentageValue)
    btnReset.disabled = false;
    calculateTax(percentageValue);
  }
});

btn10.addEventListener("click", () =>{
  percentageValue = btn10.value;
  console.log(`${percentageValue} as a ${typeof(percentageValue)}`);
  if (amountValue == 0 || peopleValue == 0) {
    btnReset.disabled = true;
    tipResult.textContent = "0.00";
    totalResult.textContent = "0.00";
  } else {
    console.log("it works");
    console.log(percentageValue)
    btnReset.disabled = false;
    calculateTax(percentageValue);
  }
});

btn15.addEventListener("click", () =>{
  percentageValue = btn15.value;
  console.log(`${percentageValue} as a ${typeof(percentageValue)}`);
  if (amountValue == 0 || peopleValue == 0) {
    btnReset.disabled = true;
    tipResult.textContent = "0.00";
    totalResult.textContent = "0.00";
  } else {
    console.log("it works");
    console.log(percentageValue);
    btnReset.disabled = false;
    calculateTax(percentageValue);
  }
});

btn25.addEventListener("click", () =>{
  percentageValue = btn25.value;
  console.log(`${percentageValue} as a ${typeof(percentageValue)}`);
  if (amountValue == 0 || peopleValue == 0) {
    btnReset.disabled = true;
    tipResult.textContent = "0.00";
    totalResult.textContent = "0.00";
  } else {
    console.log("it works");
    console.log(percentageValue)
    btnReset.disabled = false;
    calculateTax(percentageValue);
  }
});

btn50.addEventListener("click", () =>{
  percentageValue = btn50.value;
  console.log(`${percentageValue} as a ${typeof(percentageValue)}`);
  if (amountValue == 0 || peopleValue == 0) {
    btnReset.disabled = true;
    tipResult.textContent = "0.00";
    totalResult.textContent = "0.00";
  } else {
    console.log("it works");
    console.log(percentageValue)
    btnReset.disabled = false;
    calculateTax(percentageValue);
  }
});

customInput.addEventListener("input", ()=> {
  customValue = (parseInt(customInput.value))/100;
  console.log(`${customValue} as a ${typeof(customValue)}`);
  if((peopleValue !== 0 && amountValue !== 0)) {
  btnReset.disabled = false;
  calculateTax(customValue);
  } else {
    tipResult.textContent = "0.00";
    totalResult.textContent = "0.00";
    btnReset.disabled = true;
  }
});

btnReset.addEventListener("click", ()=> {
  amountInput.value = "";
  customInput.value= "";
  peopleInput.value= "";
  btnReset.disabled = true;

});

