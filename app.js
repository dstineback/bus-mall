
var totalShow = 0;
var totalClicks = 0;

function displayImageclicked() {
  totalClicks++;
  totalShow++;
  console.log('event.target: ', event.target);

  if (displayImageclicked < 25) {
    deleteImages(imgOne, imgTwo, imgThree);
    displayThreeImages(imgOne, imgTwo, imgThree);
  } else {
    deleteImages(imgOne, imgTwo, ImgThree);
    alert('you clicked 25 times');
  }
  var currentImgSrc = event.target.src;
  for (var i = 0; i < storeImageOne.length; i++) {
    if (storeImageOne[i].name === currentImgSrc) {
      storeImageOne[i].numOfClicks++;
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
}
ImageObject.prototype.totalClicks = function () {
  this.clicks.event.target = totalClicks;
  console.log(totalClicks);
};

ImageObject.prototype.totalShow = function(){
  this.show.event.target = totalShow;
  console.log(totalShow);
};

var imageObjectArray = [];
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

for (var i = 0; i < imageObjectArray.length; i++) {
  var randomizer =  Math.floor(Math.random() * imageObjectArray.length);
  console.log(imageObjectArray);
  storeImageOne[i].setAttribute('src', imageObjectArray[randomizer].filepath);
  storeImageOne[i].setAttribute('id', imageObjectArray[randomizer].filepath);
}

//notes from code demo
function deleteImages(imgOne, imgTwo, imgThree){
  userChooseImage.removeChild(imgOne);
  userChooseImage.removeChild(imgTwo);
  userChooseImage.removeChild(imgThree);
}

function displayThreeImages(imgOne, imgTwo, imgThree) {
  createRandomImge();
  createRandomImge();
  createRandomImge();
}
displayThreeImages(imgOne, imgTwo, imgThree);

var imgOne = document.createElement('img');
imgOne.setAttribute('class', '' );
var imgTwo = document.createElement('img');
imgTwo.setAttribute('claas', '');
var imgThree = document.createElement('img');
imgThree.setAttribute('class', '');
