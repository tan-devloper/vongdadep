const tbody = document.querySelector("tbody");
const removeBtn = document.getElementsByClassName("remove_item");
const price = document.getElementById('price')
const includelPrice = document.getElementById('totalPrice')
console.log(removeBtn);
console.log(totalPrice);
render();

function render() {
  let array = JSON.parse(localStorage.getItem("Array"));
  let totalPrice = 0; 
  let include = 0
  let search = '.'
  let replace = ''
  tbody.innerHTML = "";
  array.forEach((item) => {
    string = item.price.split(search).join(replace);
      totalPrice += parseInt(string) * item.quantity;
    tbody.innerHTML += `<tr class="woocommerce-cart--body">
      <td class="cart__remove"><button class="remove_item" key=${
        item.name
      }>×</button></td>
      <td class="cart__thumbnail">
        <a href="./san-pham/ten-san-pham.html">
          <img src="sets/img/Icon-dien-thoai.jpg" alt="">
        </a>
    </td>
      <td class="cart__name" data-title="Sản phẩm"><a href="./san-pham/ten-san-pham.html">${
        item.name
      }</a></td>
      <td class="cart__price" data-title="Giá">${item.price}</td>
      <td class="cart__quantity" data-title="Số lượng"><span>${
        item.quantity
       }</span></td>
      <td class="cart__subtotal" data-title="Tạm tính">${
        item.quantity * item.price + ".000"
      }</td>
    </tr> `;

  });
addEventListenered();
price.innerText = totalPrice;
console.log(totalPrice);
includelPrice.innerText = totalPrice + 30000
}
function addEventListenered() {
  let array_2 = JSON.parse(localStorage.getItem("Array"));
  for (let i = 0; i < array_2.length; i++) {
    removeBtn[i].addEventListener("click", () => {
      if ((array_2[i].name = removeBtn[i].getAttribute("key"))) {
        array_2.splice(i, 1);
        localStorage.setItem("Array", JSON.stringify(array_2));
        render();
        console.log("cac");
      }
    });
  }
}


