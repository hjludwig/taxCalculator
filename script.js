function calculate() {
    var taxrate = parseFloat(document.getElementById("taxrate").value);
    var price = parseFloat(document.getElementById("price").value);
    var total = price + taxrate / 100 * price;
    document.getElementById("answer").innerHTML = total;
  }