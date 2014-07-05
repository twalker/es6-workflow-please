import Backbone from './backbone-extended'
//export var v = new V({collection: c})

var c = new Backbone.Collection([
  {id:1, s: 'Back'},
  {id:2, s: 'bone'}
]);

var V = Backbone.View.extend({
  speak: function(){
    return this.collection.pluck('s').join('');
  }
});
export default new V({collection: c})
//export default {speak: function(){ return "foo"}}