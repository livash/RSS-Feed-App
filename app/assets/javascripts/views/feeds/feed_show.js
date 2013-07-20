NewReader.Views.FeedsShow = Backbone.View.extend({
  template: JST['feeds/feed'],
  
  events: {
	  'click button#refresh': 'refreshFeed',
  },
  
  render: function() {
	  console.log(this.model.attributes.entries);
	  var renderedContent = this.template({ 
		  feed: this.model,
		  entries: this.model.entries
	  });
	  
	  this.$el.html(renderedContent);
	  return this;
  },
  
  refreshFeed: function(event) {
	  var self = this;
	  var id = $(event.target).data('id');
	  var feed = NewReader.Store.feeds.findWhere({id: id});
	  feed.fetch({
		  success: function() {
			  self.render();
		  }
	  });
  }

});