import Component from '@ember/component';

export default Component.extend({
  starred:false, 
  actions:{
    toggle(){
      this.onClick(!this.starred);
      console.log('toggle');
    }
  }
});
