let cartTotal = 0

function addToCart(){
  cartTotal += 1;
  sessionStorage.setItem("cartTot", cartTotal);
  updateCart();
}

function updateCart(){
  cartTotal = parseInt(sessionStorage.getItem("cartTot"));
  document.getElementById("cartnumber").innerHTML = cartTotal;
}

updateCart();