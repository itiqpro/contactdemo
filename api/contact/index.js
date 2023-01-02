const parseDataMultiPart = require("@anzp/azure-function-multipart")
    .default;

const fetch = require("node-fetch");

module.exports = async function (context, req) {
    context.log('JavaScript HTTP trigger function processed a request.');

    const name = (req.query.name || (req.body && req.body.name));
    const { fields, files } = await parseDataMultiPart(req);

    var fldCC = false;

    for (var i = 0; i < fields.length; i++) {
        switch (fields[i].name) {
            case "fldName":
                var fldName = fields[i].value;
                break;
            case "fldEmailAddr":
                var fldEmailAddr = fields[i].value;
                break;
            case "fldMessage":
                var fldMessage = fields[i].value;
                break;
            case "fldCC":
                var fldCC = true;
                break;
        }
    }

    // Logic

    context.res = {
        status: 302,
        headers: {
            location: "/success.html"
        }
    };
}