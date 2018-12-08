const vm = new Vue({
    el: '#app',

    data: {
      aboutWord1: '',
      aboutWord2: '',
      aboutWord3: '',
      work1Image: '',
      work2Image: '',
      work3Image: '',
      work4Image: ''
    },

    created : function() {
      var currentURL = window.location.pathname;
 
      if(currentURL.includes("about")){
        this.getData(true);  
      }else{
        this.getData(null); 
      };
       
    },

    methods: {

      getData(e) {
        let targetURL = e ? `./includes/index.php?about` : './includes/index.php';

        fetch(targetURL) // go get the data and bring it back
          .then(res => res.json()) // turn the result into a plain JS object
          .then(data => {
            if (e) {
              this.showText(data); 
          } else {
              this.showImage(data); 
          }
          }) // let's see what we got
          .catch(function (error) {
            console.log(error); // if anything broke, log it to the console
          });
      },

      showText(data) {
       console.log(data)
         this.aboutWord1 = data[0].about_text;
         this.aboutWord2 = data[1].about_text;
         this.aboutWord3 = data[2].about_text;
     },

     showImage(data) {
       this.work1Image = "images/"+data[0].images_url;
       this.work2Image = "images/"+data[2].images_url;
       this.work3Image = "images/"+data[4].images_url;
       this.work4Image = "images/"+data[18].images_url;
   }

    }

    
  });