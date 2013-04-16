/**
 * Router. You define here all your pages. (http://backbonejs.org/#Router)
 */
define([
  'backbone',
  'models/example',
  'views/index'
], function( Backbone, ExampleModel, IndexView ) {

  return Backbone.Router.extend({

    routes: {
        '': 'root',
        'contact': 'showContact'
    },

    initialize: function() {
    },

    root: function() {
      console.log("I'm the homepage! Yikes!");

      // Saving my context
      var self = this;

      // Create a new "ExampleModel" object
      self.ExampleModel = new ExampleModel();

      // Get the datas from my database and set them into my model object
      self.ExampleModel.fetch({
        error: function() {
            console.log('w000t, there\'s an error!');
        },
        success: function() {
          // If I received my datas from the database, I can now instanciate my view
          self.IndexView = new IndexView({model: self.ExampleModel});
          self.IndexView.render();
        }
      });
    },

    showContact: function() {
      console.log("I'm the contact page!");
    }

  });
});
