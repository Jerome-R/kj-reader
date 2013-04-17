/**
 * Router. You define here all your pages. (http://backbonejs.org/#Router)
 */
define([
  'backbone',
  'models/example',
  'views/index',
  'models/test',
  'views/test',
  'models/list_rss',
  'views/list_rss',
  'views/flux_rss'
], function( Backbone, ExampleModel, IndexView, TestModel, TestView, ListModel, ListView, fluxView ) {

  return Backbone.Router.extend({

    routes: {
        '': 'root',
        'test/:id': 'showTest',
        'list_rss/:feed': 'showList',
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
          self.IndexView = new IndexView({model: self.ExampleModel});
          self.IndexView.render();
        }
      });
    },

    showTest: function(id) {
      console.log("Test page!");

      var self = this;

      self.TestModel = new TestModel;

      self.TestModel.fetch({
        error: function() {
            console.log("Oups, il y a eu une erreur !");
        },
        success: function() {
          self.TestView = new TestView({model: self.TestModel});
          self.TestView.render();
        }
      });
    },

    showList: function(feed) {
      console.log("List page!");

      var self = this;

      self.ListModel = new ListModel;

      self.ListModel.fetch({
        error: function() {
            console.log("Oups, il y a eu une erreur !");
        },
        success: function() {
          self.ListView = new ListView({model: self.ListModel});
          self.ListView.render();
        }
      });
    },

    showFlux: function(rss) {
      console.log("RSS page!");

      var self = this;

      self.ListModel = new ListModel;

      self.ListModel.fetch({
        error: function() {
            console.log("Oups, il y a eu une erreur !");
        },
        success: function() {
          self.fluxView = new fluxView({model: self.ListModel});
          self.fluxView.render();
        }
      });
    }

  });
});
