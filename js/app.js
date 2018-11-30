$(document).foundation()

//TODO: foundation6 sticky nav stops when used in Vue(?)

var body = document.querySelector('body');
var menuBtn = document.querySelector("#menuBtn");

function addClass() {
    body.classList.toggle('overlay-menu-open');
    document.querySelector("#inner").classList.toggle('hidden');
}
  
menuBtn.addEventListener("click",addClass,false);

//**** */Doesn't work when text is defined outside.

var waypoint = new Waypoint({
    element: document.querySelector('.middle-content-section'),
    handler: function(direction) {
    var text = document.querySelector(".text");

      if ( text.classList.contains('hidden') ){
         text.classList.remove('hidden');
      }
      else{
        text.classList.add('hidden');
      }
    
    //   console.log(text);
    //   console.log(text.classList);
    },
    offset: -5
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
      console.log(count)
  setInterval(function() {
    if (i < count) {
        document.querySelector("#inner").style.transform = 'translate3d(0,-' + i + '00%,0)';
        i++;
    }
  }, 800);
 //call when loaded and resized.
  document.addEventListener('DOMContentLoaded', findNCenter);
  window.addEventListener('resize', findNCenter);
  
  