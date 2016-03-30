var imageObjectArray = [];
var bag, banana, bathroom, boots, breakfast, bubblegum, chair, cthulhu, dogDuck, dragon, pen, petSweep, scissors, shark, sweep, tauntaun, unicorn, usb, waterCan, wineGlass;
var storeImageOne;
var globalTotalClicks = 0;

function ImageObject(name, filePath) {
  this.name = name;
  this.filePath = filePath;
  this.show = 0;
  this.clicks = 0;
  this.coolId = '';
}

ImageObject.prototype.totalClicks = function () {
  this.clicks++;
};

ImageObject.prototype.totalShow = function(){
  this.show++;
};

ImageObject.prototype.imgId = function(){
  this.coolId = this.name;
};


imageObjectArray.push(bag = new ImageObject('bag', 'img/bag.jpg'));
imageObjectArray.push(banana = new ImageObject('banana','img/banana.jpg'));
imageObjectArray.push(bathroom = new ImageObject('bathroom','img/bathroom.jpg'));
imageObjectArray.push(boots = new ImageObject('boots','img/boots.jpg'));
imageObjectArray.push(breakfast = new ImageObject('breakfast','img/breakfast.jpg'));
imageObjectArray.push(bubblegum = new ImageObject('bubblegum','img/bubblegum.jpg'));
imageObjectArray.push(charir = new ImageObject('chair','img/chair.jpg'));
imageObjectArray.push(cthulhu = new ImageObject('cthulhu','img/cthulhu.jpg'));
imageObjectArray.push(dogDuck = new ImageObject('dog-duck','img/dog-duck.jpg'));
imageObjectArray.push(dragon = new ImageObject('dragon','img/dragon.jpg'));
imageObjectArray.push(pen = new ImageObject('pen','img/pen.jpg'));
imageObjectArray.push(petSweep = new ImageObject('pet-sweep','img/pet-sweep.jpg'));
imageObjectArray.push(scissors = new ImageObject('scissors','img/scissors.jpg'));
imageObjectArray.push(shark = new ImageObject('shark','img/shark.jpg'));
imageObjectArray.push(sweep = new ImageObject('sweep','img/sweep.png'));
imageObjectArray.push(tauntaun = new ImageObject('tauntaun','img/tauntaun.jpg'));
imageObjectArray.push(unicorn = new ImageObject('unicorn','img/unicorn.jpg'));
imageObjectArray.push(usb = new ImageObject('usb','img/usb.gif'));
imageObjectArray.push(waterCan = new ImageObject('water-can','img/water-can.jpg'));
imageObjectArray.push(wineGlass = new ImageObject('wine-glass','img/wine-glass.jpg'));

function replaceId(){
  for (var i = 0; i < imageObjectArray.length; i++){
    imageObjectArray[i].imgId();
  }
}
replaceId();

storeImageOne = document.getElementsByClassName('ranImg');

function generateRandom() {
  for (var i = 0; i < storeImageOne.length; i++) {
    var randomizer =  Math.floor(Math.random() * imageObjectArray.length);
    storeImageOne[i].setAttribute('src', imageObjectArray[randomizer].filePath);
    storeImageOne[i].setAttribute('id', imageObjectArray[randomizer].coolId);
    imageObjectArray[randomizer].totalShow();
  }
}
generateRandom();

function displayImageclicked(event) {
  globalTotalClicks++;
  console.log('total clicks', globalTotalClicks);
  console.log('event.target: ', event.target);

  for (var i = 0; i < imageObjectArray.length; i++) {
    if (event.target.id === imageObjectArray[i].coolId) {
      imageObjectArray[i].totalClicks();
      console.log('You clicked', event.target.id);
      console.log('total time image was clicked', imageObjectArray[i].clicks);
    }
  }

  setTimeout(generateRandom, 200);
}

// for (var j = 0; j < imageObjectArray.length; j++){
//   console.log(imageObjectArray[j].name + ' has been displayed ' + imageObjectArray[j].show + ' and clicked ' + imageObjectArray[j].clicks + '.');
// }

console.log('Total clicked: ' + globalTotalClicks);

//loop to track clicks

for (var i = 0; i < storeImageOne.length; i++) {
  storeImageOne[i].addEventListener('click', displayImageclicked);
}
