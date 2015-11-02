var App = {
	Models: {},
	Views: {},
	Router: null
};

App.Models.FormPage = Backbone.Model.extend({
	defaults: {
		category: null,
		bodyPart: null,
		firstName: null,
		lastName: null,
		description: null,
		image: null,
		userid: null,
		firstName: null,
		lastName: null,
		email: null
	}
});

App.Views.FormPage = Backbone.View.extend({
	
	events: {
		"click .js-fieldset .js-next": "navigate",
		"click .js-fieldset .js-back": "navigate",
		"click .js-fieldset .js-submit": "submit"
	},

	navigate: function(e) {
		var classBase = ".js-fieldset.js-";
		var goTo = classBase + $(e.currentTarget).data("goto");
		var goFrom = classBase + $(e.currentTarget).data("gofrom");
		$(goFrom).addClass("hidden");
		$(goTo).removeClass("hidden");
	},

	submit: function(e) {
		this.model.set("category", $(".js-form input[name=interest]:checked").val());
		this.model.set("bodyPart", $(".js-form input[name=body-part]:checked").val());
		this.model.set("firstName", $(".js-form input[name=first-name").val());
		this.model.set("lastName", $(".js-form input[name=surname").val());
		this.model.set("email", $(".js-form input[name=email").val());
		console.log(this.model.toJSON());
		// TODO : submit to api - firstName, lastName, email
	}

});

var formView = new App.Views.FormPage({ model: new App.Models.FormPage(), el: document.body });
