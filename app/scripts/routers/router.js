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
        'flux_rss/:rss': 'showFlux'
    },

    initialize: function() {
    },

    root: function() {
      console.log("I'm the homepage! Yikes!");

      var self = this;

      self.ExampleModel = new ExampleModel();

      self.ExampleModel.fetch({
        error: function() {
            console.log("Oups, il y a eu une erreur !");
        },
        success: function() {
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
    }

  });
});
