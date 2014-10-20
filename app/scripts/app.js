var BackslashUi = window.BackslashUi = Ember.Application.create({
        LOG_TRANSITIONS: true,

        // Extremely detailed logging, highlighting every internal
        // step made while transitioning into a route, including
        // `beforeModel`, `model`, and `afterModel` hooks, and
        // information about redirects and aborted transitions
        LOG_TRANSITIONS_INTERNAL: true
    }

);

/* Order and include as you please. */
require('scripts/controllers/*');
require('scripts/store');
require('scripts/models/*');
require('scripts/routes/*');
require('scripts/components/*');
require('scripts/views/*');
require('scripts/router');
