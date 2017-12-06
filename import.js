const adminKey = process.env.ADMIN_KEY;
const appId = process.env.APP_ID;

const data = require('./combined_data.json');

const algoliasearch = require('algoliasearch');

const client = algoliasearch(appId, adminKey);
const index = client.initIndex('test_index');

index.addObjects(data, function(err, content) {
  if (err) {
    console.log('there was an error pushing the data');
    return;
  }
  console.log(content);
});
