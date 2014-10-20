BackslashUi.SessionRoute = Ember.Route.extend({
//  model: function(params) {
//      return Ember.RSVP.hash({
//          session: this.get('store').find('session', params.session_id),
//          tests: this.get('store').find('test', { sessionId: params.session_id })
//      })
//  }
    model: function(params) {
        return this.get('store').find('session', params.session_id);
    }

});

