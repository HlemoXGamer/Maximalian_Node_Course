const http = require("http");
const fs = require("fs");
const url = require("url");

// http.createServer((req, res) => {
//     const url = req.url;
//     const method = req.method;
//     switch (url) {
//         case "/":
//             res.write('<form>"Post Message Form"</form>');
//             res.end();
//             break;
//         case "/message":
//             res.write("<h1>Hello World</h1>");
//             if (method === "POST") {
//                 const body = [];
//                 req.on("data", (chunk) => {
//                     console.log(chunk);
//                     body.push(chunk);
//                 });
//                 req.on("end", () => {
//                     const parsedBody = Buffer.concat(body).toString();
//                     fs.writeFileSync("message.txt", parsedBody);
//                 });
//                 res.statusCode = 302;
//                 res.setHeader("Location", "/");
//                 return res.end();
//             }
//             res.end();
//             break;
//         default:
//             break;
//     }
// }).listen(3000);

http.createServer((req, res) => {
    res.writeHead(200, { "Content-Type": "text/html" });
    const q = url.parse(req.url, true).query;
    const text = q.year + " " + q.month;
    res.end(text);
}).listen(3000);
