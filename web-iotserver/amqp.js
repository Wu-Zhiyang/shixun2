//const ws = require('./ws');
const container = require('rhea');
const crypto = require('crypto');
const mysql = require("mysql");
//建立连接。
var dt = new Date();
var connection = container.connect({
    //接入域名，请参见AMQP客户端接入说明文档。
    'host': '1610107858851028.iot-amqp.cn-shanghai.aliyuncs.com',
    'port': 5671,
    'transport': 'tls',
    'reconnect': true,
    'idle_time_out': 60000,
    //userName组装方法，请参见AMQP客户端接入说明文档。其中的iotInstanceId，购买的实例请填写实例ID，公共实例请填空字符串""。
    'username': 'DC-8B-28-5A-DC-46|authMode=aksign,signMethod=hmacsha1,timestamp='
        + dt.getTime() +
        ',authId=LTAI4FpqvC8d82zxvL1XezC6,iotInstanceId=,consumerGroupId=DEFAULT_GROUP|',
    //计算签名，password组装方法，请参见AMQP客户端接入说明文档。
    'password': hmacSha1(
        'N0Y9bgdgJTxpkmzzWbx1pgsPMSqtgh',
        'authId=LTAI4FpqvC8d82zxvL1XezC6&timestamp='
        + dt.getTime()),
});
//创建Receiver连接。
var receiver = connection.open_receiver();

//接收云端推送消息的回调函数。
container.on('message', function (context) {
    var msg = context.message;
    var messageId = msg.message_id;
    var topic = msg.application_properties.topic;
    var obj = Buffer.from(msg.body.content);
    var content = obj.toString();

    if (topic === '/a14Y1stOjC9/LED1/thing/event/property/post') {
        const resp = JSON.parse(content);
        console.log(Number(resp.items.LightStatus.value));
        const status = Number(resp.items.LightStatus.value);

        var connection = mysql.createConnection({
            host: 'localhost',
            user: 'root',
            password: '123456',
            port: 3306,
            database: 'aliyun'
        })
        connection.connect();
        console.log("连接成功")
        connection.query('insert into led(value,time) values(?,?)', [status, Date.now()], function (err, result) {
            if (err) {
                throw err;
            } else {
                var data = {
                    code: '200',
                    code_decoration: '添加成功'
                }
                // res.send({value:data, succ: true });
                console.log('----------------------');
                console.log(result);
                console.log('----------------------');
                //console.log(data);
            }
        });
        connection.end();
    }

    if (topic === '/a178z3YnzBM/KongTiao/thing/event/property/post') {
        const resp = JSON.parse(content);
        console.log(Number(resp.items.PowerSwitch.value));
        const status = Number(resp.items.PowerSwitch.value);

        var connection = mysql.createConnection({
            host: 'localhost',
            user: 'root',
            password: '123456',
            port: 3306,
            database: 'aliyun'
        })
        connection.connect();
        console.log("连接成功")
        connection.query('insert into ac(value,time) values(?,?)', [status, Date.now()], function (err, result) {
            if (err) {
                throw err;
            } else {
                var data = {
                    code: '200',
                    code_decoration: '添加成功'
                }
                // res.send({value:data, succ: true });
                console.log('----------------------');
                console.log(result);
                console.log('----------------------');
                //console.log(data);
            }
        });
        connection.end();
    }

    if (topic === '/a1zeLAlmWBV/CAlarm/thing/event/property/post') {
        const resp = JSON.parse(content);
        console.log(Number(resp.items.AlarmSwitch.value));
        const status = Number(resp.items.AlarmSwitch.value);

        var connection = mysql.createConnection({
            host: 'localhost',
            user: 'root',
            password: '123456',
            port: 3306,
            database: 'aliyun'
        })
        connection.connect();
        console.log("连接成功")
        connection.query('insert into calarm(value,time) values(?,?)', [status, Date.now()], function (err, result) {
            if (err) {
                throw err;
            } else {
                var data = {
                    code: '200',
                    code_decoration: '添加成功'
                }
                // res.send({value:data, succ: true });
                console.log('----------------------');
                console.log(result);
                console.log('----------------------');
                //console.log(data);
            }
        });
        connection.end();
    }

    if (topic === '/a1jULKs3YT0/Camera1/thing/event/property/post') {
        const resp = JSON.parse(content);
        console.log(Number(resp.items.AlarmSwitch.value));
        const status = Number(resp.items.AlarmSwitch.value);

        var connection = mysql.createConnection({
            host: 'localhost',
            user: 'root',
            password: '123456',
            port: 3306,
            database: 'aliyun'
        })
        connection.connect();
        console.log("连接成功")
        connection.query('insert into camera(value,time) values(?,?)', [status, Date.now()], function (err, result) {
            if (err) {
                throw err;
            } else {
                var data = {
                    code: '200',
                    code_decoration: '添加成功'
                }
                // res.send({value:data, succ: true });
                console.log('----------------------');
                console.log(result);
                console.log('----------------------');
                //console.log(data);
            }
        });
        connection.end();
    }

    if (topic === '/a1Wdj8cuerY/CSprinkler/thing/event/property/post') {
        const resp = JSON.parse(content);
        console.log(Number(resp.items.WaterOutletSwitch.value));
        const status = Number(resp.items.WaterOutletSwitch.value);

        var connection = mysql.createConnection({
            host: 'localhost',
            user: 'root',
            password: '123456',
            port: 3306,
            database: 'aliyun'
        })
        connection.connect();
        console.log("连接成功")
        connection.query('insert into csp(value,time) values(?,?)', [status, Date.now()], function (err, result) {
            if (err) {
                throw err;
            } else {
                var data = {
                    code: '200',
                    code_decoration: '添加成功'
                }
                // res.send({value:data, succ: true });
                console.log('----------------------');
                console.log(result);
                console.log('----------------------');
                //console.log(data);
            }
        });
        connection.end();
    }

    if (topic === '/a1hQl23tdCe/Curtain/thing/event/property/post') {
        const resp = JSON.parse(content);
        console.log(Number(resp.items.PowerSwitch.value));
        const status = Number(resp.items.PowerSwitch.value);

        var connection = mysql.createConnection({
            host: 'localhost',
            user: 'root',
            password: '123456',
            port: 3306,
            database: 'aliyun'
        })
        connection.connect();
        console.log("连接成功")
        connection.query('insert into curtain(value,time) values(?,?)', [status, Date.now()], function (err, result) {
            if (err) {
                throw err;
            } else {
                var data = {
                    code: '200',
                    code_decoration: '添加成功'
                }
                // res.send({value:data, succ: true });
                console.log('----------------------');
                console.log(result);
                console.log('----------------------');
                //console.log(data);
            }
        });
        connection.end();
    }

    // if (topic === '/a1xrMf2vxYW/HUMD/thing/event/property/post') {
    //     const resp = JSON.parse(content);
    //     console.log(Number(resp.items.LightStatus.value));
    //     const status = Number(resp.items.LightStatus.value);

    //     var connection = mysql.createConnection({
    //         host: 'localhost',
    //         user: 'root',
    //         password: '123456',
    //         port: 3306,
    //         database: 'aliyun'
    //     })
    //     connection.connect();
    //     console.log("连接成功")
    //     connection.query('insert into hump(value,time) values(?,?)', [status, Date.now()], function (err, result) {
    //         if (err) {
    //             throw err;
    //         } else {
    //             var data = {
    //                 code: '200',
    //                 code_decoration: '添加成功'
    //             }
    //             // res.send({value:data, succ: true });
    //             console.log('----------------------');
    //             console.log(result);
    //             console.log('----------------------');
    //             //console.log(data);
    //         }
    //     });
    //     connection.end();
    // }

    // if (topic === '/a14S88M2P8w/TEMP/thing/event/property/post') {
    //     const resp = JSON.parse(content);
    //     console.log(Number(resp.items.LightStatus.value));
    //     const status = Number(resp.items.LightStatus.value);

    //     var connection = mysql.createConnection({
    //         host: 'localhost',
    //         user: 'root',
    //         password: '123456',
    //         port: 3306,
    //         database: 'aliyun'
    //     })
    //     connection.connect();
    //     console.log("连接成功")
    //     connection.query('insert into temp(value,time) values(?,?)', [status, Date.now()], function (err, result) {
    //         if (err) {
    //             throw err;
    //         } else {
    //             var data = {
    //                 code: '200',
    //                 code_decoration: '添加成功'
    //             }
    //             // res.send({value:data, succ: true });
    //             console.log('----------------------');
    //             console.log(result);
    //             console.log('----------------------');
    //             //console.log(data);
    //         }
    //     });
    //     connection.end();
    // }

    if (topic === '/a1DyPxbOdVF/Window1/thing/event/property/post') {
        const resp = JSON.parse(content);
        console.log(Number(resp.items.PowerSwitch.value));
        const status = Number(resp.items.PowerSwitch.value);

        var connection = mysql.createConnection({
            host: 'localhost',
            user: 'root',
            password: '123456',
            port: 3306,
            database: 'aliyun'
        })
        connection.connect();
        console.log("连接成功")
        connection.query('insert into window(value,time) values(?,?)', [status, Date.now()], function (err, result) {
            if (err) {
                throw err;
            } else {
                var data = {
                    code: '200',
                    code_decoration: '添加成功'
                }
                // res.send({value:data, succ: true });
                console.log('----------------------');
                console.log(result);
                console.log('----------------------');
                //console.log(data);
            }
        });
        connection.end();
    }

    if (topic === '/a11NXlQKrsE/FSprinkler/thing/event/property/post') {
        const resp = JSON.parse(content);
        console.log(Number(resp.items.WaterOutletSwitch.value));
        const status = Number(resp.items.WaterOutletSwitch.value);

        var connection = mysql.createConnection({
            host: 'localhost',
            user: 'root',
            password: '123456',
            port: 3306,
            database: 'aliyun'
        })
        connection.connect();
        console.log("连接成功")
        connection.query('insert into fsp(value,time) values(?,?)', [status, Date.now()], function (err, result) {
            if (err) {
                throw err;
            } else {
                var data = {
                    code: '200',
                    code_decoration: '添加成功'
                }
                // res.send({value:data, succ: true });
                console.log('----------------------');
                console.log(result);
                console.log('----------------------');
                //console.log(data);
            }
        });
        connection.end();
    }

    if (topic === '/a1JL6psAdQI/FengShan/thing/event/property/post') {
        const resp = JSON.parse(content);
        console.log(Number(resp.items.WindSpeed.value));
        const status = Number(resp.items.WindSpeed.value);

        var connection = mysql.createConnection({
            host: 'localhost',
            user: 'root',
            password: '123456',
            port: 3306,
            database: 'aliyun'
        })
        connection.connect();
        console.log("连接成功")
        connection.query('insert into fengshan(value,time) values(?,?)', [status, Date.now()], function (err, result) {
            if (err) {
                throw err;
            } else {
                var data = {
                    code: '200',
                    code_decoration: '添加成功'
                }
                // res.send({value:data, succ: true });
                console.log('----------------------');
                console.log(result);
                console.log('----------------------');
                //console.log(data);
            }
        });
        connection.end();
    }

    if (topic === '/a1Sd6IgFLpM/Door/thing/event/property/post') {
        const resp = JSON.parse(content);
        console.log(Number(resp.items.Lock_control.value));
        const status = Number(resp.items.Lock_control.value);

        var connection = mysql.createConnection({
            host: 'localhost',
            user: 'root',
            password: '123456',
            port: 3306,
            database: 'aliyun'
        })
        connection.connect();
        console.log("连接成功")
        connection.query('insert into door(value,time) values(?,?)', [status, Date.now()], function (err, result) {
            if (err) {
                throw err;
            } else {
                var data = {
                    code: '200',
                    code_decoration: '添加成功'
                }
                // res.send({value:data, succ: true });
                console.log('----------------------');
                console.log(result);
                console.log('----------------------');
                //console.log(data);
            }
        });
        connection.end();
    }

    //ws.send2All(Number(resp.items.LightStatus.value));
    // devDao.receiveUpdate(Number(resp.items.LightStatus.value));
    // led.status = resp.items.LightStatus.value;
    //发送ACK，注意不要在回调函数有耗时逻辑。
    context.delivery.accept();
});

//计算password签名。
function hmacSha1(key, context) {
    return Buffer.from(crypto.createHmac('sha1', key).update(context).digest())
        .toString('base64');
}
