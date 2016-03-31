var imageObjectArray = [];
var bag, banana, bathroom, boots, breakfast, bubblegum, chair, cthulhu, dogDuck, dragon, pen, petSweep, scissors, shark, sweep, tauntaun, unicorn, usb, waterCan, wineGlass;
var storeImageOne;
var globalTotalClicks = 0;
var numberTimeShowArray = [];
var numberTimeClickArray = [];
var percentArray = [];

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

function putIndividualClicksArray(){
  for (var i = 0; i < imageObjectArray.length; i++) {
    numberTimeClickArray.push(imageObjectArray[i].clicks);
  }
}

function putIndividualShowArray(){
  for (var i = 0; i < imageObjectArray.length; i++) {
    numberTimeShowArray.push(imageObjectArray[i].show);
  }
}

function setPercentArray(){
  for (var i = 0; i < imageObjectArray.length; i++) {
    if (imageObjectArray[i].show === 0){
      percentArray.push(0);
    } else {
      percentArray.push((numberTimeClickArray[i] / numberTimeShowArray[i]) * 100);
    }
  }
}

storeImageOne = document.getElementsByClassName('ranImg');

function generateRandom() {
  var randomImgOne = Math.floor(Math.random() * imageObjectArray.length);
  var randomImgTwo = randomImgOne;
  while (randomImgTwo === randomImgOne) {
    randomImgTwo = Math.floor(Math.random() * imageObjectArray.length);
  }
  var randomImgThree = randomImgTwo;
  while (randomImgThree === randomImgTwo || randomImgThree === randomImgOne) {
    randomImgThree = Math.floor(Math.random() * imageObjectArray.length);
  }
  var randomImgOfThreeArray = [randomImgOne, randomImgTwo, randomImgThree];

  for (var i = 0; i < storeImageOne.length; i++) {
    storeImageOne[i].setAttribute('src', imageObjectArray[randomImgOfThreeArray[i]].filePath);
    storeImageOne[i].setAttribute('id', imageObjectArray[randomImgOfThreeArray[i]].coolId);
    imageObjectArray[randomImgOfThreeArray[i]].totalShow();
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
  console.log('total clicks: ' + globalTotalClicks);

  if (globalTotalClicks === 25) {
    putIndividualShowArray();
    putIndividualClicksArray();

    var questionForm = document.createElement('form');
    questionForm.setAttribute('id', questionForm);

    var questionFieldset = document.createElement('fieldset');
    questionFieldset.setAttribute('id', questionFieldset);
    questionForm.appendChild(questionFieldset);

    var questionLegend = document.createElement('legend');
    questionLegend.setAttribute('id', questionLegend);
    questionLegend.textContent = 'WooHoo! You made 25 picks. Would you like to make 10 more picks or see your results?';
    questionFieldset.appendChild(questionLegend);

    var keepGoingBut = document.createElement('button');
    keepGoingBut.setAttribute('id', 'keepGoingBut');
    keepGoingBut.setAttribute('type', 'button');
    keepGoingBut.textContent = 'Keep Going';
    questionFieldset.appendChild(keepGoingBut);
    keepGoingBut.addEventListener('click', userKeepPlaying);

    var butResults = document.createElement('button');
    butResults.setAttribute('id', 'butResults');
    butResults.setAttribute('type', 'button');
    butResults.textContent = 'See Results';
    questionFieldset.appendChild(butResults);
    butResults.addEventListener('click', handleShowChart);

    var imgOne = document.getElementsByClassName('ranImg')[0];
    var parentDiv = imgOne.parentNode;
    parentDiv.insertBefore(questionForm, imgOne);
    remEventListener();

  }
  setTimeout(generateRandom, 200);
  if (globalTotalClicks === 35) {
    // putIndividualShowArray();
    // putIndividualClicksArray();
    showChart();
  }

}


setTimeout(generateRandom, 200);

function threeImgEventListener(event) {
  for (var i = 0; i < storeImageOne.length; i++) {
    storeImageOne[i].addEventListener('click', displayImageclicked);
  }

}
threeImgEventListener();

function handleShowChart(event) {
  showChart();
}

function remEventListener(){
  for (var i = 0; i < storeImageOne.length; i++) {
    storeImageOne[i].removeEventListener('click', displayImageclicked);
  }
}

function userKeepPlaying(event){
  if (globalTotalClicks < 35);
  threeImgEventListener();
}

for (var i = 0; i < storeImageOne.length; i++) {
  storeImageOne[i].addEventListener('click', displayImageclicked);
}

function combination(list1, list2){
  var combinationArray = [];
  for (var i = 0; i < list1.length; i++) {
    combinationArray.push(list1[i] + list2[i]);;
  }
  return combinationArray;
}

function showChart(){


  snagDataFromStorage();
  saveDataToStorage();
  remEventListener();
  setPercentArray();



  var imageSpot = document.getElementById('imageSpot');
  var placeChart = document.createElement('canvas');
  placeChart.setAttribute('id', 'placeChart');
  placeChart.setAttribute('height', '300');
  placeChart.setAttribute('width', '900');
  imageSpot.appendChild(placeChart);

  var canvasEl = document.getElementById('placeChart');
  var context = canvasEl.getContext('2d');

  var data = {
    labels: ["bag", "banana", "bathroom", "boots", "breakfast", "bubblegum", "chair", "cthulhu", "dogDuck", "dragon", "pen", "petSweep", "scissors", "shark", "sweep", "tauntaun", "unicorn", "usb", "waterCan", "wineGlass"],

    datasets: [
      {
        label: "Number of times shown",
        fillColor: "rgba(220,220,220,0.5)",
        strokeColor: "rgba(220,220,220,0.8)",
        highlightFill: "rgba(220,220,220,0.75)",
        highlightStroke: "rgba(220,220,220,1)",
        data: numberTimeClickArray
      },
      {
        label: "number of times image was clicked",
        fillColor: "rgba(151,187,205,0.5)",
        strokeColor: "rgba(151,187,205,0.8)",
        highlightFill: "rgba(151,187,205,0.75)",
        highlightStroke: "rgba(151,187,205,1)",
        data: numberTimeShowArray
      },
      {
        label: "percentage",
        fillColor: "rgba(151,187,205,0.5)",
        strokeColor: "rgba(151,187,205,0.8)",
        highlightFill: "rgba(151,187,205,0.75)",
        highlightStroke: "rgba(151,187,205,1)",
        data: percentArray
      }
    ]
  };

  var myBarChart = new Chart(context).Bar(data);

  function saveDataToStorage() {
    localStorage.setItem('snagData', JSON.stringify(numberTimeClickArray));
    localStorage.setItem('showData', JSON.stringify(numberTimeShowArray));
  }

  function snagDataFromStorage(){
    var snagData = JSON.parse(localStorage.getItem('snagData'));
    if (snagData) {
      numberTimeClickArray = combination(numberTimeClickArray, snagData);
    }
    var showData = JSON.parse(localStorage.getItem('showData'));

    if (showData) {
      numberTimeShowArray = combination(numberTimeShowArray, snagData);
    }
  }
}
