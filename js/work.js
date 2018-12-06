(() =>{
var waypoint2 = new Waypoint({
  element: document.querySelector('#main-content-section'),
  handler: function(direction) {
    // console.log("fired");
  var bar = document.querySelector(".widthUnF");
    if ( bar.classList.contains('widthUnF2') ){
      bar.classList.remove('widthUnF2');
    }
    else{
      bar.classList.add('widthUnF2');
    }
  },
  offset: 200
});



})();