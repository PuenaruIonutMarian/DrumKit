
// //OPTION 1:

// Detecting Button Press:
var drums = document.querySelectorAll(".drum");

drums.forEach(function (drum) {
  drum.addEventListener("click", function () {
    var buttonInnerHtml = this.innerHTML;
    makeSound(buttonInnerHtml);
    buttonAnimation(buttonInnerHtml);
  });
});

// Detecting Keyboard press:
document.addEventListener("keydown", function (event) {
  var key = event.key;
  makeSound(key);
  buttonAnimation(key);
});

function makeSound(key) {
  var audioFile = {
    w: "crash",
    a: "kick-bass",
    s: "snare",
    d: "tom-1",
    j: "tom-2",
    k: "tom-3",
    l: "tom-4",
  };

  var sound = new Audio("./sounds/" + audioFile[key] + ".mp3");
  sound.play();
}

function buttonAnimation(currentKey) {
  var activeButton = document.querySelector("." + currentKey);
  activeButton.classList.add("pressed");
  setTimeout(function () {
    activeButton.classList.remove("pressed");
  }, 100);
}







//OPTION 2:

//Detecting Button Press:

// for (var i = 0; i < document.querySelectorAll(".drum").length; i++) 
// {
//     document.querySelectorAll(".drum")[i].addEventListener("click", function () 
//     {
//         var buttonInnerHtml = this.innerHTML;
//         makeSound(buttonInnerHtml);
//         buttonAnimation(buttonInnerHtml);
//     });
// }



// //Detecting Keyboard press:

// document.addEventListener("keydown", function(event){
//     makeSound(event.key);
//     buttonAnimation(event.key);
// });


// function makeSound(key){
//         switch (key) {
//             case "w":
//                 var crash = new Audio("./sounds/crash.mp3");
//                 crash.play()
//                 break;
//             case "a":
//                 var kick = new Audio("./sounds/kick-bass.mp3");
//                 kick.play()
//                 break;
//             case "s":
//                 var snare = new Audio("./sounds/snare.mp3");
//                 snare.play()
//                 break;
//             case "d":
//                 var tom1 = new Audio("./sounds/tom-1.mp3");
//                 tom1.play()
//                 break;
//             case "j":
//                 var tom2 = new Audio("./sounds/tom-2.mp3");
//                 tom2.play()
//                 break;
//             case "k":
//                 var tom3 = new Audio("./sounds/tom-3.mp3");
//                 tom3.play()
//                 break;
//             case "l":
//                 var tom4 = new Audio("./sounds/tom-4.mp3");
//                 tom4.play()
//                 break;
//             default:
//                 console.log(buttonInnerHtml);
//         }
// }

// function buttonAnimation(currentKey){
//    var activeButton =  document.querySelector("."+currentKey);
//    activeButton.classList.add("pressed");
//    setTimeout(function(){
//     activeButton.classList.remove("pressed");
//    }, 100);
// }





//OPTION 3

// var drumElements = document.querySelectorAll(".drum");

// var audioFiles = {
//   "w": "./sounds/crash.mp3",
//   "a": "./sounds/kick-bass.mp3",
//   "s": "./sounds/snare.mp3",
//   "d": "./sounds/tom-1.mp3",
//   "j": "./sounds/tom-2.mp3",
//   "k": "./sounds/tom-3.mp3",
//   "l": "./sounds/tom-4.mp3"
// };

// document.addEventListener("keydown", function(event) {
//   var keyPressed = event.key.toLowerCase();
//   if (audioFiles.hasOwnProperty(keyPressed)) {
//     var audio = new Audio(audioFiles[keyPressed]);
//     audio.play();
//   } else {
//     console.log(keyPressed);
//   }
// });

// for (var i = 0; i < drumElements.length; i++) {
//   drumElements[i].addEventListener("click", function() {
//     var buttonInnerHtml = this.innerHTML.toLowerCase();
//     if (audioFiles.hasOwnProperty(buttonInnerHtml)) {
//       var audio = new Audio(audioFiles[buttonInnerHtml]);
//       audio.play();
//     } else {
//       console.log(buttonInnerHtml);
//     }
//   });
// }

