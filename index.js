const server = require('./api/server');

const port = process.env.PORT || 4000;

server.listen(req, res) {
    res.send(`*** Server listening on port: ${port} ***`);
};
