const counter = document.getElementById("counter");
let count = 0;
document.addEventListener("DOMContentLoaded", () => {
  const addIcons = document.querySelectorAll(".ri-add-line"); 
  addIcons.forEach((addIcon) => {
    addIcon.addEventListener("click", () => {
      count++
      counter.textContent = count;
    });
  });
});



