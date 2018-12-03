(() =>{
//**** */Doesn't work when text is defined outside.

var waypoint = new Waypoint({
    element: document.querySelector('.middle-content-section'),
    handler: function(direction) {
    var text = document.querySelector(".textA");
    var bar = document.querySelector("#worksTB");
      if ( text.classList.contains('hiddenT') ){
         text.classList.remove('hiddenT');
        bar.classList.add('widthF');
      }
      else{
        text.classList.add('hiddenT');
        bar.classList.remove('widthF');
      }
    },
    offset: 600
  });

var waypoint2 = new Waypoint({
  element: document.querySelector('.middle-content-section'),
  handler: function(direction) {
    // console.log("fired");
  var bar = document.querySelector("#worksTB");
    if ( bar.classList.contains('widthF2') ){
      bar.classList.remove('widthF2');
    }
    else{
      bar.classList.add('widthF2');
    }
  },
  offset: 350
});



})();