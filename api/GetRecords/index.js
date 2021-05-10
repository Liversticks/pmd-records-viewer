/* eslint-disable */

module.exports = async function (context, req, records) {
    context.log('Querying all records!');
    context.res = {
        body: records
    };
}