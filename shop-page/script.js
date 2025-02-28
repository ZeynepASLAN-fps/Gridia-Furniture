const counter = document.getElementById("counter");

let count = 0;
document.addEventListener("DOMContentLoaded", () => {
  const addIcons = document.querySelectorAll(".ri-add-line"); 
  addIcons.forEach((addIcon) => {
    addIcon.addEventListener("click", () => {
      if(count < 9)
        count++;
      if(count == 9)
        counter.style.backgroundColor ="#ff0000"; 
      counter.textContent = count;
    });
  });
});



