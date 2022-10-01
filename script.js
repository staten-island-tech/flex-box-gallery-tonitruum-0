let array = [];
for (let i = 0; i < 9; i++) {
  array[i] = document.getElementById(`card-${i + 1}`);
}
array.forEach((element) => {
  let x = element;
  element.addEventListener("mouseover", (e) => {
    array.forEach((card) => {
      if (!(card === x)) {
        card.classList.add("blur");
      }
    });
  });
  x.addEventListener("mouseout", (e) => {
    array.forEach((cardpt2) => {
      cardpt2.classList.remove("blur");
    });
  });
});
