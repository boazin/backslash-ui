BackslashUi.Router.map(function () {

    this.route("sessions", { path: "/sessions" });
    this.route("session", { path: "/sessions/:session_id" });
    this.route("tests", { path: "/tests" });
    this.route("test", { path: "/tests/:test_id" });
    /*
    this.resource('sessions', function(){
        this.route('session', { path: '/:session_id' }, function(){
            this.route('tests');
        });
    });
    this.resource('tests', function(){
        this.route('test', { path: '/:test_id' })
    });
*/
});
