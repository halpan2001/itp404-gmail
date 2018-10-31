import Component from '@ember/component';

export default Component.extend({
  actions:{
    star(email, newValue){
      email.set('starred', newValue);
      email.save();
      console.log("clicked");
    }
  }
});
