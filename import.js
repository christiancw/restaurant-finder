require('./secrets');
const adminKey = process.env.ADMIN_KEY;
const appId = process.env.APP_ID;
const chunk = require('lodash.chunk');

const records = require('./new_combined_data.json');

const algoliasearch = require('algoliasearch');

const client = algoliasearch(appId, adminKey);
const index = client.initIndex('new_restaurant_index');

const chunks = chunk(records, 1000);

chunks.map(function(batch) {
  return index.addObjects(batch);
});

// index.addObjects(data, function(err, content) {
//   if (err) {
//     console.log('there was an error pushing the data');
//     return;
//   }
//   console.log(content);
// });

// index.setSettings({
//   'attributesForFaceting': ['category', 'author']
// })
