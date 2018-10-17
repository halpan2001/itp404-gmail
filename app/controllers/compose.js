import Controller from '@ember/controller';

export default Controller.extend({
  actions: {
    createPost(event){
      event.preventDefault(); //prevent the page refresh
      //read the inputs
      // console.log(this.title, this.body);

      //create a post model
      let post = this.store.createRecord('email', {
        to: this.to,
        from: this.from,
        subject: this.subject,
        message: this.message
      });

      //save post model to the server and redirect to index page
      post.save().then(() => {
        // this.transitionToRoute('index');
        this.transitionToRoute('index');
      });
    }
  }
});
