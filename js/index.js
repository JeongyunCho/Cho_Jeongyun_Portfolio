(() =>{

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
  
})();