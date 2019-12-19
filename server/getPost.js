var express = require('express')
var app = express()
var fs = require('fs');
var path = require('path');
app.use(express.static(path.join(__dirname, 'public')))
console.log(__dirname);
app.use(express.urlencoded())

app.get('/', function(req, res, next) {
    res.sendfile(path.join(__dirname, './public/html/services.html'))
})
app.get('/login', function(req, res) {
    res.sendfile(path.join(__dirname, 'public/html/dangnhap.html'))
})

app.get('/google.com', function(req, res, next) {
    res.redirect('https://www.google.com')
})
app.get('/google-maps', function(req, res, next) {
    res.redirect('https://www.google.com/maps') // chuyen đường dẫn sang google maps
})
app.post('/login', function(req, res, next) {
    if (req.body.username === "admin" && req.body.password === "123456") {
        res.json(
            "Chúc bạn đã đăng nhập thành công"
        )
    } else {
        res.redirect('/login')
            // alert('thử lại nào');
            // res.json(
            // 'chúc bạn may mắn lần sau :D'

    }
})

app.get('/sum/:a/:b', function(req, res) {
        var sum = parseInt(req.params.a) + parseInt(req.params.b)
        res.send('Sum 2 so vua truyen la:' + sum)
    })
    //download
app.get('/download', function(req, res) {
    res.download(path.join(__dirname, 'public/image/bg-banner.png'))
})

app.post('/post', function(req, res) {
    res.json(
        'user:' + req.body.user + " , " +
        'pass:' + req.body.password
    )
})


app.listen(3000, function() {
    console.log('listen on 3000');
})