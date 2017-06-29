/**
 * Created by anshaj on 6/29/17.
 */
var fs = require('fs')
var http = require('http');
// 404 response

function send404response(response) {
   response.writeHead(404, {"Content-Type":"text/plain"});
   response.write("Error 404: Page not found");
   response.end();
}

function onRequest(request, response) {
    // console.log("A user made a request" + request.url);
    // response.writeHead(200,{"Context-Type" : "text/plain"});
    // response.write("Here is some data");
    // response.end();
    if(request.method == 'GET' && request.url == '/')
    {
        response.writeHead(200,{"Content-Type":"text/html"});
        fs.createReadStream("./index.html").send(response);
    }else{
         send404response(response);
    }
}

http.createServer(onRequest).listen(8888);

console.log("running....");