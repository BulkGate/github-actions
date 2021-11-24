const core = require('@actions/core');
const github = require('@actions/github');
const https = require('https');

try {
    const url = core.getInput('url');
    const method = core.getInput('method');
    const contentType = core.getInput('contentType');
    const input_data = JSON.parse(core.getInput('data'));


    console.log(`URL ${url}!`);

    const data = JSON.stringify({
        application_id: "123",
        application_token: "token",
        number: "420777777777",
        text: "text"
    })

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