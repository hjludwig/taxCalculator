
// Default Tax Rate
let taxRate = 13;
// let myVar = document.querySelector("#tax-rate input[name='tax-rate]'").innerHTML;
console.log(taxRate);

function updateTaxRate() {
    // taxRate = parseFloat(document.querySelector("#tax-rate input[name='tax-rate']"));
    taxRate = parseFloat(document.querySelector("#tax-rate input[name='tax-rate']").value);
    document.querySelector("#tax-rate .tax-rate").insertAdjacentText("beforeend", taxRate);
}
function calculateTotal() {
    // var taxrate = parseFloat(document.querySelector("#taxrate1").value);
    var price = parseFloat(document.querySelector("price").value);
    var total = price + taxrate / 100 * price;
    document.querySelector("afterTax").textContent = total.toFixed(2);
  }
function calculateTax() {
    // var taxrate = parseFloat(document.querySelector("taxrate2").value);
    var paid = parseFloat(document.querySelector("paid").value);
    var price = paid / (taxrate/100 + 1) ;
    var taxPaid = paid - price;
    document.querySelector("itemPrice").textContent = price.toFixed(2);
    document.querySelector("taxPaid").textContent = taxPaid.toFixed(2);
}
function testFunction() {
    console.log("Test Complete");
    document.querySelector("taxPaid").textContent = "Test Complete";
}
