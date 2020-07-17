const { request } = require("http");

var express = require("express"),
    cors = require("cors"),
    url = require("url"),
    app = express(),
    listenPort = 8080;

app.use(cors());

var sys = require('sys')

var exec = require('child_process').exec;

function puts(error, stdout, stderr) { sys.puts(stdout) }

app.get("/up", (request, response) => {
    // let returnedUrl = url.parse(request.url, true).query;
    let success = {
        statusCode: 200,
        message: "up from server"
    }

    exec("./forward.sh", puts);
    response.json(success)
})
app.get("/down", (request, response) => {
    // let returnedUrl = url.parse(request.url, true).query;
    let success = {
        statusCode: 200,
        message: "down from server"
    }

    response.json(success)
})
app.get("/left", (request, response) => {
    // let returnedUrl = url.parse(request.url, true).query;
    let success = {
        statusCode: 200,
        message: "left from server"
    }

    response.json(success)
})
app.get("/right", (request, response) => {
    // let returnedUrl = url.parse(request.url, true).query;
    let success = {
        statusCode: 200,
        message: "right from server"
    }

    response.json(success)
})

app.listen(listenPort, () => {
    console.log("API started on Port: " + listenPort);
})