//click

for (var i = 0; i < document.querySelectorAll(".piano").length; i++) {

  document.querySelectorAll(".piano")[i].addEventListener("click", function() {
    var buttonInnerHTML = this.innerHTML;
    makeSound(buttonInnerHTML);
    buttonAnimation(buttonInnerHTML);
  });

}


//keyboard

function makeSound(key) {
  switch (key) {
    case "q":
      var f3 = new Audio('sounds/f3.mp3');
      f3.play();
      break;
    case "2":
      var gb3 = new Audio('sounds/gb3.mp3');
      gb3.play();
      break;
    case "w":
      var g3 = new Audio('sounds/g3.mp3');
      g3.play();
      break;
    case "3":
      var ab3 = new Audio('sounds/ab3.mp3');
      ab3.play();
      break;
    case "e":
      var a3 = new Audio('sounds/a3.mp3');
      a3.play();
      break;
    case "4":
      var bb3 = new Audio('sounds/bb3.mp3');
      bb3.play();
      break;
    case "r":
      var b3 = new Audio('sounds/b3.mp3');
      b3.play();
      break;
    case "t":
      var c4 = new Audio('sounds/c4.mp3');
      c4.play();
      break;
    case "6":
      var db4 = new Audio('sounds/db4.mp3');
      db4.play();
      break;
    case "y":
      var d4 = new Audio('sounds/d4.mp3');
      d4.play();
      break;
    case "7":
      var eb4 = new Audio('sounds/eb4.mp3');
      eb4.play();
      break;
    case "u":
      var e4 = new Audio('sounds/e4.mp3');
      e4.play();
      break;
    case "i":
      var f4 = new Audio('sounds/f4.mp3');
      f4.play();
      break;
    case "9":
      var gb4 = new Audio('sounds/gb4.mp3');
      gb4.play();
      break;
    case "o":
      var g4 = new Audio('sounds/g4.mp3');
      g4.play();
      break;
    case "0":
      var ab4 = new Audio('sounds/ab4.mp3');
      ab4.play();
      break;
    case "p":
      var a4 = new Audio('sounds/a4.mp3');
      a4.play();
      break;
    case "-":
      var bb4 = new Audio('sounds/bb4.mp3');
      bb4.play();
      break;
    case "[":
      var b4 = new Audio('sounds/b4.mp3');
      b4.play();
      break;
    case "]":
      var c5 = new Audio('sounds/c5.mp3');
      c5.play();
      break;
    default:
      console.log(buttonInnerHTML);

  }
}

document.addEventListener("keydown", function(event) {
  makeSound(event.key);
  buttonAnimation(event.key);
});


//animations

function buttonAnimation(currentKey) {
  var activeButton;
  if (currentKey === "[") {
    activeButton = document.querySelector(".x");
  }

  else if (currentKey === "]") {
    activeButton = document.querySelector(".y");
  }

  else {
    activeButton = document.querySelector(".a" + currentKey);
  }

  activeButton.classList.add("pressed");
  setTimeout(function() {
    activeButton.classList.remove("pressed");
  }, 100);
}
