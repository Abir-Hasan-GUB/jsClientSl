const mainContainer = document.getElementById("MainContent");
// slider control arrow
const arrowDiv = document.createElement("div");
arrowDiv.setAttribute("style", "max-width: 1500px; margin: 0 auto")
const arrow = `<div class="recent-viewed"><h3>Recently Viewed</h3></div>
			<div id="arrow">
				<span class="slider-arrow">&#139;</span>
				<span class="slider-arrow">&#155;</span>
      </div>`
arrowDiv.innerHTML = arrow;
mainContainer.appendChild(arrowDiv);
document.getElementsByClassName("recent-viewed")[0].style.textAlign = "center";
document.getElementById("arrow").style.textAlign = "right";
const span = document.getElementsByClassName("slider-arrow")
// Arrow hover effect 
for (let i = 0; i < span.length; i++) {
  span[i].setAttribute("style", "font-size: 50px; margin: 0 2px; cursor: pointer; color: #555; width: 30px; font-weight: 600; height: 30px; padding: 2px 0px; display: inline-block; line-height: 19px; text-align: center; border: 1px solid #222; border-radius: 50%;")
  span[i].addEventListener("mouseenter", () => {
    span[i].setAttribute("style", "background: #222; color: #fff; font-size: 50px; margin: 0 2px; cursor: pointer; width: 30px; font-weight: 600; height: 30px; padding: 2px 0px; display: inline-block; line-height: 19px; text-align: center; border: 1px solid #222; border-radius: 50%;")
  })
  span[i].addEventListener("mouseleave", () => {
    span[i].setAttribute("style", "font-size: 50px; margin: 0 2px; cursor: pointer; color: #555; width: 30px; font-weight: 600; height: 30px; padding: 2px 0px; display: inline-block; line-height: 19px; text-align: center; border: 1px solid #222; border-radius: 50%;")
  })
}

//  recent products slider 
const sliderDiv = document.createElement("div");
sliderDiv.setAttribute("id", "sliderContainer");
let data = window.theme.recentlyViewed.recent;
let pdCard = "";
for (name in data) {
  let card = `<div class="recent-product" ">
  <a href="${data[name].url}"><img src="${data[name].featuredImage.replace("{width}", "720")}" width="100%" alt="Recent Product Image"></a>
  <div class="product-body">
    <h5 class="product-title">${name.replaceAll("-", " ")}</h5>
    <p class="product-text">$55.00</p>
  </div>
</div>`
  pdCard = pdCard + card;
}

sliderDiv.innerHTML = pdCard;
sliderDiv.setAttribute("style", "max-width: 1500px; margin: 20px auto; display: flex;align-items: center; overflow-x: hidden;")
mainContainer.appendChild(sliderDiv);

const recentProduct = document.getElementsByClassName("recent-product");
console.log(recentProduct)
for (let i = 0; i < recentProduct.length; i++) {
  recentProduct[i].setAttribute("style", "min-width: 24%; padding: 20px; margin: 0 20px 0 0; border-radius: 20px; position: relative; left: 0; transition: 0.5s; text-align: center;")
}


// slider logic
let productShow = Math.ceil(recentProduct.length / 4);
let l = 0;
let movePer = 25.34;
let maxMove = recentProduct.length * 25.34 - 100;

const rightMover = () => {
  l = l + movePer;
  if (recentProduct == 1) { l = 0; }
  for (const i of recentProduct) {
    if (l > maxMove) { l = l - movePer; }
    i.style.left = '-' + l + '%';
  }
}

const leftMover = () => {
  l = l - movePer;
  if (l <= 0) { l = 0 }
  for (const i of recentProduct) {
    if (productShow > 1) {
      i.style.left = '-' + l + '%'
    }
  }
}
span[1].onclick = () => { rightMover(); }
span[0].onclick = () => { leftMover(); }