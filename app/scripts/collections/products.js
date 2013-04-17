/**
 * Example of a collection. (http://backbonejs.org/#Collection)
 */
define([
    'backbone',
    'models/flux_rss'
], function( Backbone, Product ) {

  return Backbone.Collection.extend({
    url: '/api/products'+ this.get("id"),
    model: Product
  });
});
