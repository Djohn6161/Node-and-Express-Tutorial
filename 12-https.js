const http = require('http');

const server = http.createServer((req, res) => {
    if(req.url === '/'){
        res.write('Welcome to our Home Page');
        res.end();
    }

    if(req.url === '/about'){
        res.write("Here is our short History");
        res.end();

    }

    res.write(`
    <h1>Oops!</h1>
    <p>We Can't seem to find the page your looking for</p>
    <a href="/"> Back Home </a>
    `)
    res.end();

})

server.listen(5000);