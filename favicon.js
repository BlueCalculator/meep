var favicon_images = [
  'https://cdn.jsdelivr.net/gh/BlueCalculator/meep@main/cow/download.png',
  'https://cdn.jsdelivr.net/gh/BlueCalculator/meep@main/cow/download%20(1).png',
  'https://cdn.jsdelivr.net/gh/BlueCalculator/meep@main/cow/download%20(2).png',
  'https://cdn.jsdelivr.net/gh/BlueCalculator/meep@main/cow/download%20(3).png',
  'https://cdn.jsdelivr.net/gh/BlueCalculator/meep@main/cow/download%20(4).png',
  'https://cdn.jsdelivr.net/gh/BlueCalculator/meep@main/cow/download%20(5).png',
  'https://cdn.jsdelivr.net/gh/BlueCalculator/meep@main/cow/download%20(6).png',
  'https://cdn.jsdelivr.net/gh/BlueCalculator/meep@main/cow/download%20(7).png',
  'https://cdn.jsdelivr.net/gh/BlueCalculator/meep@main/cow/download%20(8).png',
  'https://cdn.jsdelivr.net/gh/BlueCalculator/meep@main/cow/download%20(9).png',
  'https://cdn.jsdelivr.net/gh/BlueCalculator/meep@main/cow/download%20(10).png ',
  'https://cdn.jsdelivr.net/gh/BlueCalculator/meep@main/cow/download%20(11).png ',
  'https://cdn.jsdelivr.net/gh/BlueCalculator/meep@main/cow/download%20(12).png ',
  'https://cdn.jsdelivr.net/gh/BlueCalculator/meep@main/cow/download%20(13).png ',
  'https://cdn.jsdelivr.net/gh/BlueCalculator/meep@main/cow/download%20(14).png ',
  'https://cdn.jsdelivr.net/gh/BlueCalculator/meep@main/cow/download%20(15).png ',
  'https://cdn.jsdelivr.net/gh/BlueCalculator/meep@main/cow/download%20(16).png ',
  'https://cdn.jsdelivr.net/gh/BlueCalculator/meep@main/cow/download%20(17).png ',
  'https://cdn.jsdelivr.net/gh/BlueCalculator/meep@main/cow/download%20(18).png '
],
image_counter = 0; 

var hidden = false

document.body.addEventListener("keydown", function (event) {
  if (event.key === "]") {
      window.location.replace("https://classroom.google.com");
  }
  if (event.key === "[") {
      if(hidden === false){
          hidden = true
          startFavi()
      }else{
          hidden = false
          startFavi()
      }
  }
});

var myInterval
var OGtitle = document.title;

function startFavi(){
  if(hidden === false){
      document.title = OGtitle || "meep";
      myInterval = setInterval(favi, 100);
    }else{
      clearInterval(myInterval);
      googleClassRemap()
    }
}



function favi() {
  if(document.querySelector("link[rel='icon']") !== null)
  document.querySelector("link[rel='icon']").remove();
  if(document.querySelector("link[rel='shortcut icon']") !== null)
  document.querySelector("link[rel='shortcut icon']").remove();
  []
  $('head').append('beforeend', '<link rel="icon" href="' + favicon_images[image_counter] + '" type="image/gif">');
    
  if(image_counter == favicon_images.length -1)
  image_counter = 0;
  else
  image_counter++;
  }


function googleClassRemap(){
  OGtitle = document.title
  document.title = "Home"
  document.querySelector("head").insertAdjacentHTML('beforeend', '<link rel="icon" href="https://cdn.jsdelivr.net/gh/BlueCalculator/meep@main/google-classroom-icon1.png" type="image/gif">');


}

startFavi() 