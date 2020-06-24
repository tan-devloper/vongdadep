//Get the button
var mybutton = document.getElementsByClassName("scroller")[0];
document.addEventListener("scroll", () => {
  scrollFunction();
});

// When the user clicks on the button, scroll to the top of the document

mybutton.addEventListener("click", () => {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;

});
// When the user scrolls down 20px from the top of the document, show the button

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.classList.add('apear')
  } else {
    mybutton.classList.remove('apear')
  }
}
