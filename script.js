console.log("Hallo Winc Academy Studenten");

// Opdracht 1
const btn = document.querySelector("#mybutton");

btn.addEventListener('click', function(){

  const clickButton = alert("button clicked");

});

/*
// Opdracht 2
const bgbtnChange = document.querySelector('#background-button');

bgbtnChange.addEventListener('click', function(){

  bgbtn.classList.add('red-background');

});
*/

// Opdracht 3
const bgbtnToggle = document.querySelector('#background-button');

bgbtnToggle.addEventListener('click', function(){

  bgbtnToggle.classList.toggle('red-background');

});



