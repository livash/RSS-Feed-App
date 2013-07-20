NewReader.Views.EntryShow = Backbone.View.extend({
	template: JST['entries/entry'],
	
	render: function() {
		var renderedContent = this.template({
			entry: this.model
		});
		
		this.$el.html(renderedContent);
		return this;
	},
});