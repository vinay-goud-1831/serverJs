const http = require("http");
const port = 8081;

http.createServer((req,res)=> {
    res.writeHead(400,{"content-type":"text/html"});
    res.write("<h2> hey server started :-)</h2>");
    res.end();
})
.listen(port, () => {
    console.log(`Nodejs server started running on port ${port}`);
});