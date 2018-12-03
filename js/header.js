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
    var hideOn = document.querySelector(".hideOn");
    var ps = document.querySelectorAll(".porfworks");

    function addClassMenu() {
        var hideOn2 = document.querySelector(".hideOn2");
        var hideOn3 = document.querySelector(".hideOn3");
        body.classList.toggle('overlay-menu-open');
        hideOn.classList.toggle('hiddenContainer');
        hideOn2.classList.toggle('hiddenContainer');
        hideOn3.classList.toggle('hiddenContainer');
        if ( hideOn.classList.contains('hiddenContainer') ){
            for (var i=0;i<ps.length;i++){
                ps[i].style.visibility = "hidden";
            }
        }else{
            for (var i=0;i<ps.length;i++){
                ps[i].style.visibility = "visible";
            }
        }
       
    };
    
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


      //TweenMax
      var menuBtn = document.querySelector("#menuBtn");
    

      //onload

        TweenMax.delayedCall(1, myFunction);
        
        function myFunction() {
        TweenMax.from(logo, 1, {opacity:0, scale:0, delay:0.5, ease:Power2.easeOut});
        TweenMax.from(menuBtn, 1, {opacity:0, scale:2, delay:1, ease:Power2.easeOut});
        }
      
      
    })();