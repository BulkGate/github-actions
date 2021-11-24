const core = require('@actions/core');
const github = require('@actions/github');
const https = require('https');

try {
    const url = core.getInput('url');
    const method = core.getInput('method');
    const contentType = core.getInput('contentType');
    const application_id = core.getInput('application_id');
    const application_token = core.getInput('application_id');

    console.log(`URL ${url}!`);
    console.log(`URL ${application_id}!`);

    const data = JSON.stringify({
        application_id: application_id,
        application_token: application_token,
        number: "420777777777",
        text: "text"
    })

    console.log(data);

    const options = {
        hostname: 'portal.bulkgate.com',
        path: '/api/1.0/simple/transactional',
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Content-Length': data.length
        }
    };

    const req = https.request(options, (res) => {
        console.log('statusCode:', res.statusCode);


        res.on('data', (d) => {
            console.log('Response data:', JSON.parse(d));
        });
    });

    req.on('error', (e) => {
        console.log('ErrorMessage:', e);
    });
    req.write(data)
    req.end();



    //const payload = JSON.stringify(github.context.payload, undefined, 2)
    //console.log(`The event payload: ${payload}`);


} catch (error) {
    core.setFailed(error.message);
}