// This file has been autogenerated.

exports.setEnvironment = function() {
  process.env['AZURE_TEST_LOCATION'] = 'East US 2';
  process.env['AZURE_TEST_RESOURCE_GROUP'] = 'xplattestadlarg05';
  process.env['AZURE_SUBSCRIPTION_ID'] = 'ce4a7590-4722-4bcf-a2c6-e473e9f11778';
};

exports.scopes = [[function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .put('/subscriptions/ce4a7590-4722-4bcf-a2c6-e473e9f11778/resourceGroups/xplattestadlarg05/providers/Microsoft.DataLakeAnalytics/accounts/xplattestadla8391/DataLakeStoreAccounts/xplattestadls5780?api-version=2016-11-01')
  .reply(200, "{\"properties\":{\"suffix\":\"azuredatalakestore.net\"},\"id\":\"/subscriptions/ce4a7590-4722-4bcf-a2c6-e473e9f11778/resourceGroups/xplattestadlarg05/providers/Microsoft.DataLakeAnalytics/accounts/xplattestadla8391/dataLakeStoreAccounts/xplattestadls5780\",\"name\":\"xplattestadls5780\",\"type\":\"Microsoft.DataLakeAnalytics/accounts/dataLakeStoreAccounts\"}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '342',
  'content-type': 'application/json',
  expires: '-1',
  'x-ms-request-id': 'd4826344-f2aa-47bb-9c79-33b85af7c42a',
  'x-content-type-options': 'nosniff',
  server: 'Microsoft-IIS/8.5',
  'x-aspnet-version': '4.0.30319',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-writes': '1189',
  'x-ms-correlation-request-id': '933a5aec-1bdb-4c71-90b3-9255c73088e7',
  'x-ms-routing-request-id': 'EASTASIA:20171212T064204Z:933a5aec-1bdb-4c71-90b3-9255c73088e7',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Tue, 12 Dec 2017 06:42:03 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .put('/subscriptions/ce4a7590-4722-4bcf-a2c6-e473e9f11778/resourceGroups/xplattestadlarg05/providers/Microsoft.DataLakeAnalytics/accounts/xplattestadla8391/DataLakeStoreAccounts/xplattestadls5780?api-version=2016-11-01')
  .reply(200, "{\"properties\":{\"suffix\":\"azuredatalakestore.net\"},\"id\":\"/subscriptions/ce4a7590-4722-4bcf-a2c6-e473e9f11778/resourceGroups/xplattestadlarg05/providers/Microsoft.DataLakeAnalytics/accounts/xplattestadla8391/dataLakeStoreAccounts/xplattestadls5780\",\"name\":\"xplattestadls5780\",\"type\":\"Microsoft.DataLakeAnalytics/accounts/dataLakeStoreAccounts\"}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '342',
  'content-type': 'application/json',
  expires: '-1',
  'x-ms-request-id': 'd4826344-f2aa-47bb-9c79-33b85af7c42a',
  'x-content-type-options': 'nosniff',
  server: 'Microsoft-IIS/8.5',
  'x-aspnet-version': '4.0.30319',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-writes': '1189',
  'x-ms-correlation-request-id': '933a5aec-1bdb-4c71-90b3-9255c73088e7',
  'x-ms-routing-request-id': 'EASTASIA:20171212T064204Z:933a5aec-1bdb-4c71-90b3-9255c73088e7',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Tue, 12 Dec 2017 06:42:03 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/ce4a7590-4722-4bcf-a2c6-e473e9f11778/resourceGroups/xplattestadlarg05/providers/Microsoft.DataLakeAnalytics/accounts/xplattestadla8391?api-version=2016-11-01')
  .reply(200, "{\"properties\":{\"firewallState\":\"Disabled\",\"firewallAllowAzureIps\":\"Disabled\",\"debugDataAccessLevel\":\"All\",\"firewallRules\":[],\"defaultDataLakeStoreAccount\":\"xplattestadls8812\",\"dataLakeStoreAccounts\":[{\"properties\":{\"suffix\":\"azuredatalakestore.net\"},\"name\":\"xplattestadls5780\"},{\"properties\":{\"suffix\":\"azuredatalakestore.net\"},\"name\":\"xplattestadls8812\"}],\"publicDataLakeStoreAccounts\":[{\"properties\":{\"suffix\":\"azuredatalakestore.net\"},\"name\":\"adltrainingsampledata\"},{\"properties\":{\"suffix\":\"azuredatalakestore.net\"},\"name\":\"ghinsights\"}],\"storageAccounts\":[],\"maxDegreeOfParallelism\":30,\"maxJobCount\":3,\"systemMaxDegreeOfParallelism\":100,\"systemMaxJobCount\":20,\"maxDegreeOfParallelismPerJob\":30,\"minPriorityPerJob\":1,\"computePolicies\":[],\"queryStoreRetention\":30,\"hiveMetastores\":[],\"currentTier\":\"Consumption\",\"newTier\":\"Consumption\",\"provisioningState\":\"Succeeded\",\"state\":\"Active\",\"endpoint\":\"xplattestadla8391.azuredatalakeanalytics.net\",\"accountId\":\"3c0c8e99-02e5-40f5-bec0-7b97f622ea9c\",\"creationTime\":\"2017-12-12T06:40:35.8008952Z\",\"lastModifiedTime\":\"2017-12-12T06:41:59.8179058Z\"},\"location\":\"eastus2\",\"tags\":{\"testtag1\":\"testvalue1\",\"testtag2\":\"testvalue2\",\"testtag3\":\"testvalue3\"},\"id\":\"/subscriptions/ce4a7590-4722-4bcf-a2c6-e473e9f11778/resourceGroups/xplattestadlarg05/providers/Microsoft.DataLakeAnalytics/accounts/xplattestadla8391\",\"name\":\"xplattestadla8391\",\"type\":\"Microsoft.DataLakeAnalytics/accounts\"}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '1426',
  'content-type': 'application/json',
  expires: '-1',
  'x-ms-request-id': 'c1e3a9fb-7678-4fcb-98fe-1d7156250985',
  'x-content-type-options': 'nosniff',
  server: 'Microsoft-IIS/8.5',
  'x-aspnet-version': '4.0.30319',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-reads': '14503',
  'x-ms-correlation-request-id': 'd8bbbe43-b5a8-4461-97e6-527857542445',
  'x-ms-routing-request-id': 'EASTASIA:20171212T064205Z:d8bbbe43-b5a8-4461-97e6-527857542445',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Tue, 12 Dec 2017 06:42:05 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/ce4a7590-4722-4bcf-a2c6-e473e9f11778/resourceGroups/xplattestadlarg05/providers/Microsoft.DataLakeAnalytics/accounts/xplattestadla8391?api-version=2016-11-01')
  .reply(200, "{\"properties\":{\"firewallState\":\"Disabled\",\"firewallAllowAzureIps\":\"Disabled\",\"debugDataAccessLevel\":\"All\",\"firewallRules\":[],\"defaultDataLakeStoreAccount\":\"xplattestadls8812\",\"dataLakeStoreAccounts\":[{\"properties\":{\"suffix\":\"azuredatalakestore.net\"},\"name\":\"xplattestadls5780\"},{\"properties\":{\"suffix\":\"azuredatalakestore.net\"},\"name\":\"xplattestadls8812\"}],\"publicDataLakeStoreAccounts\":[{\"properties\":{\"suffix\":\"azuredatalakestore.net\"},\"name\":\"adltrainingsampledata\"},{\"properties\":{\"suffix\":\"azuredatalakestore.net\"},\"name\":\"ghinsights\"}],\"storageAccounts\":[],\"maxDegreeOfParallelism\":30,\"maxJobCount\":3,\"systemMaxDegreeOfParallelism\":100,\"systemMaxJobCount\":20,\"maxDegreeOfParallelismPerJob\":30,\"minPriorityPerJob\":1,\"computePolicies\":[],\"queryStoreRetention\":30,\"hiveMetastores\":[],\"currentTier\":\"Consumption\",\"newTier\":\"Consumption\",\"provisioningState\":\"Succeeded\",\"state\":\"Active\",\"endpoint\":\"xplattestadla8391.azuredatalakeanalytics.net\",\"accountId\":\"3c0c8e99-02e5-40f5-bec0-7b97f622ea9c\",\"creationTime\":\"2017-12-12T06:40:35.8008952Z\",\"lastModifiedTime\":\"2017-12-12T06:41:59.8179058Z\"},\"location\":\"eastus2\",\"tags\":{\"testtag1\":\"testvalue1\",\"testtag2\":\"testvalue2\",\"testtag3\":\"testvalue3\"},\"id\":\"/subscriptions/ce4a7590-4722-4bcf-a2c6-e473e9f11778/resourceGroups/xplattestadlarg05/providers/Microsoft.DataLakeAnalytics/accounts/xplattestadla8391\",\"name\":\"xplattestadla8391\",\"type\":\"Microsoft.DataLakeAnalytics/accounts\"}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '1426',
  'content-type': 'application/json',
  expires: '-1',
  'x-ms-request-id': 'c1e3a9fb-7678-4fcb-98fe-1d7156250985',
  'x-content-type-options': 'nosniff',
  server: 'Microsoft-IIS/8.5',
  'x-aspnet-version': '4.0.30319',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-reads': '14503',
  'x-ms-correlation-request-id': 'd8bbbe43-b5a8-4461-97e6-527857542445',
  'x-ms-routing-request-id': 'EASTASIA:20171212T064205Z:d8bbbe43-b5a8-4461-97e6-527857542445',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Tue, 12 Dec 2017 06:42:05 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .delete('/subscriptions/ce4a7590-4722-4bcf-a2c6-e473e9f11778/resourceGroups/xplattestadlarg05/providers/Microsoft.DataLakeAnalytics/accounts/xplattestadla8391/DataLakeStoreAccounts/xplattestadls5780?api-version=2016-11-01')
  .reply(200, "", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  expires: '-1',
  'x-ms-request-id': 'da8043f5-1a02-4841-9f49-b83fa5a6fdce',
  server: 'Microsoft-IIS/8.5',
  'x-aspnet-version': '4.0.30319',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-writes': '1192',
  'x-ms-correlation-request-id': '673937d9-9134-4f8d-86ef-366e7c8db628',
  'x-ms-routing-request-id': 'EASTASIA:20171212T064207Z:673937d9-9134-4f8d-86ef-366e7c8db628',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Tue, 12 Dec 2017 06:42:07 GMT',
  connection: 'close',
  'content-length': '0' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .delete('/subscriptions/ce4a7590-4722-4bcf-a2c6-e473e9f11778/resourceGroups/xplattestadlarg05/providers/Microsoft.DataLakeAnalytics/accounts/xplattestadla8391/DataLakeStoreAccounts/xplattestadls5780?api-version=2016-11-01')
  .reply(200, "", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  expires: '-1',
  'x-ms-request-id': 'da8043f5-1a02-4841-9f49-b83fa5a6fdce',
  server: 'Microsoft-IIS/8.5',
  'x-aspnet-version': '4.0.30319',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-writes': '1192',
  'x-ms-correlation-request-id': '673937d9-9134-4f8d-86ef-366e7c8db628',
  'x-ms-routing-request-id': 'EASTASIA:20171212T064207Z:673937d9-9134-4f8d-86ef-366e7c8db628',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Tue, 12 Dec 2017 06:42:07 GMT',
  connection: 'close',
  'content-length': '0' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/ce4a7590-4722-4bcf-a2c6-e473e9f11778/resourceGroups/xplattestadlarg05/providers/Microsoft.DataLakeAnalytics/accounts/xplattestadla8391?api-version=2016-11-01')
  .reply(200, "{\"properties\":{\"firewallState\":\"Disabled\",\"firewallAllowAzureIps\":\"Disabled\",\"debugDataAccessLevel\":\"All\",\"firewallRules\":[],\"defaultDataLakeStoreAccount\":\"xplattestadls8812\",\"dataLakeStoreAccounts\":[{\"properties\":{\"suffix\":\"azuredatalakestore.net\"},\"name\":\"xplattestadls8812\"}],\"publicDataLakeStoreAccounts\":[{\"properties\":{\"suffix\":\"azuredatalakestore.net\"},\"name\":\"adltrainingsampledata\"},{\"properties\":{\"suffix\":\"azuredatalakestore.net\"},\"name\":\"ghinsights\"}],\"storageAccounts\":[],\"maxDegreeOfParallelism\":30,\"maxJobCount\":3,\"systemMaxDegreeOfParallelism\":100,\"systemMaxJobCount\":20,\"maxDegreeOfParallelismPerJob\":30,\"minPriorityPerJob\":1,\"computePolicies\":[],\"queryStoreRetention\":30,\"hiveMetastores\":[],\"currentTier\":\"Consumption\",\"newTier\":\"Consumption\",\"provisioningState\":\"Succeeded\",\"state\":\"Active\",\"endpoint\":\"xplattestadla8391.azuredatalakeanalytics.net\",\"accountId\":\"3c0c8e99-02e5-40f5-bec0-7b97f622ea9c\",\"creationTime\":\"2017-12-12T06:40:35.8008952Z\",\"lastModifiedTime\":\"2017-12-12T06:41:59.8179058Z\"},\"location\":\"eastus2\",\"tags\":{\"testtag1\":\"testvalue1\",\"testtag2\":\"testvalue2\",\"testtag3\":\"testvalue3\"},\"id\":\"/subscriptions/ce4a7590-4722-4bcf-a2c6-e473e9f11778/resourceGroups/xplattestadlarg05/providers/Microsoft.DataLakeAnalytics/accounts/xplattestadla8391\",\"name\":\"xplattestadla8391\",\"type\":\"Microsoft.DataLakeAnalytics/accounts\"}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '1348',
  'content-type': 'application/json',
  expires: '-1',
  'x-ms-request-id': 'a84384ef-5197-4ae8-a89c-cf4f7a33deea',
  'x-content-type-options': 'nosniff',
  server: 'Microsoft-IIS/8.5',
  'x-aspnet-version': '4.0.30319',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-reads': '14184',
  'x-ms-correlation-request-id': '11a3e940-bffa-49ca-a1f4-221a04bf9752',
  'x-ms-routing-request-id': 'EASTASIA:20171212T064209Z:11a3e940-bffa-49ca-a1f4-221a04bf9752',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Tue, 12 Dec 2017 06:42:09 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/ce4a7590-4722-4bcf-a2c6-e473e9f11778/resourceGroups/xplattestadlarg05/providers/Microsoft.DataLakeAnalytics/accounts/xplattestadla8391?api-version=2016-11-01')
  .reply(200, "{\"properties\":{\"firewallState\":\"Disabled\",\"firewallAllowAzureIps\":\"Disabled\",\"debugDataAccessLevel\":\"All\",\"firewallRules\":[],\"defaultDataLakeStoreAccount\":\"xplattestadls8812\",\"dataLakeStoreAccounts\":[{\"properties\":{\"suffix\":\"azuredatalakestore.net\"},\"name\":\"xplattestadls8812\"}],\"publicDataLakeStoreAccounts\":[{\"properties\":{\"suffix\":\"azuredatalakestore.net\"},\"name\":\"adltrainingsampledata\"},{\"properties\":{\"suffix\":\"azuredatalakestore.net\"},\"name\":\"ghinsights\"}],\"storageAccounts\":[],\"maxDegreeOfParallelism\":30,\"maxJobCount\":3,\"systemMaxDegreeOfParallelism\":100,\"systemMaxJobCount\":20,\"maxDegreeOfParallelismPerJob\":30,\"minPriorityPerJob\":1,\"computePolicies\":[],\"queryStoreRetention\":30,\"hiveMetastores\":[],\"currentTier\":\"Consumption\",\"newTier\":\"Consumption\",\"provisioningState\":\"Succeeded\",\"state\":\"Active\",\"endpoint\":\"xplattestadla8391.azuredatalakeanalytics.net\",\"accountId\":\"3c0c8e99-02e5-40f5-bec0-7b97f622ea9c\",\"creationTime\":\"2017-12-12T06:40:35.8008952Z\",\"lastModifiedTime\":\"2017-12-12T06:41:59.8179058Z\"},\"location\":\"eastus2\",\"tags\":{\"testtag1\":\"testvalue1\",\"testtag2\":\"testvalue2\",\"testtag3\":\"testvalue3\"},\"id\":\"/subscriptions/ce4a7590-4722-4bcf-a2c6-e473e9f11778/resourceGroups/xplattestadlarg05/providers/Microsoft.DataLakeAnalytics/accounts/xplattestadla8391\",\"name\":\"xplattestadla8391\",\"type\":\"Microsoft.DataLakeAnalytics/accounts\"}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '1348',
  'content-type': 'application/json',
  expires: '-1',
  'x-ms-request-id': 'a84384ef-5197-4ae8-a89c-cf4f7a33deea',
  'x-content-type-options': 'nosniff',
  server: 'Microsoft-IIS/8.5',
  'x-aspnet-version': '4.0.30319',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-reads': '14184',
  'x-ms-correlation-request-id': '11a3e940-bffa-49ca-a1f4-221a04bf9752',
  'x-ms-routing-request-id': 'EASTASIA:20171212T064209Z:11a3e940-bffa-49ca-a1f4-221a04bf9752',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Tue, 12 Dec 2017 06:42:09 GMT',
  connection: 'close' });
 return result; }]];