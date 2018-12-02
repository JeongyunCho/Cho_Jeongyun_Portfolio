(() =>{

//tweenMax

var menuBtn = document.querySelector("#menuBtn");
var logo = document.querySelector("#mainLogo");


//onload

TweenMax.delayedCall(1, myFunction);
function myFunction() {
TweenMax.from(logo, 1, {opacity:0, scale:0, delay:1, ease:Power2.easeOut});
TweenMax.from(menuBtn, 1, {opacity:0, scale:2, delay:2, ease:Power2.easeOut});
}

})();