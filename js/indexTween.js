(() =>{

  //tweenMax


var conSec = document.querySelector('#content-section');
var footer = document.querySelector('#footer');
var ps = document.querySelectorAll(".porfworks");
var p1s = document.querySelectorAll(".p1");
var p2s = document.querySelectorAll(".p2");
var ball = document.querySelector(".contactForm");
var arrowD = document.querySelector("#arrowD");

for (var i=0;i<ps.length;i++){
  ps[i].style.visibility = "hidden";
}
  TweenMax.to(arrowD, 0.4, {repeat: -1, yoyo: true,ease: Power1.easeIn, y: 10}); 

var waypoint = new Waypoint({
    element: conSec,
    handler: function(direction) {
    for (var i=0;i<p1s.length;i++){
        p1s[i].style.visibility = "visible";
    }
        TweenMax.from(document.querySelector("#work1"), 1, {y:-100,opacity:0, ease:Power2.easeOut});
        TweenMax.from(document.querySelector("#work2"), 1, {y:100,opacity:0, ease:Power2.easeOut});
        this.destroy();
    },
    offset: 410
  });

  var waypoint = new Waypoint({
    element: conSec,
    handler: function(direction) {
        for (var i=0;i<p1s.length;i++){
            p2s[i].style.visibility = "visible";
        }
        TweenMax.from(document.querySelector("#work3"), 1, {x:-100,opacity:0, ease:Power2.easeOut});
        TweenMax.from(document.querySelector("#work4"), 1, {x:100,opacity:0, ease:Power2.easeOut});
        this.destroy();
    },
    offset: -75
  });

  var waypoint = new Waypoint({
    element: footer,
    handler: function(direction) {
 
  
       TweenMax.from(ball, 0.575, {
        repeat: 2,
        yoyo: true,
        ease: Power1.easeIn,
        scale:2
      });
    
        this.destroy();
    },
    offset: 130
  });



})();