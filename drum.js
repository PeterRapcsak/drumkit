var drums = document.querySelectorAll(".drum");

for (var i = 0; i < drums.length; i++) {

  drums[i].addEventListener("mousedown", function() {

    var butttonInnerHTML = this.innerHTML;

    makeSound(butttonInnerHTML);

    buttonAnimation(butttonInnerHTML);
  });

  drums[i].addEventListener("mouseup", function() {
    for (var i = 0; i < drums.length; i++) {
      drums[i].style.color = "#DA0463";
      drums[i].classList.remove("pressed");
    }
  });
}

document.addEventListener("keydown", function(event) {

    makeSound(event.key);

    buttonAnimation(event.key);
})

document.addEventListener("keyup", function(event) {
  for (var i = 0; i < drums.length; i++) {
    drums[i].style.color = "#DA0463";
    drums[i].classList.remove("pressed");
  }
})
function makeSound(key) {

  switch (key) {
    case "a":
      drums[0].style.color = "white";
      var tom1 = new Audio('sounds/tom-1.mp3');
      tom1.play();
      break;
    case "s":
      drums[1].style.color = "white";
      var tom2 = new Audio('sounds/tom-2.mp3');
      tom2.play();
      break;
    case "d":
      drums[2].style.color = "white";
      var tom3 = new Audio('sounds/tom-3.mp3');
      tom3.play();
      break;
    case "f":
      drums[3].style.color = "white";
      var tom4 = new Audio('sounds/tom-4.mp3');
      tom4.play();
      break;
    case "j":
      drums[4].style.color = "white";
      var snare = new Audio('sounds/snare.mp3');
      snare.play();
      break;
    case "k":
      drums[5].style.color = "white";
      var crash = new Audio('sounds/crash.mp3');
      crash.play();
      break;
    case "l":
      drums[6].style.color = "white";
      var kick = new Audio('sounds/kick-bass.mp3');
      kick.play();
      break;
    case "é":
      drums[7].style.color = "white";
      var bass = new Audio('sounds/bass.mp3');
      bass.play();
      break;

    default:console.log(this.innerHTML)

  }
}

function buttonAnimation(currentKey) {
  var activeButton = document.querySelector("." + currentKey);
  activeButton.classList.add("pressed");
}
