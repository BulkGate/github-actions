const core = require('@actions/core');
const github = require('@actions/github');
const https = require('https');
const querystring = require('querystring');

try {

    const parameters = {
        application_id: core.getInput('application_id'),
        application_token: core.getInput('application_token'),
        number: core.getInput('number'),
        text: core.getInput('text'),
        unicode: core.getInput('unicode'),
        sender_id: core.getInput('sender_id'),
        sender_id_value: core.getInput('sender_id_value'),
        country: core.getInput('country'),
        schedule: core.getInput('schedule'),
        duplicates_check: core.getInput('duplicates_check'),
        tag: core.getInput('tag')
    }

    const post_data = querystring.stringify(parameters);


    const options = {
        hostname: 'portal.bulkgate.com',
        path: 'https://portal.bulkgate.com',
        method: 'POST',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
            'Content-Length': post_data.length
        }
    };

    const req = https.request(options, (res) => {
        console.log('statusCode:', res.statusCode);


        res.on('data', (d) => {
            core.setOutput('response', JSON.parse(d));
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