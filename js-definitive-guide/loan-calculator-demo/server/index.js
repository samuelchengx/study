var express = require('express');
var app = express();

var data = [
    {url: 'https://baidu.com', name: '百度', id: 1},
    {url: 'https://jd.com', name: '京东', id: 2}
];

// 处理get跨域问题
var allowCrossDomain = function(req, res, next) {
    // console.log('动态获取http源地址', req.headers.origin);
    res.header('Access-Control-Allow-Origin', req.headers.origin);
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    res.header('Access-Control-Allow-Credentials','true');
    next();
};

app.use(allowCrossDomain);
app.get('/getLenders', function (req,res) {
    var zip = req.query.zip
    // console.log('zip', zip)
    var resData = data.filter((item, index)=>{
        // console.log('item, index', item, index)
        return item.id == parseInt(zip);
    });
    if(zip != ''){
        res.send(resData);
    } else  {
        res.send(data);
    }
});

app.listen(8090, function () {
    console.log('the server is listening at 8090 port');
});

