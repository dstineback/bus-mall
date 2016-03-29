
// //
// function userImageClick() {
//   console.log('event.target: ', event.target);
// }
//
//
//
// //loop to track clicks
// for (var i = 0; i < changImage.length; i++) {
//   changImage[i].addEventListener('click', userImageClick);
// }

var imageObjectArray = [];

function ImageObject(name, filepath) {
  this.name, name;
  this.filepath, filepath;
  this.show, 0;
  this.clicks, 0;

}

imageObjectArray.push(new ImageObject('bag', 'assets/bag.jpg'));
imageObjectArray.push(new ImageObject('banana','assets/banana.jpg'));
imageObjectArray.push(new ImageObject('bathroom','assets/bathroom.jpg'));
imageObjectArray.push(new ImageObject('boots','assets/boots.jpg'));
imageObjectArray.push(new ImageObject('breakfast','assets/breakfast.jpg'));
imageObjectArray.push(new ImageObject('bubblegum','assets/bubblegum.jpg'));
imageObjectArray.push(new ImageObject('chair','assets/chair.jpg'));
imageObjectArray.push(new ImageObject('cthulhu','assets/cthulhu.jpg'));
imageObjectArray.push(new ImageObject('dog-duck','assets/dog-duck.jpg'));
imageObjectArray.push(new ImageObject('dragon','assets/dragon.jpg'));
imageObjectArray.push(new ImageObject('pen','assets/pen.jpg'));
imageObjectArray.push(new ImageObject('pet-sweep','assets/pet-sweep.jpg'));
imageObjectArray.push(new ImageObject('scissors','assets/cissors.jpg'));
imageObjectArray.push(new ImageObject('shark','assets/hark.jpg'));
imageObjectArray.push(new ImageObject('sweep','assets/sweep.png'));
imageObjectArray.push(new ImageObject('tauntaun','assets/tauntaun.jpg'));
imageObjectArray.push(new ImageObject('unicorn','assets/unicorn.jpg'));
imageObjectArray.push(new ImageObject('usb','assets/usb.jpg'));
imageObjectArray.push(new ImageObject('water-can','assets/water-can.jpg'));
imageObjectArray.push(new ImageObject('wine-glass','assets/wine-glass.jpg'));

var storeImageOne;
storeImageOne = document.getElementsByClassName('ranImage');

for (var i = 0; i < imageObjectArray.length; i++) {
  var randomizer =  Math.floor(Math.random() * imageObjectArray.length);
  storeImageOne[i].setAttribute('src', imageObjectArray[randomizer].filepath);
}
