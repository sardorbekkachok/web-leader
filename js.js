let mevalar = [
  {
    id: 0,
    img: "./Ellipse 5.png",
    h1: " Smashed Avo",
    p:"$20.00",
    count: 1,
  },
  {
    id: 1,
    h1: "Yin & Yang",
    p:"$10.00",
    count: 1,
    img: "./Ellipse 6.png",
  },
  {
    id: 2,
    h1: " Pancakes",
    p:"$25.00",
    count: 1,
    img: "./Ellipse 7.png",
  },
  {
    id: 3,
    h1: "Rancheros(Tofu)",
    p:"$25.00",
    count: 1,
    img: "./Ellipse 8.png",

  }
];
let cards = document.querySelector(".cards");
function mevalarBaza() {
  cards.innerHTML = "";
  mevalar.forEach((meva, i) => {
    cards.innerHTML += `
<div class="box">
<img src="${meva.img}" alt="">
<div class="two">
<h1>${meva.h1}</h1>
<p>${meva.p}</p>
</div>
<div class="count">
<button class="btn btn-minus" onclick="minus(${i})">-</button>
<p>${meva.count}</p>
<button class="btn btn-plus" onclick="plus(${i})">+</button>
</div>
      
      `
  });}
  mevalarBaza();
  const minus =(i)=>{
      if (mevalar[i].count >0){
          mevalar[i].count=mevalar[i].count -1;
      }
      mevalarBaza();
  };
  const plus =(i)=>{
      mevalar[i].count =mevalar[i].count +1;
      mevalarBaza();
  };