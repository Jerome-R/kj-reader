/**
 * Example of a view object. (http://backbonejs.org/#View)
 */
define([
  'backbone',
  'handlebars',
  'text!templates/index.html'
], function( Backbone, Handlebars, IndexTemplate ) {

  return Backbone.View.extend({

    // This is the access point. My view will be linked to #main in the html.
    el: '#main', // = $('#main')

    template: Handlebars.compile( IndexTemplate ),

    render: function() {
      this.$el.html(this.template(this.model.toJSON()));
      return this;
    }
  });

});
