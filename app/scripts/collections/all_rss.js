/**
 * Example of a collection. (http://backbonejs.org/#Collection)
 */
define([
    'backbone',
    'models/all_rss'
], function( Backbone, Allrss ) {

  return Backbone.Collection.extend({
    url: '/api/' + this.get("id"),
    model: Allrss
  });
});
