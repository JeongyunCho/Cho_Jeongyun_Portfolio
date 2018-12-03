(() =>{
//header
//tweenMax Logo
const logo = document.querySelector("#mainLogo"); 
function rotateLogo(){
  TweenMax.to(logo, 0.4, {rotation:180,opacity:0.9, scale:0.9, delay:0.1, ease:Power2.easeOut});
}
  logo.addEventListener("mouseover",rotateLogo,false);
//TODO: foundation6 sticky nav stops when used in Vue(?)

var body = document.querySelector('body');
var menuBtn = document.querySelector("#menuBtn");
var contactNavBtn = document.querySelector("#contactNav");

function addClassMenu() {
    body.classList.toggle('overlay-menu-open');
    document.querySelector(".hideOn").classList.toggle('hiddenContainer');
    document.querySelector(".hideOn2").classList.toggle('hiddenContainer');
  
}

menuBtn.addEventListener("click",addClassMenu,false);
contactNavBtn.addEventListener("click",addClassMenu,false);
//**** */Doesn't work when text is defined outside.
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
  
  
})();