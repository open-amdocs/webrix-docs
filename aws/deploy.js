const AWS = require('aws-sdk');
const proxy = require('proxy-agent');
const fs = require('fs');
const path = require('path');

const REGION = 'us-east-1'; // code for US East (N. Virginia), see full list here: https://docs.aws.amazon.com/general/latest/gr/rande.html#s3_region
const BUCKET = 'webrix.amdocs.com';
const API = '2006-03-01';
const FILE_PERMISSION = 'public-read';
const PROXY = 'http://genproxy.amdocs.com:8080';
const RETRIES = 20000;
const DIR = './build';

// Setup
AWS.config.update({region: REGION});
AWS.config.logger = console;

// Create S3 service object
const s3 = new AWS.S3({
    apiVersion: API,
    httpOptions: {
        agent: process.argv[2] === 'proxy' ? proxy(PROXY) : undefined,
    },
    maxRetries: RETRIES
});

fs.readdir(path.resolve(__dirname, DIR), (err, files) => {
    files.forEach(file => {
        const fileStream = fs.createReadStream(path.resolve(__dirname, DIR, file));
        fileStream.on('error', function(err) {
            console.log('File Error', err);
        });

        const params = {
            Bucket: BUCKET,
            Key: file,
            Body: fileStream,
            ACL: FILE_PERMISSION,
            ContentType: 'text/html',
        };

        s3.upload(params, function (err, data) {
            if (err) {
                console.log("Error", err);
            } if (data) {
                console.log("Upload Success", data.Location);
            }
        });
    });
});
