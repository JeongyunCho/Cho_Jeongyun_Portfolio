const vm = new Vue({
    el: '#app',

    data: {
     workTitle: '',
     workDesc: '',
     workVideo: '',
     workVideoDesc: '',
     workImageData : []
    },

    created : function() {
      var currentURL = window.location.pathname;
      if(currentURL.includes("autoApp")){
        this.getData(1);  
      }
      if(currentURL.includes("infuser")){
        this.getData(2);  
      }
      if(currentURL.includes("kimHanbok")){
        this.getData(3);  
      }
      if(currentURL.includes("demoReel")){
        this.getData(4);  
      }
    },

    methods: {

      getData(e) {

        let targetURL = `./includes/index.php?id=${e}`;
        fetch(targetURL) // go get the data and bring it back
          .then(res => res.json()) // turn the result into a plain JS object
          .then(data => {
            // console.log(data);
            //run a function to parse our data
            this.showWorkData(data); // run a function to put the data on the page
          }) // let's see what we got
          .catch(function (error) {
            console.log(error); // if anything broke, log it to the console
          });
      },

      showWorkData(data) {
      //  console.log(data)
         this.workTitle = data[0].works_title;
         this.workDesc = data[0].works_desc;
         this.workVideo = data[0].works_videoUrl;
         this.workVideoDesc = data[0].works_videoDesc;
         for(i=0;i<data.length;i++){
          this.workImageData.push("images/"+data[i].images_url);
         }
        // console.log(this.workImageData);
     },
     //button function change Pic

    }

    
  });
