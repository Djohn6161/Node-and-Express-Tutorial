const http = require('http')
const { readFileSync } = require('fs');

//get all files

const homePage = readFileSync('./navbar-app/index.html')
const homeStyles = readFileSync('./navbar-app/styles.css')
const homeImage = readFileSync('./navbar-app/logo.svg')
const homeLogic = readFileSync('./navbar-app/browser-app.js')


const server = http.createServer((req, res) => {
    //console.log(req.method);
    const url = req.url;
    if(url === '/')
    {//*  Home Page
        console.log(req.url);
        res.writeHead(200, {'content-type':'text/html'})
        res.write(homePage)
        res.end()
    } 
    //* styles
    else if(url === '/styles.css'){
        console.log(req.url);
        res.writeHead(200, {'content-type':'text/css'})
        res.write(homeStyles)
        res.end()
    }
    //* image/log
    else if(url === '/logo.svg'){
        console.log(req.url);
        res.writeHead(200, {'content-type':'image/svg+xml'})
        res.write(homeImage)
        res.end()
    }
    //* logic
    else if(url === '/browser-app.js'){
        console.log(req.url);
        res.writeHead(200, {'content-type':'text/javascript'})
        res.write(homeLogic)
        res.end()
    }
    //* about page
    else if(url === '/about'){
        console.log(req.url);
        res.writeHead(200, {'content-type':'text/html'})
        res.write('<h1 style="text-aligh: center;"> About Page</h1>')
        res.end()
    }
    else{ //* 404 not found page
        console.log(req.url);
        res.writeHead(404, {'content-type':'text/html'})
        res.write('<h1>Page not Found</h1>')
        res.end()
    }
})

server.listen(5000)