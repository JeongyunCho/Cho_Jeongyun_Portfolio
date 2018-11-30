$(document).foundation()
//TODO:stops foundation6 sticky nav when used on Vue
var body = document.querySelector('body');
var menuBtn = document.querySelector("#menuBtn");

function addClass() {
    body.classList.toggle('overlay-menu-open');
}
  
menuBtn.addEventListener("click",addClass,false);

//**** */Doesn't work when text is defined outside.
var waypoint = new Waypoint({
    element: document.querySelector('.middle-content-section'),
    handler: function(direction) {
        var text = document.querySelector(".text");
    //   console.log('Scrolled to waypoint!');
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

// $(function() {
//     var text = $(".text");
 
//     $(window).scroll(function() {
//       var scroll = $(window).scrollTop();
  
//       if (scroll >= 100) {
//         text.removeClass("hidden");
//         console.log(text);
//       } else {
//         text.addClass("hidden");
//         console.log(text);
//       }
//     });
//   });
  