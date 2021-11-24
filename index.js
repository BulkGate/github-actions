const core = require('@actions/core');
const github = require('@actions/github');
const http = require('http');

try {
    const url = core.getInput('url');
    const method = core.getInput('method');
    const contentType = core.getInput('contentType');
    const input_data = JSON.parse(core.getInput('data'));


    console.log(`URL ${url}!`);

    http.post({
        hostname: 'https://portal.bulkgate.com',
        port: 80,
        path: '/api/1.0/simple/transactional',
        agent: false  // Create a new agent just for this one request
    }, (res) => {
        console.log(res);
    });
    

    //const payload = JSON.stringify(github.context.payload, undefined, 2)
    //console.log(`The event payload: ${payload}`);


} catch (error) {
    core.setFailed(error.message);
}