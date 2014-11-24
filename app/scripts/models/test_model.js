BackslashUi.Test = DS.Model.extend({
    logicalId: DS.attr('string'),
    startTime: DS.attr('date'),
    endTime: DS.attr('date'),
    duration: DS.attr('number'),
    status: DS.attr('string'),
    name: DS.attr('string'),
    testMetadata: DS.attr('string'),
    numErrors: DS.attr('number'),
    numFailures: DS.attr('number'),
    skipped: DS.attr('boolean'),
    session: DS.belongsTo('session', {async: true}, {inverse:'tests'}),

    //ember date needs the wrong units
    properStartTime: function() {
        var d = new Date(0);
        d.setUTCSeconds(this.get('startTime'));
        return d;
    }.property('startTime'),
    properEndTime: function() {
        if (this.get('endTime') == null)
        {
            return null;
        }
        var d = new Date(0);
        d.setUTCSeconds(this.get('endTime'));
        return d;
    }.property('endTime')

});

BackslashUi.TestSerializer = DS.ActiveModelSerializer.extend({
    normalizePayload: function(payload) {
        payload.tests = payload.result;
        delete payload.error;
        delete payload.result;
        delete payload.metadata;
        return payload;
    },

    keyForRelationship: function(rel, kind) {
        console.log(rel,kind);
        if (kind === 'belongsTo') {
            var underscored = rel.underscore();
            console.log(underscored);
            return underscored + "_id";
        } else {
            var singular = rel.singularize();
            var underscored = singular.underscore();
            return underscored + "_ids";
        }
    }
});

BackslashUi.TestAdapter = BackslashUi.ApplicationAdapter.extend({
    findQuery: function (store, type, query) {
        console.log('findQuery');
        var testsURL;
        testsURL = this.host + "/sessions/" + query.sessionId + "/tests";
//        delete query.sessionId;
        return this.ajax(testsURL, 'GET', {
            data: query
        });
    }
});


