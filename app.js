
//
function userImageClick() {
  console.log('event.target: ', event.target);
}

var storeImageOne = document.getElementsByClassName('changeImageOne');
var sotreImageTwo = document.getElementsByClassName('changImageTwo');
var storeImageThree = document.getElementsByClassName('changeImageThree');

//loop to track clicks
for (var i = 0; i < changImage.length; i++) {
  changImage[i].addEventListener('click', userImageClick);
}

var imageObjectArray = [];

function imageObject(name, filepath) {
  this.name, name;
  this.filepath, filepath;
  this.show, 0;
  this.clicks, 0;

}

imageObject.push(imageObjectArray(new imageObject('bag', 'bag.jpg')));
imageObject.push(imageObjectArray(new imageObject('banana','banana.jpg')));
imageObject.push(imageObjectArray(new imageObject('bathroom','bathroom.jpg')));
imageObject.push(imageObjectArray(new imageObject('boots','boots.jpg')));
imageObject.push(imageObjectArray(new imageObject('breakfast','breakfast.jpg')));
imageObject.push(imageObjectArray(new imageObject('bubblegum','bubblegum.jpg')));
imageObject.push(imageObjectArray(new imageObject('chair','chair.jpg')));
imageObject.push(imageObjectArray(new imageObject('cthulhu','cthulhu.jpg')));
imageObject.push(imageObjectArray(new imageObject('dog-duck','dog-duck.jpg')));
imageObject.push(imageObjectArray(new imageObject('dragon','dragon.jpg')));
imageObject.push(imageObjectArray(new imageObject('pen','pen.jpg')));
imageObject.push(imageObjectArray(new imageObject('pet-sweep','pet-sweep.jpg')));
imageObject.push(imageObjectArray(new imageObject('scissors','scissors.jpg')));
imageObject.push(imageObjectArray(new imageObject('shark','shark.jpg')));
imageObject.push(imageObjectArray(new imageObject('sweep','sweep.png')));
imageObject.push(imageObjectArray(new imageObject('tauntaun','tauntaun.jpg')));
imageObject.push(imageObjectArray(new imageObject('unicorn','unicorn.jpg')));
imageObject.push(imageObjectArray(new imageObject('usb','usb.jpg')));
imageObject.push(imageObjectArray(new imageObject('water-can','water-can.jpg')));
imageObject.push(imageObjectArray(new imageObject('wine-glass','wine-glass.jpg')));
