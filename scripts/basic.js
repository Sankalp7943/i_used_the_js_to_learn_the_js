
// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal 
btn.onclick = function() {
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

document.querySelector("#developer").addEventListener("click", ()=>{
    window.open("https://www.sharmasankalp.com", "_blank")
})
document.querySelector("#home").addEventListener("click", ()=>{
    window.location.reload();
})
document.querySelector("#contribute").addEventListener("click", ()=>{
    link = "https://github.com/Sankalp7943/i_used_the_js_to_learn_the_js"
    window.open(link, "_blank")
})