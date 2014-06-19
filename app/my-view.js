//import $ from 'jquery'
import Backbone from 'backbone'

var MyView = Backbone.View.extend({
  tagName: 'section',

  initialize: function(){
    console.log('MyView initialized', Backbone.VERSION, Backbone.$.prototype.jquery)
  },
  render: function(){
    this.$el.text('hello backbone view')
    document.body.appendChild(this.el);
    return this;
  }
});

export {MyView};