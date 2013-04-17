/**
 * Example of a collection. (http://backbonejs.org/#Collection)
 */
define([
    'backbone',
    'models/flux_rss'
], function( Backbone, Rss ) {

  return Backbone.Collection.extend({
    url: '/api/all_rss',
    model: Rss
  });
});
