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
		indexView.collection = this.feeds;
		this.$rootEl.html(indexView.render().$el);
	},

});
