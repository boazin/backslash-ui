BackslashUi.SessionRoute = Ember.Route.extend({
    model: function(params) {
        return this.get('store').find('session', params.session_id);
    },

    afterModel: function(model) {
        var testsController = this.controllerFor('tests');
        var promise = this.get('store').find('test', {
            sessionId: model.get('id')
        });
        return promise.then(function(tests) {
            console.log(tests);
            testsController.set('model', tests);
        });
    }
});
