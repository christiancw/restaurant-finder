// the approach:
//1. read data from
//2. make them both json objects
//3. merge them
//4. write that data to a separate file so that there's an accessible copy
//5. require that data when it's needed
//6. push that json object to the index

const path = require('path');
const Promise = require('bluebird');
const fs = Promise.promisifyAll(require('fs'));

let importedJSON;
let mergedData;

//helper functions to convert the return values of readFileAsync's to JSON arrays
const setJSON = returnedData => {
  importedJSON = JSON.parse(returnedData);
  return importedJSON;
};

const setCSV = returnedData => {
  const csvJSONArr = [];
  const arrayOfRecords = returnedData.split('\n');
  const attributes = ['objectID', 'food_type', 'stars_count', 'reviews_count', 'neighborhood', 'phone_number', 'price_range', 'dining_style'];
  arrayOfRecords.map(record => {
    let recordArr = record.split(';');
    let newRecord = {};
    for (let i = 0; i < recordArr.length; i++){
      if (attributes[i] === 'stars_count'){
        newRecord[attributes[i]] = Number(recordArr[i]);
      }
      else {
        newRecord[attributes[i]] = recordArr[i];
      }
    }
    csvJSONArr.push(newRecord);
  });
  return csvJSONArr;
};

//merge the data from both files on the objectID
const mergeData = (arrayFromReads) => {
  let jsonData = setJSON(arrayFromReads[0]);
  let csvData = setCSV(arrayFromReads[1]);
  const mergedArr = [];
  csvData.forEach(csvRecord => {
    let mergedRecord = {};
    jsonData.forEach(jsonRecord => {
      if (csvRecord.objectID == jsonRecord.objectID){
        mergedRecord = Object.assign(csvRecord, jsonRecord);
        mergedArr.push(mergedRecord);
      }
    });
  });
  mergedData = JSON.stringify(mergedArr);
  return mergedData;
};

function getJSON (){
  return fs.readFileAsync(path.join(__dirname, '/resources/dataset/restaurants_list.json'), 'utf8');
}

function getCSV (){
  return fs.readFileAsync(path.join(__dirname, '/resources/dataset/restaurants_info.csv'), 'utf8');
}

function getData () {
  return Promise.all([getJSON(), getCSV()]);
}

function writeData (dataToStore) {
  return fs.writeFileAsync('new_combined_data.json', dataToStore);
}

getData().then(
  function(recordsArray){
  writeData(mergeData(recordsArray));
});
