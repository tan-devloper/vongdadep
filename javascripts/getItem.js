const price = document.getElementById('price')
const includelPrice = document.getElementById('totalPrice')

function getItem () {
    let array = JSON.parse(localStorage.getItem("Array"));

    array.forEach(item => {
        console.log(item);
    })
}

getItem()