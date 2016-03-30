var imageObjectArray = [];
// var bag, banana, bathroom, boots, breakfast, bubblegum, chair, cthulhu, dogDuck, dragon, pen, petSweep, scissors, shark, sweep, tauntaun, unicorn, usb, waterCan, wineGlass;

var totalClicks = 0;

function displayImageclicked() {
  totalClicks++;
  console.log('event.target: ', event.target);

  // if (displayImageclicked < 25) {
  //   deleteImages(imgOne, imgTwo, imgThree);
  //   displayThreeImages(imgOne, imgTwo, imgThree);
  // } else {
  //   deleteImages(imgOne, imgTwo, ImgThree);
  //   alert('you clicked 25 times');
  // }
  var currentImgSrc = event.target.src;
  for (var i = 0; i < imageObjectArray.length; i++) {
    if (imageObjectsArray[i].coolId === currentImgSrc) {
      imageObjectsArray[i].totalClicks();
    }
  }

}

var storeImageOne = document.getElementsByClassName('ranImg');
//loop to track clicks

for (var i = 0; i < storeImageOne.length; i++) {
  storeImageOne[i].addEventListener('click', displayImageclicked);
}

function ImageObject(name, filepath) {
  this.name = name;
  this.filepath = filepath;
  this.show = 0;
  this.clicks = 0;
  this.coolId = '';
}
ImageObject.prototype.totalClicks = function () {
  this.clicks++;
  console.log(totalClicks);
};

ImageObject.prototype.totalShow = function(){
  this.show++;
  console.log('totalShow');
};

ImageObject.prototype.imgId = function(){
  this.coolId = this.name.split('').join('').toLowerCase();
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

function generateRandom() {
  for (var i = 0; i < imageObjectArray.length; i++) {
    var randomizer =  Math.floor(Math.random() * imageObjectArray.length);
    console.log(imageObjectArray);
    storeImageOne[i].setAttribute('src', imageObjectArray[randomizer].filepath);
    storeImageOne[i].setAttribute('id', imageObjectArray[randomizer].coolId);
    imageObjectArray[randomizer].totalShow.totalShow();
  }
}
generateRandom();

function replaceId(){
  for (var i = 0; i < imageObjectsArray.length; i++){
    imageObjectsArray[i].coolId();
  }
}
replaceId();

for (var i = 0; i < imageObjectsArray.length; i++){
  console.log(imageObjectsArray[i].name + ' has been displayed ' + imageObjectsArray[i].show + ' and clicked ' + imageObjectsArray[i].clicks + '.');
}

console.log('Total clicked: ' + totalClicks);
generateRandom();
