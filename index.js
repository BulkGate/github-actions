const core = require('@actions/core');
const github = require('@actions/github');
const fetch = require('node-fetch');

try {
    const url = core.getInput('url');
    const method = core.getInput('method');
    const contentType = core.getInput('contentType');
    const input_data = JSON.parse(core.getInput('data'));


    console.log(`URL ${url}!`);


    fetch("https://portal.bulkgate.com/api/1.0/simple/transactional", {
        method: "POST",
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(input_data)
    }).then(res => {
        console.log("Request complete! response:", res);
    });



    // Get the JSON webhook payload for the event that triggered the workflow



    //const payload = JSON.stringify(github.context.payload, undefined, 2)
    //console.log(`The event payload: ${payload}`);


} catch (error) {
    core.setFailed(error.message);
}