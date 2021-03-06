const serverlessExpress = require('@vendia/serverless-express');
const appPromise = require('./app');

// NOTE: If you get ERR_CONTENT_DECODING_FAILED in your browser, this is likely
// due to a compressed response (e.g. gzip) which has not been handled correctly
// by serverless-express and/or API Gateway. Add the necessary MIME types to
// binaryMimeTypes below, then redeploy (`npm run package-deploy`)
const binaryMimeTypes = [
  // '*/*'
];

exports.handler = async (event, context, callback) => {
  const app = await appPromise;
  const se = serverlessExpress.configure({
    app,
    binaryMimeTypes
  });

  return se.proxy({ event, context, callback });
};
