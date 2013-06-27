window.NewReader = {
  Models: {},
  Collections: {},
  Views: {},
  Routers: {},
  Store: {},
  initialize: function() {
    //alert('Hello from Backbone!');
	NewReader.Store.feeds = new NewReader.Collections.Feeds();
	var $rootEl = $('#content');
	NewReader.Store.feeds.fetch({
		success: function() {
			console.log("success");
			var router = new NewReader.Routers.Feeds($rootEl, NewReader.Store.feeds);
			Backbone.history.start();
		}
	});
  }
};

$(document).ready(function(){
  NewReader.initialize();
});
