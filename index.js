const core = require('@actions/core');
const github = require('@actions/github');

try {
    // `who-to-greet` input defined in action metadata file
    const url = core.getInput('url');
    const method = core.getInput('method');
    const contentType = core.getInput('contentType');
    const input_data = core.getInput('data');


    console.log(`URL ${url}!`);
    console.log(input_data);
    console.log('here');
    //console.log(`Hello ${application_token}!`);
    //console.log(`Hello ${contentType}!`);

    /*var xhr = new XMLHttpRequest();
    xhr.open(method, url, true);
    xhr.setRequestHeader('Content-Type', contentType);
    xhr.send(JSON.stringify({
        application_id: "1234",
        application_token: "test",
        number: "420777777777"
    }));
    xhr.onload = function() {
        var data = JSON.parse(this.responseText);
        console.log(data);
        core.setOutput("response", data);
    };*/

    // Get the JSON webhook payload for the event that triggered the workflow



    //const payload = JSON.stringify(github.context.payload, undefined, 2)
    //console.log(`The event payload: ${payload}`);


} catch (error) {
    core.setFailed(error.message);
}