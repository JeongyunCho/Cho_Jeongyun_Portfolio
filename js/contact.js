(() =>{

    var vue = new Vue({
        el: '#footer',
        data: {
          formOpen: false,
          contactData: {
            name: '',
            email: '',
            title: '',
          }
        },
        methods: {
          resetForm: function () {
            this.contactData = {
              name: '',
              email: '',
              title: '',
         
            }
          },
          cancel: function() {
            this.formOpen = false;
            this.resetForm();
    
          },
          hideCopy: function(){
            var x = window.matchMedia("(max-width: 640px)");
            if (x.matches) { // If mobile size !
              document.querySelector(".footer-bottom").classList.toggle('hiddenContainer');
            }
          }
        }
      });
})();