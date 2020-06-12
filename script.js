// Default Tax Rate
let taxRate = 13;

// Get the buttons
const updateBtn = document.querySelector("input[name='update-button']");
const changeBtn = document.querySelector("input[name='change-rate']");
const calcAfterTaxBtn = document.querySelector("#after-tax input[name='calculate']");
const calcTaxPaidBtn = document.querySelector("#tax-paid input[name='calculate']");

let itemPrice = parseFloat(document.querySelector("input[name='tax-rate']").value);

// Display the default tax rate
document.querySelector(".rate").textContent = taxRate;

// Update the tax rate
function updateTaxRate() {
    taxRate = parseFloat(document.querySelector("#tax-rate input[name='tax-rate']").value);
    document.querySelector("#tax-rate .tax-rate span").textContent = taxRate;
    document.querySelector(".update").classList.toggle("hidden");
}
function showChangeDiv() {
    document.querySelector(".update").classList.toggle("hidden");
}
function calculateTotal() {
    var price = parseFloat(document.querySelector("input[name='price']").value);
    var total = price + taxRate / 100 * price;
    document.querySelector("#after-tax .result").textContent = total.toFixed(2);
    price.value = "";
}
function calculateTax() {
    var paid = parseFloat(document.querySelector("#tax-paid input[name='total-paid']").value);
    var price = paid / (taxRate / 100 + 1);
    var taxPaid = paid - price;
    document.querySelector("#tax-paid .price .result").textContent = price.toFixed(2);
    document.querySelector("#tax-paid .tax .result").textContent = taxPaid.toFixed(2);
    price.value = "";
    paid.value = "";
}


// Button actions
updateBtn.addEventListener("click", updateTaxRate, false);
changeBtn.addEventListener("click", showChangeDiv, false);
calcAfterTaxBtn.addEventListener("click", calculateTotal, false);
calcTaxPaidBtn.addEventListener("click", calculateTax, false);
