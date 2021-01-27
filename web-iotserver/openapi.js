const Core = require('@alicloud/pop-core');

var client = new Core({
    accessKeyId: 'LTAI4FpqvC8d82zxvL1XezC6',
    accessKeySecret: 'N0Y9bgdgJTxpkmzzWbx1pgsPMSqtgh',
    endpoint: 'https://iot.cn-shanghai.aliyuncs.com',
    apiVersion: '2018-01-20'
});

module.exports = {
    client: client
}