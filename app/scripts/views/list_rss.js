/**
 * Example of a view object. (http://backbonejs.org/#View)
 */
define([
  'backbone',
  'handlebars',
  'text!templates/list_rss.html'
], function( Backbone, Handlebars, IndexTemplate ) {

  return Backbone.View.extend({

    el: '#main',

    template: Handlebars.compile( IndexTemplate ),
    
    initialize: function(){
      this.datas = this.collection.toJSON();
      this.datas = _.where(this.datas, {cat_id: this.options.cat_id}) 
      console.log(this.datas);
    },

    render: function() {
      this.$el.html(this.template({items: this.datas}));
      return this;
    }
  });

});