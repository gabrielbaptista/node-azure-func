/*
 Para estudar: https://code.visualstudio.com/tutorials/functions-extension/getting-started
 Para testar: https://node-sample-app-azure-ftt.azurewebsites.net/api/SampleHTTPTrigger?name=gabriel
 */
module.exports = function (context, req) {
    context.log('JavaScript HTTP trigger function processed a request.');

    if (req.query.name || (req.body && req.body.name)) {
        context.res = {
            // status: 200, /* Defaults to 200 */
            body: "E aí, " + (req.query.name || req.body.name) +"?"
        };
    }
    else {
        context.res = {
            status: 400,
            body: "Please pass a name on the query string or in the request body"
        };
    }
    context.done();
};