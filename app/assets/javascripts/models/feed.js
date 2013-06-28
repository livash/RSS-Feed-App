NewReader.Models.Feed = Backbone.Model.extend({
	parse: function(resp) {
		var self = this;
		var entries = resp.entries;
		self.entries = new NewReader.Collections.Entries();
		_(entries).each(function (entry) {
			self.entries.add(new NewReader.Models.Entry(entry));	
		});
		return resp;
	},
	
	toJSON: function() {
		var copy = _.clone(this.attributes);
		copy.entries = {};
		return copy;
	}
});
