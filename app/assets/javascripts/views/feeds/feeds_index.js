NewReader.Views.FeedsIndex = Backbone.View.extend({
  tagName: 'ul',
  template: JST['feeds/index'],
  
  render: function() {
	  console.log("In the index");
	  var renderedContent = this.template({ 
		  feeds: this.collection 
	  });
	  
	  this.$el.html(renderedContent);
	  return this;
  },

});
