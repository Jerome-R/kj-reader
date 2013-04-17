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
      console.log(this.datas);
    },

    render: function() {
      this.$el.html(this.template(this.model.toJSON()));
      $('#divRss').FeedEk({
            FeedUrl: this.datas[1].rss_url,
            MaxCount: 3
      });
      return this;
    }
  });

});
