let i = 0;
const elItem = document.querySelectorAll('.item');
const elTextBox = document.querySelectorAll('.inner');
const elArrow = document.querySelectorAll('.add');
for (i = 0; i < elItem.length; i++) {
  let j = i;
  elItem[i].addEventListener('click', () => {
    elTextBox[j].classList.toggle('change');
    elArrow[j].classList.toggle('arrow')
  })
}