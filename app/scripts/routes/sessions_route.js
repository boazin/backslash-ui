BackslashUi.SessionsRoute = Ember.Route.extend({
    model: function() {
        return this.store.find('session');
    }
});

