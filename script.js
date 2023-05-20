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

async function fetchUser(){
  let url = 'https://raw.githubusercontent.com/carter3500/carter3500.github.io/main/products.json';