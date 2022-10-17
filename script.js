let array = [];
for (let i = 0; i < 9; i++) {
  array[i] = document.getElementById(`card-${i + 1}`);
}
array.forEach((element) => {
  let currentElement = element;
  element.addEventListener("mouseover", (e) => {
    array.forEach((card) => {
      if (!(card === currentElement)) {
        card.classList.add("blur");
        if (currentElement === array[4]) {
          card.classList.add("middleBlur");
        }
      }
    });
  });
  currentElement.addEventListener("mouseout", (e) => {
    array.forEach((cardpt2) => {
      cardpt2.classList.remove("blur");
      cardpt2.classList.remove("middleBlur");
    });
  });
});
