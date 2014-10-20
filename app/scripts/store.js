BackslashUi.ApplicationAdapter = DS.RESTAdapter.extend({
    host: 'http://localhost:8000/rest'
/*    ajax: function(url, method, hash) {
        console.log('url:',url,method,hash);
        hash.crossDomain = true;
        return this._super(url, method, hash);
    }
    */
});