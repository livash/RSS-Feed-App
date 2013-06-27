NewReader.Views.FeedsShow = Backbone.View.extend({
  template: JST['feeds/feed'],
  
  render: function() {
	  console.log("In the show feed ");
	  console.log(this.model.attributes.entries);
	  var renderedContent = this.template({ 
		  feed: this.model,
		  entries: this.model.attributes.entries
	  });
	  
	  this.$el.html(renderedContent);
	  return this;
  },

});