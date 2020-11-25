const AWS = require('aws-sdk');
const proxy = require('proxy-agent');

const REGION = 'us-east-1'; // code for US East (N. Virginia), see full list here: https://docs.aws.amazon.com/general/latest/gr/rande.html#s3_region
const API = '2020-05-31';
const PROXY = 'http://genproxy.amdocs.com:8080';
const INVALIDATION_THRESHOLD = 30; // Minimum time between invalidations (in seconds)

// Setup
AWS.config.update({region: REGION});
AWS.config.logger = console;

const cloudfront = new AWS.CloudFront({
    apiVersion: API.cloudfront,
    httpOptions: {
        agent: process.argv[2] === 'proxy' ? proxy(PROXY) : undefined,
    },
});

cloudfront.createInvalidation({
    DistributionId: 'E37396HYCXBAVC',
    InvalidationBatch: {
        CallerReference: Math.floor(Date.now() / (1000 * INVALIDATION_THRESHOLD)).toString(),
        Paths: {
            Quantity: 1,
            Items: ['/*']
        }
    }
}, (err, data) => {
    if (err) console.log(err, err.stack); // an error occurred
    else     console.log(data);           // successful response
});