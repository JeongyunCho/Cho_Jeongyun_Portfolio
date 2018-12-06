

 //variables
 let clickImg = document.querySelectorAll(".clickme"),
     imageBox = document.querySelector("#imgBox"),
     close = document.querySelector("#close"),
     lightBox = document.querySelector("#lightbox"),
     nav = document.querySelector(".openBtn"),
     leftBtn = document.querySelector("#left"),
     rightBtn = document.querySelector("#right"),
      idx=0;

//functions
//imageSwap changes image in lightbox
 imageSwap=(e)=>{
  lightBox.classList.add('open');
  nav.style.visibility='hidden';
  imageBox.src = e.target.src;
  if(e.target.src.slice(-1)!=="m"){
    idx= parseInt(e.target.src.slice(-1)-1);
  }
//  console.log(clickImg[idx].firstChild.src);
 };


  
//button function change Pic
  next=()=>{
  idx++;
  if(idx==5)idx=0;
  imageBox.src = clickImg[idx].firstChild.src;
}

prev=(data)=>{
  idx--;
  if(idx==-1)idx=4;
  imageBox.src = clickImg[idx].firstChild.src;
}


 closeBtn=()=>{
   lightBox.classList.remove('open');
   nav.style.visibility='visible';
 };

 closeClick=(e)=>{
  // console.log(e.target);
if (e.target.id == "lightbox_content") {
  lightBox.classList.remove('open');
nav.style.visibility='visible';
}
};

//eventListeners
for(let i=0; i<clickImg.length; i++){
 clickImg[i].addEventListener("click",imageSwap,false);
}
close.addEventListener("click",closeBtn,false);
lightBox.addEventListener("click",closeClick,false);
leftBtn.addEventListener("click",() => { prev();},false);
rightBtn.addEventListener("click",() => { next();},false);
