const core = require('@actions/core');
const github = require('@actions/github');
const http = require('https');

try {
    const url = core.getInput('url');
    const method = core.getInput('method');
    const contentType = core.getInput('contentType');
    const input_data = JSON.parse(core.getInput('data'));


    console.log(`URL ${url}!`);

    const options = {
        hostname: 'portal.bulkgate.com',
        path: url,
        method: 'POST'
    };

    const req = https.request(options, (res) => {
        console.log('statusCode:', res.statusCode);
        console.log('headers:', res.headers);

        res.on('data', (d) => {
            console.error(d);
        });
    });

    req.on('error', (e) => {
        console.error(e);
    });
    req.end();



    //const payload = JSON.stringify(github.context.payload, undefined, 2)
    //console.log(`The event payload: ${payload}`);


} catch (error) {
    core.setFailed(error.message);
}