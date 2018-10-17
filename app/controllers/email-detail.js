import Controller from '@ember/controller';

export default Controller.extend({
  actions:{
    deletePost(model){
      let confirmed = window.confirm(
        "Are you sure you want to delete this email?"
      );
      if (confirmed){
        model.destroyRecord().then(() => {
        this.transitionToRoute('index');
      });
      }
    }
  }
});
