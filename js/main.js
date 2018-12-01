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
          }
        }
      });
})();