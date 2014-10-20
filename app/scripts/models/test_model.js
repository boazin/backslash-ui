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
    sessionId: DS.attr('number')
});

BackslashUi.TestSerializer = DS.ActiveModelSerializer.extend({
    normalizePayload: function(payload) {
        payload.tests = payload.result;
        delete payload.error;
        delete payload.result;
        delete payload.metadata;
        return payload;
    }
});

