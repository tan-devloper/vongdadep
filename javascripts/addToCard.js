const quantity = document.getElementById("quantity");
const price = document.getElementById("price");
const name = document.getElementById("name");
const addBtn = document.getElementById("add_to_card");
const cartLabel = document.getElementById("cartLabel");

if (localStorage.getItem("Array") == null) {
  localStorage.setItem("Array", JSON.stringify([]));
}
addBtn.addEventListener("click", () => {
  let obj = {
    name: name.textContent,
    quantity: quantity.value,
    price: price.textContent,
  };
  console.log(obj);
  let array = JSON.parse(localStorage.getItem("Array"));
  array.push(obj);
  cartLabel.classList.add('pushed')

  localStorage.setItem("Array", JSON.stringify(array));
  console.log(JSON.parse(localStorage.getItem("Array")));
});
// for (let i = 1; i <= localStorage.length; i++) {
//     key = "obj" + i
//     console.log(key);
//     console.log(localStorage.getItem(key));

// }
