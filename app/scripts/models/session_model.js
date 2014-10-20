BackslashUi.Session = DS.Model.extend({
    logicalId: DS.attr('string'),
    startTime: DS.attr('date'),
    endTime: DS.attr('date'),
    status: DS.attr('string'),
    hostname: DS.attr('string'),
    productName: DS.attr('string'),
    productRevision: DS.attr('string'),
    productVersion: DS.attr('string'),
    userName: DS.attr('string')
//    tests: DS.hasMany('test', {async: true})
});


BackslashUi.SessionSerializer = DS.ActiveModelSerializer.extend({
    normalizePayload: function(payload) {
        payload.sessions = payload.result;
        delete payload.error;
        delete payload.result;
        delete payload.metadata;
        console.log('serializer');
        return payload;
    }
});

/*
BackslashUi.SessionSerializer = DS.ActiveModelSerializer.extend({
    normalizePayload: function(payload) {
        return {
            sessions: payload.result
        };
    }
});
*/
