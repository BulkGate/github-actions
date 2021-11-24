const core = require('@actions/core');
const github = require('@actions/github');
const https = require('https');
const querystring = require('querystring');

try {
    const url = core.getInput('url');
    const application_id = core.getInput('application_id');
    const application_token = core.getInput('application_token');

    console.log(`URL ${url}!`);
    console.log(`URL ${application_id}!`);

    const parameters = {
        application_id: application_id,
        application_token: application_token,
        number: "420777777777",
        text: "text"
    }

    const post_data = querystring.stringify(parameters);


    const options = {
        hostname: 'portal.bulkgate.com',
        path: '/api/1.0/simple/transactional',
        method: 'POST',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
            'Content-Length': post_data.length
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
    req.write(post_data)

    req.end();



    //const payload = JSON.stringify(github.context.payload, undefined, 2)
    //console.log(`The event payload: ${payload}`);


} catch (error) {
    core.setFailed(error.message);
}