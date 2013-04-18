/**
 * Example of a view object. (http://backbonejs.org/#View)
 */
define([
  'backbone',
  'handlebars',
  'text!templates/flux_rss.html'
], function( Backbone, Handlebars, IndexTemplate ) {

  return Backbone.View.extend({

    el: '#main',

    template: Handlebars.compile( IndexTemplate ),
    
    initialize: function(){
      this.datas = this.model.toJSON();
      rss = _.where(this.datas, {id: this.options.id});
      console.log(rss[0].rss_url);
    },

    render: function() {
      this.$el.html(this.template(rss));
      $('#divRss').FeedEk({
            FeedUrl: rss[0].rss_url,
            MaxCount: 200
      });
      return this;
    }
  });

});
