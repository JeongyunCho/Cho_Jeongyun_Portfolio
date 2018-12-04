 //variables
 let clickImg = document.querySelectorAll(".clickme"),
     imageBox = document.querySelector("#imgBox"),
     close = document.querySelector("#close"),
     lightBox = document.querySelector("#lightbox"),
     nav = document.querySelector(".openBtn"),
     name = document.querySelector("#name"),
     desc = document.querySelector("#desc"),
     leftBtn = document.querySelector("#left"),
     rightBtn = document.querySelector("#right"),
     idx=0;

//functions
//imageSwap changes image in lightbox
 imageSwap=(e)=>{
  lightBox.classList.add('open');
  nav.style.visibility='hidden';
  imageBox.src = e.target.src;
  nameSwap(portfolioData);
  textSwap(portfolioData);
 };


  nameSwap=(data)=>{
    if (imageBox.src.match("cho")){
      idx=0;
    }else{
      idx=1;
    }
    name.innerText=data.arrName[idx];
  }
  textSwap=(data)=>{
    if (imageBox.src.match("cho1")){
      idx=0;
    }
    if (imageBox.src.match("cho2")){
      idx=1;
    }
    if (imageBox.src.match("andrino1")){
      idx=2;
    }
    if (imageBox.src.match("andrino2")){
      idx=3;
    }
    if (imageBox.src.match("andrino3")){
      idx=4;
    }
    
    desc.innerText=data.arrText[idx];  
}
//button function change Pic
  next=(data)=>{
  idx++;
  if(idx==5)idx=0;
  imageBox.src = "images/"+data.imgArr[idx]+".png";
  nameSwap(portfolioData);
  textSwap(portfolioData);
}

prev=(data)=>{
  idx--;
  if(idx==-1)idx=4;
  imageBox.src = "images/"+data.imgArr[idx]+".png";
  nameSwap(portfolioData);
  textSwap(portfolioData);
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
leftBtn.addEventListener("click",() => { prev(portfolioData);},false);
rightBtn.addEventListener("click",() => { next(portfolioData);},false);
