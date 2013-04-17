/**
 * Router. You define here all your pages. (http://backbonejs.org/#Router)
 */
define([
  'backbone',
  'models/example',
  'views/index',
  'models/list_rss',
  'views/list_rss',
  'views/flux_rss',
  'models/flux_rss'
], function( Backbone, ExampleModel, IndexView, ListModel, ListView, fluxView, fluxModel ) {

  return Backbone.Router.extend({

    routes: {
        '': 'root',
        'list_rss/:categorie': 'showList',
        'flux_rss/:rss': 'showFlux',
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
          self.IndexView = new IndexView({collection: self.ExampleModel});
          self.IndexView.render();
        }
      });
    },

    showList: function(categorie) {
      console.log("List page!");

      var self = this;

      self.ListModel = new ListModel;

      self.ListModel.fetch({
        error: function() {
            console.log("Oups, il y a eu une erreur !");
        },
        success: function() {
          self.ListView = new ListView({collection: self.ListModel});
          self.ListView.render();
        }
      });
    },

    showFlux: function(rss) {
      console.log("RSS page!");

      var self = this;

      self.fluxModel = new fluxModel;

      self.fluxModel.fetch({
        error: function() {
            console.log("Oups, il y a eu une erreur !");
        },
        success: function() {
          self.fluxView = new fluxView({collection: self.fluxModel});
          self.fluxView.render();
        }
      });
    },

    showContact: function() {
      console.log("I'm the contact page!");
    }

  });
});
