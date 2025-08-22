const colors = ['#f9a363','#8c1346','#d13d3c','#e2663b'];

function addElement(prefix, count, cssClass, useFill = false) {
  const randomVariant = Math.floor(Math.random() * count) + 1; 
  const randomColor = Math.floor(Math.random() * colors.length);
  const randomX = Math.floor(Math.random() * 100);
  const randomY = Math.floor(Math.random() * 100);

  let svg;
  
  if (useFill) {
    svg = `
      <svg style="top:${randomY}%; left:${randomX}%;" class="${cssClass}" version="1.1" xmlns="http://www.w3.org/2000/svg" 
        xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 23.217 23.217" 
        xml:space="preserve">
        <g>
          <path style="fill:${colors[randomColor]};" d="M11.608,21.997c-22.647-12.354-6.268-27.713,0-17.369C17.877-5.716,34.257,9.643,11.608,21.997z"/>
        </g>
      </svg>
    `;
  } else {
    svg = `
      <svg style="top:${randomY}%; left:${randomX}%;" class="${cssClass}" 
        xmlns="http://www.w3.org/2000/svg" viewBox="0 0 54 54">
        <image href="./img/${prefix}${randomVariant}.svg" x="0" y="0" height="54" width="54"/>
      </svg>
    `;
  }

  $("body").append(svg);
}

function center() {
  $(".heart, .rose").css('-webkit-animation','show-heart 4s ease');
}

function deletes() {
  $('.heart:lt(100), .rose:lt(100)').remove();
}

const elements = ["rose", "heart"];

function getRandomElement() {
  return elements[Math.floor(Math.random() * elements.length)];
}

function getRandomNumber() {
  return Math.floor(Math.random() * 5) + 1;
}

const shape = getRandomElement();
const number = getRandomNumber();

setInterval(() => addElement(shape, number, shape), 50);       
setInterval(center, 200);
setInterval(deletes, 8000);