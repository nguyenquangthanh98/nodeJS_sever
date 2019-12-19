// var http = require('http');

// //create a server object:
// http.createServer(function(req, res) { // req và res đặt tên tùy ý
//     res.write('<h1>Hello World!</h1>'); //write a response to the client
//     res.end(); //end the response
// }).listen(8080); //the server object listens on port 8080

var express = require('express')
var server = express()
var fs = require('fs')
var path = require('path');

var userRouter = require('./router/userRouter.js');
server.use('/', express.static(path.join(__dirname, './public')))

server.use('/api/v4/user', userRouter);
// server.get("/", (req, res) => {
//     res.sendFile(path.join(__dirname, './index.html'))
// })
// server.get("/services", (req, res) => {
//     res.sendFile(path.join(__dirname, './public/html/services.html'))
// })
// server.get("/features", (req, res) => {
//     res.sendFile(path.join(__dirname, './public/html/features.html'))
// })
// server.get("/portfolio", (req, res) => {
//     res.sendFile(path.join(__dirname, './public/html/portfolio.html'))
// })
// server.get("/contact", (req, res) => {
//     res.sendFile(path.join(__dirname, './public/html/contact.html'))
// })

server.get('/download', function(req, res) {
    res.download(path.join(__dirname, 'public/image/bg-banner.png'))
})

server.listen(3000, function() {
    console.log('listen on 3000');
})