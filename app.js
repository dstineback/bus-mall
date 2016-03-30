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

    if (globalTotalClicks === 5) {
      numberTimeClick();
      numberTimeShow();

      console.log('if statement', globalTotalClicks);

      var userForm = document.createElement('form');
      userForm.setAttribute('id', userForm);

      var formField = document.createElement('fieldset');
      formField.setAttribute('id', formField);
      formField.appendChild(userForm);

      var formLeg = document.createElement('legend');
      formLeg.setAttribute('id', formLeg);
      formLeg.textContent = 'You have reached 25 questions. Do you want to see results or answer 10 more questions';
      formLeg.appendChild(formField);

      var userYes = document.createElement('button');
      userYes.setAttribute('id', userYes);
      userYes.textContent = 'yes';
      userYes.appendChild(formField);
      userYes.addEventListener('click', userKeepPlaying);

      var userNo = document.createElement('button');
      userNo.setAttribute('id', userNo);
      userNo.textContent = 'no';
      userNo.appendChild(formField);
      userNo.addEventListener('click', userNotPlaying);

      var userQuestion = document.getElementById('imageSpot');
      userQuestion.appendChild(userForm);

    }
  }
  setTimeout(generateRandom, 200);
}

// setTimeout(generateRandom, 200);

function userKeepPlaying(event) {

    //show 10 more questions//

}

function userNotPlaying(event) {

}

//loop to track clicks

for (var i = 0; i < storeImageOne.length; i++) {
  storeImageOne[i].addEventListener('click', displayImageclicked);
}

console.log('Total clicked: ' + globalTotalClicks);

var numberTimeShowArray = [];
var numberTimeClickArray = [];
var percentArray = [];

function numberTimeShow(){
  for (var i = 0; i < imageObjectArray.length; i++) {
  numberTimeShowArray.push(imageObjectArray[i].show);
  }
}

function numberTimeClick(){
  for (var i = 0; i < imageObjectArray.length; i++) {
  numberTimeClickArray.push(imageObjectArray[i].clicks);
}

function percentArray(){
for (var i = 0; i < imageObjectArray.length; i++) {
  percentArray.push(imageObjectArray[i].clicks / imageObjectArray[i].show);
}

}
// var myBarChart = new Chart(context).Bar(data);
// var data = {
//     labels: ["bag", "banana", "bathroom", "boots", "breakfast", "bubblegum", "chair", "cthulhu", "dogDuck", "dragon", "pen", "petSweep", "scissors", "shark", "sweep", "tauntaun", "unicorn", "usb", "waterCan", "wineGlass"],
//     datasets: [
//         {
//             label: "Number of times shown",
//             fillColor: "rgba(220,220,220,0.5)",
//             strokeColor: "rgba(220,220,220,0.8)",
//             highlightFill: "rgba(220,220,220,0.75)",
//             highlightStroke: "rgba(220,220,220,1)",
//             data: make array of number of times shown
//         },
//         {
//             label: "number of times image was clicked",
//             fillColor: "rgba(151,187,205,0.5)",
//             strokeColor: "rgba(151,187,205,0.8)",
//             highlightFill: "rgba(151,187,205,0.75)",
//             highlightStroke: "rgba(151,187,205,1)",
//             data: make variable for number of clicks
//         }
{
//             label: "percentage",
//             fillColor: "rgba(151,187,205,0.5)",
//             strokeColor: "rgba(151,187,205,0.8)",
//             highlightFill: "rgba(151,187,205,0.75)",
//             highlightStroke: "rgba(151,187,205,1)",
//             data: make new percentage variable
//         }
//     ]
// };





// for (var j = 0; j < imageObjectArray.length; j++){
//   console.log(imageObjectArray[j].name + ' has been displayed ' + imageObjectArray[j].show + ' and clicked ' + imageObjectArray[j].clicks + '.');
// }
