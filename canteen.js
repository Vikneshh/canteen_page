
const plus = document.getElementById("plus");
const minus = document.getElementById("minus");
const num = document.getElementsByClassName("quantity");
const totalQuantityElement = document.getElementById("total-quantity");
const totalCostElement = document.getElementById("total-cost");

let a = 0;

plus.addEventListener("click", () => {
  a++;
  a = (a < 10) ? "0" + a : a.toString(); // Convert a to a string
  console.log(a);
  updateQuantityText();
  updateTotalCost();
});

minus.addEventListener("click", () => {
  if (a >= 1) {
    a--;
    a = (a < 10) ? "0" + a : a.toString(); // Convert a to a string
    console.log(a);
    updateQuantityText();
    updateTotalCost();
  }
});

function updateQuantityText() {
  for (let i = 0; i < num.length; i++) {
    num[i].innerText = a;
  }
}

function updateTotalCost() {
  
  const itemPrice = 7.00; 
  const totalCost = parseFloat(a) * itemPrice;
  
  
  totalCostElement.textContent = totalCost.toFixed(2);
}

// Initial update
updateQuantityText();
updateTotalCost();
