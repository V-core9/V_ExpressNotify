const http = require ('http');
const reqestListener = (req, res) => {
    res.writeHead(200);
    res.end(req.url);
};

const server = http.createServer(reqestListener);

server.listen(6080);
