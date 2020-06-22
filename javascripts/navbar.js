const toggle = document.getElementById('toggle');
const menu = document.getElementById('menu');
let isOpen = false;

toggle.addEventListener('click' , () => {
    if(!isOpen) {
        menu.classList.add('opened')
        isOpen = true
    } else {
        menu.classList.remove('opened')
        isOpen = false
    }
})