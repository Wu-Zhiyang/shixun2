const mysql = require("mysql");
const client = require("../openapi");

module.exports = {
    selled(req, res) {
        var connection = mysql.createConnection({
            host: 'localhost',
            user: 'root',
            password: '123456',
            port: 3306,
            database: 'aliyun'
        })
        connection.connect();
        connection.query('select * from led order by time desc limit 1', function (err, result) {
            if (err) {
                console.log(err)
            } else {
                console.log("查询成功");
            }
            res.send(JSON.stringify(result));
        });
        connection.end();
    },

    selac(req, res) {
        var connection = mysql.createConnection({
            host: 'localhost',
            user: 'root',
            password: '123456',
            port: 3306,
            database: 'aliyun'
        })
        connection.connect();
        connection.query('select * from ac order by time desc limit 1', function (err, result) {
            if (err) {
                console.log(err)
            } else {
                console.log("查询成功");
            }
            res.send(JSON.stringify(result));
        });
        connection.end();
    },

    selfengshan(req, res) {
        var connection = mysql.createConnection({
            host: 'localhost',
            user: 'root',
            password: '123456',
            port: 3306,
            database: 'aliyun'
        })
        connection.connect();
        connection.query('select * from fengshan order by time desc limit 1', function (err, result) {
            if (err) {
                console.log(err)
            } else {
                console.log("查询成功");
            }
            res.send(JSON.stringify(result));
        });
        connection.end();
    },

    selcsp(req, res) {
        var connection = mysql.createConnection({
            host: 'localhost',
            user: 'root',
            password: '123456',
            port: 3306,
            database: 'aliyun'
        })
        connection.connect();
        connection.query('select * from csp order by time desc limit 1', function (err, result) {
            if (err) {
                console.log(err)
            } else {
                console.log("查询成功");
            }
            res.send(JSON.stringify(result));
        });
        connection.end();
    },

    selfsp(req, res) {
        var connection = mysql.createConnection({
            host: 'localhost',
            user: 'root',
            password: '123456',
            port: 3306,
            database: 'aliyun'
        })
        connection.connect();
        connection.query('select * from fsp order by time desc limit 1', function (err, result) {
            if (err) {
                console.log(err)
            } else {
                console.log("查询成功");
            }
            res.send(JSON.stringify(result));
        });
        connection.end();
    },

    selcalarm(req, res) {
        var connection = mysql.createConnection({
            host: 'localhost',
            user: 'root',
            password: '123456',
            port: 3306,
            database: 'aliyun'
        })
        connection.connect();
        connection.query('select * from calarm order by time desc limit 1', function (err, result) {
            if (err) {
                console.log(err)
            } else {
                console.log("查询成功");
            }
            res.send(JSON.stringify(result));
        });
        connection.end();
    },

    selcurtain(req, res) {
        var connection = mysql.createConnection({
            host: 'localhost',
            user: 'root',
            password: '123456',
            port: 3306,
            database: 'aliyun'
        })
        connection.connect();
        connection.query('select * from curtain order by time desc limit 1', function (err, result) {
            if (err) {
                console.log(err)
            } else {
                console.log("查询成功");
            }
            res.send(JSON.stringify(result));
        });
        connection.end();
    },

    selwindow(req, res) {
        var connection = mysql.createConnection({
            host: 'localhost',
            user: 'root',
            password: '123456',
            port: 3306,
            database: 'aliyun'
        })
        connection.connect();
        connection.query('select * from window order by time desc limit 1', function (err, result) {
            if (err) {
                console.log(err)
            } else {
                console.log("查询成功");
            }
            res.send(JSON.stringify(result));
        });
        connection.end();
    },

    seldoor(req, res) {
        var connection = mysql.createConnection({
            host: 'localhost',
            user: 'root',
            password: '123456',
            port: 3306,
            database: 'aliyun'
        })
        connection.connect();
        connection.query('select * from door order by time desc limit 1', function (err, result) {
            if (err) {
                console.log(err)
            } else {
                console.log("查询成功");
            }
            res.send(JSON.stringify(result));
        });
        connection.end();
    },

    selcamera(req, res) {
        var connection = mysql.createConnection({
            host: 'localhost',
            user: 'root',
            password: '123456',
            port: 3306,
            database: 'aliyun'
        })
        connection.connect();
        connection.query('select * from camera order by time desc limit 1', function (err, result) {
            if (err) {
                console.log(err)
            } else {
                console.log("查询成功");
            }
            res.send(JSON.stringify(result));
        });
        connection.end();
    },

    selinfo(req, res) {
        var connection = mysql.createConnection({
            host: 'localhost',
            user: 'root',
            password: '123456',
            port: 3306,
            database: 'aliyun'
        })
        connection.connect();
        connection.query('select * from environment order by time desc limit 1', function (err, result) {
            if (err) {
                console.log(err)
            } else {
                console.log("查询成功");
            }
            res.send(JSON.stringify(result));
        });
        connection.end();
    },

    alisetLED(req, res) {
        // console.log("0000000000000000000000000000000000");
        // console.log(req.body.status);
        // console.log("0000000000000000000000000000000000");
        var status = req.body.status
        var params = {
            "RegionId": "cn-shanghai",
            "Items": "{\"LightStatus\":" + status + "}",
            "ProductKey": "a14Y1stOjC9",
            "DeviceName": "LED1"
        }
        var requestOption = {
            method: 'POST'
        };

        client.client.request('SetDeviceProperty', params, requestOption).then((result) => {

            console.log("sssssssssssssssssssssssssssssssssssssssssssssss");
            console.log(JSON.stringify(result));
            res.send({ succ: true })
        }, (ex) => {
            console.log(ex);
        })
    }
}