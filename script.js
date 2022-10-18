let array = [];
for (let i = 0; i < 9; i++) {
  array[i] = document.getElementById(`card-${i + 1}`);
}
const mediaQueryCondition = window.matchMedia("( max-width: 810px )");

array.forEach((element) => {
  let currentElement = element;
  if (!mediaQueryCondition.matches) {
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
  }
});
