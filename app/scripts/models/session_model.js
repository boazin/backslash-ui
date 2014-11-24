BackslashUi.Session = DS.Model.extend({
    logicalId: DS.attr('string'),
    startTime: DS.attr('date'),
    endTime: DS.attr('date'),
    status: DS.attr('string'),
    hostname: DS.attr('string'),
    productName: DS.attr('string'),
    productRevision: DS.attr('string'),
    productVersion: DS.attr('string'),
    userName: DS.attr('string'),
    tests: DS.hasMany('test', {async: true}, {inverse: 'session'}),

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


BackslashUi.SessionSerializer = DS.ActiveModelSerializer.extend({
    normalizePayload: function(payload) {
        payload.sessions = payload.result;
        delete payload.error;
        delete payload.result;
        delete payload.metadata;
        return payload;
    }
});

