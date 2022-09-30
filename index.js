var numberOfDrumButtons = document.querySelectorAll(".drum").length;
for(var i=0;i<numberOfDrumButtons;i++){
document.querySelectorAll(".drum")[i].addEventListener("click",clickToResponse);

function clickToResponse(){

// sound make by clicking
var buttoninnerHTML=this.innerHTML;

makeSound(buttoninnerHTML);
buttonAnimation(buttoninnerHTML);
                                                                                                                             
}
}

// sound gets by keypressing.
document.addEventListener("keypress",function(event){
    makeSound(event.key);
    buttonAnimation(event.key);

});

function makeSound(key){

    switch (key) {
        case "w":
        var snare = new Audio("sounds/snare.mp3");
        snare.play();
        break;
        case "a":
        var kick= new Audio("sounds/kick-bass.mp3");
        kick.play();
        break;
        case "s":
         var tom1 = new Audio("sounds/tom-1.mp3");
         tom1.play();
         break;
         case "d":
           var tom2 = new Audio("sounds/tom-2.mp3");
          tom2.play();
         break;
          case "j":
         var tom3 = new Audio("sounds/tom-3.mp3");
         tom3.play();
         break;
         case "k":
         var tom4 = new Audio("sounds/tom-4.mp3");
         tom4.play();
         break;
         case "l":
        var  crash = new Audio("sounds/crash.mp3");
        crash.play();
        break;
        default:
        break;
    }     
}

 function buttonAnimation(currenkey){

var activeButton = document.querySelector("." +currenkey);
activeButton.classList.add("pressed");

setTimeout(function(){

activeButton.classList.remove("pressed");

},100);

 }


