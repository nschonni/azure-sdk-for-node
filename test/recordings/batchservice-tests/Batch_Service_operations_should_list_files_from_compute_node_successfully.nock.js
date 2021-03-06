// This file has been autogenerated.

exports.setEnvironment = function() {
  process.env['AZURE_BATCH_ACCOUNT'] = 'lchency4';
  process.env['AZURE_BATCH_ENDPOINT'] = 'https://lchency4.westcentralus.batch.azure.com';
  process.env['AZURE_SUBSCRIPTION_ID'] = '3ee7eaf5-6a2f-49fd-953f-d760b5ac2e05';
};

exports.scopes = [[function (nock) { 
var result = 
nock('http://lchency4.westcentralus.batch.azure.com:443')
  .get('/pools/nodesdktestpool1/nodes/tvm-14141481_3-20180821t200555z/files?api-version=2018-08-01.7.0')
  .reply(200, "{\r\n  \"odata.metadata\":\"https://lchency4.westcentralus.batch.azure.com/$metadata#files\",\"value\":[\r\n    {\r\n      \"name\":\"applications\",\"url\":\"https://lchency4.westcentralus.batch.azure.com/pools/nodesdktestpool1/nodes/tvm-14141481_3-20180821t200555z/files/applications\",\"isDirectory\":true\r\n    },{\r\n      \"name\":\"shared\",\"url\":\"https://lchency4.westcentralus.batch.azure.com/pools/nodesdktestpool1/nodes/tvm-14141481_3-20180821t200555z/files/shared\",\"isDirectory\":true\r\n    },{\r\n      \"name\":\"startup\",\"url\":\"https://lchency4.westcentralus.batch.azure.com/pools/nodesdktestpool1/nodes/tvm-14141481_3-20180821t200555z/files/startup\",\"isDirectory\":true\r\n    },{\r\n      \"name\":\"workitems\",\"url\":\"https://lchency4.westcentralus.batch.azure.com/pools/nodesdktestpool1/nodes/tvm-14141481_3-20180821t200555z/files/workitems\",\"isDirectory\":true\r\n    }\r\n  ]\r\n}", { 'transfer-encoding': 'chunked',
  'content-type': 'application/json;odata=minimalmetadata',
  server: 'Microsoft-HTTPAPI/2.0',
  'request-id': '69646b9b-fb7f-4c17-b5c8-f3f812d2e9c7',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-content-type-options': 'nosniff',
  dataserviceversion: '3.0',
  date: 'Tue, 21 Aug 2018 20:29:05 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://lchency4.westcentralus.batch.azure.com:443')
  .get('/pools/nodesdktestpool1/nodes/tvm-14141481_3-20180821t200555z/files?api-version=2018-08-01.7.0')
  .reply(200, "{\r\n  \"odata.metadata\":\"https://lchency4.westcentralus.batch.azure.com/$metadata#files\",\"value\":[\r\n    {\r\n      \"name\":\"applications\",\"url\":\"https://lchency4.westcentralus.batch.azure.com/pools/nodesdktestpool1/nodes/tvm-14141481_3-20180821t200555z/files/applications\",\"isDirectory\":true\r\n    },{\r\n      \"name\":\"shared\",\"url\":\"https://lchency4.westcentralus.batch.azure.com/pools/nodesdktestpool1/nodes/tvm-14141481_3-20180821t200555z/files/shared\",\"isDirectory\":true\r\n    },{\r\n      \"name\":\"startup\",\"url\":\"https://lchency4.westcentralus.batch.azure.com/pools/nodesdktestpool1/nodes/tvm-14141481_3-20180821t200555z/files/startup\",\"isDirectory\":true\r\n    },{\r\n      \"name\":\"workitems\",\"url\":\"https://lchency4.westcentralus.batch.azure.com/pools/nodesdktestpool1/nodes/tvm-14141481_3-20180821t200555z/files/workitems\",\"isDirectory\":true\r\n    }\r\n  ]\r\n}", { 'transfer-encoding': 'chunked',
  'content-type': 'application/json;odata=minimalmetadata',
  server: 'Microsoft-HTTPAPI/2.0',
  'request-id': '69646b9b-fb7f-4c17-b5c8-f3f812d2e9c7',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-content-type-options': 'nosniff',
  dataserviceversion: '3.0',
  date: 'Tue, 21 Aug 2018 20:29:05 GMT',
  connection: 'close' });
 return result; }]];