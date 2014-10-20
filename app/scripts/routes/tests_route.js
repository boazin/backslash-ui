BackslashUi.TestsRoute = Ember.Route.extend({
    model: function() {
        return this.store.find('test');
    }
});