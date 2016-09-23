"use strict";
var apollo_client_1 = require('apollo-client');
exports.client = new apollo_client_1.default({
    networkInterface: apollo_client_1.createNetworkInterface('/graphql', {
        credentials: 'same-origin',
    }),
    shouldBatch: true,
});
//# sourceMappingURL=client.js.map