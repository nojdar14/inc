// INCREMENTING VARIABLES & RANDOM VALUES

// 1. Saving elements as variables cleans up your code.
var counter = 0;
var story = "Once upon a time, ";
var minus50Btn = document.getElementById("minus50");
var displayEl = document.getElementById("display");
var minus10Btn = document.getElementById("minus10");
var minus1Btn = document.getElementById("minus1");
var add1Btn = document.getElementById("plus1");
var add10Btn = document.getElementById("plus10");
var add50Btn = document.getElementById("plus50");
var stringInEl = document.getElementById("strIn");
var storyEl = document.getElementById("strOut");
var roundBtn1 = document.getElementById("rand1");
var roundBtn2 = document.getElementById("rand2");
var roundBtn3 = document.getElementById("rand3");
var roundBtn4 = document.getElementById("rand4");
var randcolour = document.getElementById("random-rgb");

var h1 = document.getElementById("h1");
var h2 = document.getElementById("h2");
var p = document.getElementById("p");
var picBtn = document.getElementById("pic-btn");
var picContainer = document.getElementById("pic-container");
var randomSize = document.getElementById("random-size");
var reset = document.getElementById("reset");

minus50Btn.addEventListener("click", minus50fcn);
minus10Btn.addEventListener("click", minus10fcn);
minus1Btn.addEventListener("click", minus1fcn);
add1Btn.addEventListener("click", add1fcn);
add10Btn.addEventListener("click", add10fcn);
add50Btn.addEventListener("click", add50fcn);
stringInEl.addEventListener("change", updateStory);

// 2. Incrementing. The ++, --, +=, and -= operators are used to update variables without losing what was there before
//Event function
function minus50fcn() {
  //Update the value of the counter
  counter = counter - 50;
  console.log(counter);

  //Use the counter to update the website
  displayEl.innerHTML = counter;
}
function minus10fcn() {
  //Update counter
  counter -= 10;
  //Update site
  displayEl.innerHTML = counter;
}
function minus1fcn() {
  counter--;

  displayEl.innerHTML = counter;
}
function add1fcn() {
  //Update counter
  counter++;
  //Update site
  displayEl.innerHTML = counter;
}
function add10fcn() {
  counter += 10;
  displayEl.innerHTML = counter;
}
function add50fcn() {
  counter += 50;
  displayEl.innerHTML = counter;
}
// 3. The += operator also works to update strings. Also, the "change" event can remove the need for buttons!
function updateStory() {
  //Save the users word to a variable
  var word = stringInEl.value;
  //update the story
  story += word + " ";

  //Clear the input field
  stringInEl.value = " ";
  //update the site to show story
  storyEl.innerHTML = story;
}
// 4. Math.random() is used to bring RNG (random number generator) to your applications.
roundBtn1.addEventListener("click", round1);
roundBtn2.addEventListener("click", round2);
roundBtn3.addEventListener("click", round3);

function round3() {
  var rand = Math.random() * (5 - -5) + -5;
  rand = Math.round(rand);
  document.getElementById("rand3-out").innerHTML = rand;
}

function round2() {
  let rand = Math.random() * 100;
  rand = Math.round(rand);
  document.getElementById("rand2-out").innerHTML = rand;
}

function round1() {
  //Create random dec 0 - 1
  let rand = Math.random();
  //Round to 3 dec places
  rand = rand.toFixed(3);

  //Update the site
  document.getElementById("rand1-out").innerHTML = rand;
}
// Check your understanding
// 1. Complete the rest of the incrementing buttons.
// 2. Complete the random __ to __ button.
// 3. Complete the Random Size button. This button should change the font size of all text in the body to a value between 0 and 75
// 4. Complete the Random Color button. This should change the html background to a random rgb color.  Hint:  `rgb(34, 245, 128)` is a value rgb color, where the numbers each range from 0 to 255. You will need three random numbers, then you will need to create a string using those numbers.

// i.e.  var rgbString = `rgb(34, 245, 128)`;
//       document.getElementById('HTML').style.background = rgbString

// Your job is to make the values random in the above code snippet.

// 4. Code the reset button. This will reset all variables back to initial values and clear out all input fields and reset span boxes back to dashes. It's like refresing the page without actually refreshing the page.

picBtn.addEventListener("click", addCandy);

function addCandy() {
  picContainer.innerHTML +=
    "<img width= '50px' src='IMG/81OtiQqInnL._AC_SL1500_.jpg'>";
}
randomSize.addEventListener("click", growSize);

function growSize() {
  var font = Math.random() * (100 - 0) + 0;
  font = Math.round(font);
  console.log(font);
  font = font + "px";
  document.getElementById("body").style.fontSize = font;
}

randcolour.addEventListener("click", colour);

function colour() {
  var R = Math.random() * (244 - 0) + 0;
  R = Math.round(R);
  var G = Math.random() * (244 - 0) + 0;
  G = Math.round(G);
  var B = Math.random() * (244 - 0) + 0;
  R = Math.round(B);
  console.log(B);

  document.getElementById("HTML").style.background = `rgb(${R}, ${G}, ${B})`;
}

reset.addEventListener("click", resetp);

function resetp() {
  counter = 0;
  displayEl.innerHTML = counter;
  story = "Once upon a time, ";
  storyEl.innerHTML = story;
  document.getElementById("rand1-out").innerHTML = "----------";
  document.getElementById("rand2-out").innerHTML = "----------";
  document.getElementById("rand3-out").innerHTML = "----------";
  document.getElementById("rand4-out").innerHTML = "----------";
  document.getElementById("HTML").style.background = "#9ae4c8";
  document.getElementById("h1").style.fontSize = 21 + "px";
  document.getElementById("h2").style.fontSize = 18 + "px";
  document.getElementById("h23").style.fontSize = 18 + "px";
  document.getElementById("h24").style.fontSize = 18 + "px";
  document.getElementById("p").style.fontSize = 16 + "px";
  document.getElementById("p2").style.fontSize = 16 + "px";
  document.getElementById("p3").style.fontSize = 16 + "px";
}

roundBtn4.addEventListener("click", round4);

function round4() {
  var input1 = Number(document.getElementById("rand-in1").value);
  var input2 = Number(document.getElementById("rand-in2").value);
  input1 = Math.round(input1);
  input2 = Math.round(input2);

  var randto = Math.random() * (input2 - input1);
  randto = Math.round(randto);
  document.getElementById("rand4-out").innerHTML = randto;
}
