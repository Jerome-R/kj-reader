/**
 * Example of a model. (http://backbonejs.org/#Model)
 */
define([
  'backbone'
], function( Backbone ) {

  return Backbone.Model.extend({
    // Everytime you create a new model, you have by default these attributes
    defaults: {
      'title': 'I\m a title!'
    }
    urlRoot: '/api/model.json'
  });
});