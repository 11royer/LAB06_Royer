
import './style.css'
document.querySelector('#app').innerHTML = `
  <div style="display: flex; flex-direction: column;">
    <h2> HTML CSS & JS </h2>
    <a href="https://keybr.com"> Go to the first excercise </a>
    <a href="./src/hw02/q02.html"> Go to the second excercise </a>
    <a href="./src/hw03/q03.html"> Go to the third excercise </a>
  </div>
`


document.addEventListener('DOMContentLoaded', (event) => {
  const rootDiv = document.getElementById('root');
  
  // Lista de compras
  const buyList = [
    "books",
    "bread",
    "eraser",
    "earphones",
    "collection-cards",
    "hdmi",
    "vga",
    "motherboard",
    "university-books",
  ];

  //lista ul y agregar los elementos li
  const ul = document.createElement('ul');
  buyList.forEach(item => {
    const li = document.createElement('li');
    li.textContent = item;
    ul.appendChild(li);
  });

  // Agrega la lista ul al div root
  rootDiv.appendChild(ul);

});

setupCounter(document.querySelector('#counter'));

