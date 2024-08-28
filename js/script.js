color = ['#f9a363','#8c1346','#d13d3c','#e2663b'];

function addHeart(){
  randomColor = Math.floor(Math.random() * (4));
  randomX = Math.floor(Math.random() * (100));
  randomY = Math.floor(Math.random() * (100));
  svg = '<svg style="top:'+randomY+'%; left: '+randomX+'%;" class="heart" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 23.217 23.217" style="enable-background:new 0 0 23.217 23.217;" xml:space="preserve"><g><path style="fill:'+color[randomColor]+';" d="M11.608,21.997c-22.647-12.354-6.268-27.713,0-17.369C17.877-5.716,34.257,9.643,11.608,21.997z" /></g></svg>';
  $("body").append(svg);
}

function addRose() {
  randomColor = Math.floor(Math.random() * 4);
  randomX = Math.floor(Math.random() * 100);
  randomY = Math.floor(Math.random() * 100);
  svg = `
    <svg style="top:${randomY}%; left: ${randomX}%;" class="rose" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 154 154">
      <image href="./img/rose.svg" x="0" y="0" height="154" width="154"/>
    </svg>`;
  $("body").append(svg);
}


function center(){
  $(".rose").css('-webkit-animation','show-heart 4s ease');
}

function deletes(){
  $('.rose:lt(100)').remove();
}


setInterval(addRose,50);
setInterval(center,200);
setInterval(deletes,8000);