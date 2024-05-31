// // document.querySelector('button').addEventListener('click',soun);//we dont use bracket in function name here because when run the code it call the function
// for (let i = 0; i < document.querySelectorAll('.drum').length; i++) {
//     // const element = array[i];
//     document.querySelectorAll('.drum')[i].addEventListener('click',soun)
//     function soun() {
//         switch (this.innerHTML) {
//             case 'w':
//                 var a = new Audio("sounds/crash.mp3");
//                 a.play();
//                 break;
//             case 'a':
//                 var a = new Audio("sounds/kick-bass.mp3");
//                 a.play();
//                 break;
//             case 's':
//                 var a = new Audio("sounds/snare.mp3");
//                 a.play();
//                 break;
//             case 'd':
//                 var a = new Audio("sounds/tom-1.mp3");
//                 a.play();
//                 break;
//             case 'j':
//                 var a=new Audio('sounds/tom-2.mp3')
//                 a.play();
//                 break;
//             case 'k':
//                 var a=new Audio('sounds/tom-3.mp3')
//                 a.play();
//                 var k = new Audio("sounds/kick-bass.mp3");
//                 k.play();
//                 this.style.color = 'white'
//                 break;
//             case 'l':
//                 var a=new Audio('sounds/tom-4.mp3')
//                 a.play();
//                 break;
//             default:
//                 break;
//         }

//     }
// }
// document.querySelector('button').addEventListener('click',soun);//we dont use bracket in function name here because when run the code it call the function
for (let i = 0; i < document.querySelectorAll('.drum').length; i++) {
    // const element = array[i];
    document.querySelectorAll('.drum')[i].addEventListener('click',function(){
        soun(this.innerHTML);
    buttonanimation(this.innerHTML);
    })

}
document.addEventListener('keypress',function(event){
    soun(event.key);
})
function soun(inner) {
    switch (inner) {
        case 'w':
            var a = new Audio("sounds/crash.mp3");
            a.play();
            break;
        case 'a':
            var a = new Audio("sounds/kick-bass.mp3");
            a.play();
            break;
        case 's':
            var a = new Audio("sounds/snare.mp3");
            a.play();
            break;
        case 'd':
            var a = new Audio("sounds/tom-1.mp3");
            a.play();
            break;
        case 'j':
            var a=new Audio('sounds/tom-2.mp3')
            a.play();
            break;
        case 'k':
            var a=new Audio('sounds/tom-3.mp3')
            a.play();
            var k = new Audio("sounds/kick-bass.mp3");
            k.play();
            this.style.color = 'white'
            break;
        case 'l':
            var a=new Audio('sounds/tom-4.mp3')
            a.play();
            break;
        default:
            break;
    }
}
function buttonanimation(key){
    var presedbtm=document.querySelector("."+key);
    presedbtm.classList.add("pressed");
    setTimeout(function(){
        presedbtm.classList.remove("pressed");
    },100);
}