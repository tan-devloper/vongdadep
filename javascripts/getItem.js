const price = document.getElementById("price");
const includelPrice = document.getElementById("totalPrice");
const purchaseBtn = document.getElementById("takeMe");

purchaseBtn.addEventListener('submit' , (e) => {
    let array = JSON.parse(localStorage.getItem("Array"));
    if (!(array.length > 0)) {
        e.preventDefault();
    }
})

function getItem() {
  let array = JSON.parse(localStorage.getItem("Array"));
  let totalPrice = 0;
  let search = ".";
  let replace = "";
  if (array.length > 0) {
    purchaseBtn.classList.remove("prevent");
    console.log("hi");
  }

  array.forEach((item) => {
    string = item.price.split(search).join(replace);
    totalPrice += parseInt(string) * item.quantity;
  });

  price.innerText = totalPrice;
  includelPrice.innerText = totalPrice + 30000;
}

getItem();
