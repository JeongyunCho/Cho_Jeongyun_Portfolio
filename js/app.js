$(document).foundation()

//tweenMax Logo
const logo = document.querySelector("#mainLogo"); 
function rotateLogo(){
  TweenMax.to(logo, 0.4, {rotation:180,opacity:0.9, scale:0.9, delay:0.1, ease:Power2.easeOut});
}
  logo.addEventListener("mouseover",rotateLogo,false);
//TODO: foundation6 sticky nav stops when used in Vue(?)

var body = document.querySelector('body');
var menuBtn = document.querySelector("#menuBtn");

function addClass() {
    body.classList.toggle('overlay-menu-open');
    document.querySelector("#inner").classList.toggle('hidden');
}
  
menuBtn.addEventListener("click",addClass,false);

//**** */Doesn't work when text is defined outside.

// var waypoint = new Waypoint({
//     element: document.querySelector('.middle-content-section'),
//     handler: function(direction) {
//     var text = document.querySelector(".text");

//       if ( text.classList.contains('hidden') ){
//          text.classList.remove('hidden');
//       }
//       else{
//         text.classList.add('hidden');
//       }
    
//     //   console.log(text);
//     //   console.log(text.classList);
//     },
//     offset: -5
// });

var waypoint = new Waypoint({
      element: document.querySelector('.middle-content-section'),
      handler: function(direction) {
      const nameAnim = document.querySelector("#name").querySelector("a");
      const logo = document.querySelector("#mainLogo");
      //console.log(nameAnim);  
      if ( nameAnim.classList.contains('colorChangeYellow') ){
      nameAnim.classList.remove('colorChangeYellow');
      logo.classList.remove('rotateLeft');
      }else{
        nameAnim.classList.add('colorChangeYellow');
        logo.classList.add('rotateLeft');
      }
      },
      offset: 100
  });
  

//my name ~ animation.
//find center
var findNCenter = function() {
    var elems = document.querySelectorAll('.center-vertical');
  
    for(var i =0; i<elems.length; i++) {
      elems[i].style.marginTop = (elems[i].parentNode.offsetHeight - elems[i].offsetHeight)/2 + 'px';
    }
  };
 //rotate with translate3d 
    var count = document.querySelector("#inner").querySelectorAll('p').length;
    var i = 1;
     // console.log(count)
  setInterval(function() {
    var overlay = document.querySelector("#overlay");
    if (i < count) {
        document.querySelector("#inner").style.transform = 'translate3d(0,-' + i + '00%,0)';
        i++;
    }else{
        overlay.classList.remove('transparent');
       // console.log("worked!");
    }
  }, 800);
 //call when loaded and resized.
  document.addEventListener('DOMContentLoaded', findNCenter);
  window.addEventListener('resize', findNCenter);
  
  