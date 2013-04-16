/**
 * Example of a view object. (http://backbonejs.org/#View)
 */
define([
  'backbone',
  'handlebars',
  'text!templates/test.html'
], function( Backbone, Handlebars, IndexTemplate ) {

  return Backbone.View.extend({

    el: '#main',

    template: Handlebars.compile( IndexTemplate ),

    render: function() {
      this.$el.html(this.template(this.model.toJSON()));
      return this;
    }
  });

});
