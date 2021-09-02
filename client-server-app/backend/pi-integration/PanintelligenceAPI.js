const panintelligenceInfo = require("./PanintelligenceInfo");

const PROTOCOL = {
    "http": require('http'),
    "https": require('https')
}

/**
 * Issue a request to the dashboard's API.
 * @param {string} method One of CONNECT, DELETE, GET, HEAD, OPTIONS, PATCH, POST, PUT or TRACE.
 * @param {string} endpoint A pi API endpoint (See https://app.swaggerhub.com/apis-docs/panintelligence/dashboard/).
 * @param {object} headers Key-value pair of headers.
 * @param {object} jsonData Any json payload.
 */
const dashboardRequest = (method, endpoint, headers, jsonData) => {
    const data = jsonData ? JSON.stringify(jsonData) : "";
    const allHeaders = headers || {};
    allHeaders['accept'] = 'application/json';
    if (data) {
        allHeaders['Content-Type'] = 'application/json';
        allHeaders['Content-Length'] = data.length;
    }
    const options = {
        hostname: panintelligenceInfo.host,
        path: `/pi/api/v2${endpoint}`,
        method: method,
        headers: allHeaders
    }
    if (panintelligenceInfo.port) {
        options["port"] = parseInt(panintelligenceInfo.port);
    }
    
    return new Promise((resolve, reject) => {
        const req = PROTOCOL[panintelligenceInfo.protocol].request(options, res => {
            let dataBuffer = "";
            res.on('data', data => {
                dataBuffer += data || "";
            });
            res.on('close', () => {
                resolve(dataBuffer ? JSON.parse(dataBuffer) : {});
            });
        });

        req.on('error', error => {
            reject(error);
        });

        req.write(data);
        req.end();
    });
}

/**
 * Fetches a token for the given username.
 * @param {*} username The Pi username to get a token for.
 */
const fetchToken = async (username) => {
    try{
        return (await dashboardRequest(
            'POST',
            '/tokens',
            { 'Authorization': `Basic ${panintelligenceInfo.credentials.username}:${panintelligenceInfo.credentials.password}` },
            { 'logInAsUsercode': username }
        )).token;
    } catch(e) {
        console.error(e);
    }
    return null;
}

module.exports = { fetchToken };