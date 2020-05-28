function calculateTotal() {
    var taxrate = parseFloat(document.getElementById("taxrate1").value);
    var price = parseFloat(document.getElementById("price").value);
    var total = price + taxrate / 100 * price;
    document.getElementById("afterTax").textContent = total.toFixed(2);
  }
function calculateTax() {
    var taxrate = parseFloat(document.getElementById("taxrate2").value);
    var paid = parseFloat(document.getElementById("paid").value);
    var price = paid / (taxrate/100 + 1) ;
    var taxPaid = paid - price;
    document.getElementById("itemPrice").textContent = price.toFixed(2);
    document.getElementById("taxPaid").textContent = taxPaid.toFixed(2);
}
function testFunction() {
    console.log("Test Complete");
    document.getElementById("taxPaid").textContent = "Test Complete";
}