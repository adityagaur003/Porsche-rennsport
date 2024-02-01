var buttonNumber = document.querySelectorAll(".drum").length;

for(var i = 0; i < buttonNumber; i++ ){
    document.querySelectorAll(".drum")[i].addEventListener("click", function(){
        let drumSounds = this.innerHTML;
        switch(drumSounds){
            case "w":
            let tom1 = new Audio("sounds/tom-1.mp3")
            tom1.play();
            break;
            case "a":
            let tom2 = new Audio("sounds/tom-2.mp3");
            tom2.play();
                break;
            
            case "s":
                let tom3 = new Audio("sounds/tom-3.mp3");
                tom3.play();
                    break;
            
             case "d":
                 let tom4 = new Audio("sounds/tom-4.mp3");
                tom4.play();
                break;
            
                case "j":
                   let tom5 = new Audio("sounds/crash.mp3");
                   tom5.play();
                      break;
                case "k":
                    let tom6 = new Audio("sounds/kick-bass.mp3");
                    tom6.play();
                     break;
                case "l":
                    let tom7 = new Audio("sounds/snare.mp3");
                    tom7.play();
                    break;
                                                                        

        }
    });
} xvsJHGVgit 