'use strict';
var Mockgen = require('./mockgen.js');
/**
 * Operations on /bulkQuotes
 */
module.exports = {
    /**
     * summary: BulkQuotes
     * description: The HTTP request POST /bulkQuotes is used to request the creation of a bulk quote for the provided financial transactions in the server.
     * parameters: body, Accept, Content-Length, Content-Type, Date, X-Forwarded-For, FSPIOP-Source, FSPIOP-Destination, FSPIOP-Encryption, FSPIOP-Signature, FSPIOP-URI, FSPIOP-HTTP-Method
     * produces: application/json
     * responses: 202, 400, 401, 403, 404, 405, 406, 501, 503
     * operationId: BulkQuotes
     */
    post: {
        202: function (req, res, callback) {
            /**
             * Using mock data generator module.
             * Replace this by actual data for the api.
             */
            Mockgen().responses({
                path: '/bulkQuotes',
                operation: 'post',
                response: '202'
            }, callback);
        },
        400: function (req, res, callback) {
            /**
             * Using mock data generator module.
             * Replace this by actual data for the api.
             */
            Mockgen().responses({
                path: '/bulkQuotes',
                operation: 'post',
                response: '400'
            }, callback);
        },
        401: function (req, res, callback) {
            /**
             * Using mock data generator module.
             * Replace this by actual data for the api.
             */
            Mockgen().responses({
                path: '/bulkQuotes',
                operation: 'post',
                response: '401'
            }, callback);
        },
        403: function (req, res, callback) {
            /**
             * Using mock data generator module.
             * Replace this by actual data for the api.
             */
            Mockgen().responses({
                path: '/bulkQuotes',
                operation: 'post',
                response: '403'
            }, callback);
        },
        404: function (req, res, callback) {
            /**
             * Using mock data generator module.
             * Replace this by actual data for the api.
             */
            Mockgen().responses({
                path: '/bulkQuotes',
                operation: 'post',
                response: '404'
            }, callback);
        },
        405: function (req, res, callback) {
            /**
             * Using mock data generator module.
             * Replace this by actual data for the api.
             */
            Mockgen().responses({
                path: '/bulkQuotes',
                operation: 'post',
                response: '405'
            }, callback);
        },
        406: function (req, res, callback) {
            /**
             * Using mock data generator module.
             * Replace this by actual data for the api.
             */
            Mockgen().responses({
                path: '/bulkQuotes',
                operation: 'post',
                response: '406'
            }, callback);
        },
        501: function (req, res, callback) {
            /**
             * Using mock data generator module.
             * Replace this by actual data for the api.
             */
            Mockgen().responses({
                path: '/bulkQuotes',
                operation: 'post',
                response: '501'
            }, callback);
        },
        503: function (req, res, callback) {
            /**
             * Using mock data generator module.
             * Replace this by actual data for the api.
             */
            Mockgen().responses({
                path: '/bulkQuotes',
                operation: 'post',
                response: '503'
            }, callback);
        }
    }
};