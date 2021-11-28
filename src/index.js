const vNotify = require("./notify");

const vApp = (port = 6080) => {
  const http = require("http");
  const reqestListener = (req, res) => {
    //res.writeHead(200);
    var body = `<h2>${req.url}</h2> <pre>${JSON.stringify({url: req.url , headers: req.headers, version: req.httpVersion, method: req.method, status: req.statusCode, message: req.statusMessage}, true, 2)}</pre>`;
    res.setHeader('content-type', 'text/html');
    res.setHeader('Content-Length', Buffer.byteLength(body));
    res.setHeader('Cookie', ['type=ninja', 'language=javascript']);
    res.end(body);

    //if (req.url.indexOf('favicon.ico') === -1) vNotify({url: req.url});
    if (req.url.indexOf('v_notify') > -1) vNotify({url: req.url , headers: req.headers, version: req.httpVersion, method: req.method, status: req.statusCode, message: req.statusMessage});
  };

  const server = http.createServer(reqestListener);

  server.listen(port);
};

module.exports = vApp;