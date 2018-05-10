module.exports = function devServer(app) {
    process.env.NODE_TLS_REJECT_UNAUTHORIZED = '0';
    const request = require('superagent');
    const urlLK = 'https://marking.gnivc.ru:9000';
    const bodyParser = require('body-parser');
    app.use(bodyParser.json({ limit: '4mb' }));

    const get_delete_request = (req, res) => {
        const url = urlLK + req.originalUrl;
        return request
                [req.method.toLowerCase()](url)
                .set('Content-Type', 'application/json')
                .set('Authorization', req.headers.authorization)
                .then(function (resp) {
                    const json = JSON.stringify(resp.body);
                    res.setHeader('Content-Type', 'application/json');
                    res.send(json);
                }).catch(e => {
                    res.setHeader('Content-Type', 'application/json');
                    res.status(e.status).send(e.response.body);
                });
    }

    const post_put_request = (req, res) => {
        const url = urlLK + req.originalUrl;
        return request
                [req.method.toLowerCase()](url)
                .set('Content-Type', 'application/json')
                .send(req.body)
                .set('Authorization', req.headers.authorization)
                .then(function (resp) {
                    const json = JSON.stringify(resp.body);
                    res.setHeader('Content-Type', 'application/json');
                    res.send(json);
                }).catch(e => {
                    res.setHeader('Content-Type', 'application/json');
                    res.status(e.status).send(e.response.body);
                });
    }

    app.all('/api/*', (req, res) => {
        if (req.method === 'GET' || req.method === 'DELETE') {
            return get_delete_request(req, res);
        } else {
            return post_put_request(req, res);
        }
    })

    app.all('/lk/*', (req, res) => {
        if (req.method === 'GET' || req.method === 'DELETE') {
            return get_delete_request(req, res);
        } else {
            return post_put_request(req, res);
        }
    })
}