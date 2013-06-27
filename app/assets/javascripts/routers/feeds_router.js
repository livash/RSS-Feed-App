NewReader.Routers.Feeds = Backbone.Router.extend({
	initialize: function($rootEl, feeds) {
		this.$rootEl = $rootEl;
		this.feeds = feeds;
	},
	
	routes: {
		"": "index",
		"feed/:id": "show",
	},
	
	index: function() {
		var indexView = new NewReader.Views.FeedsIndex();
		console.log(this.feeds);
		indexView.collection = this.feeds;
		this.$rootEl.html(indexView.render().$el);
	},

	show: function(id) {
		var feed = this.feeds.findWhere({id: parseInt(id)});
		var feedView = new NewReader.Views.FeedsShow();
		feedView.model = feed;
		this.$rootEl.html(feedView.render().$el);
	},
});
