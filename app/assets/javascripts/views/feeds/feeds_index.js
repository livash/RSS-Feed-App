NewReader.Views.FeedsIndex = Backbone.View.extend({
  tagName: 'ul',
  template: JST['feeds/index'],
  
  events: {
	  "click button": "newFeed"
  },
  
  render: function() {
	  console.log("In the index");
	  var renderedContent = this.template({ 
		  feeds: this.collection 
	  });
	  
	  this.$el.html(renderedContent);
	  return this;
  },
  
  newFeed: function(event) {
	  event.preventDefault();
	  var attrs = $(event.target.form).serializeJSON();
	  var feed = new NewReader.Models.Feed(attrs);
	  feed.entries = new NewReader.Collections.Entries();
	  this.collection.create(feed);
	  this.render();
  }

});
