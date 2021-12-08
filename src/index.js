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
        tag: core.getInput('tag'),
        channel: core.getInput('channel')
    }

    console.log(parameters);
    parameters.channel = JSON.parse(parameters.channel);
    console.log(parameters);
    const post_data = JSON.stringify(parameters);
    //const post_data = querystring.stringify(parameters);

    console.log(post_data);

    const options = {
        hostname: 'portal.bulkgate.com',
        path: '/api/2.0/advanced/transactional',
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        }
    };

    const req = https.request(options, (res) => {
        res.on('data', (d) => {
            core.setOutput('response', JSON.parse(d));
        });
    });

    req.on('error', (e) => {
        console.log('ErrorMessage:', e);
    });
    req.write(post_data)

    req.end();
} catch (error) {
    core.setFailed(error.message);
}