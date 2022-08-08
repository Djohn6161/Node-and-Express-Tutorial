const EventEmitter = require('events');

// ? on - listen for an event
// ? emit - emit an event

const customEmitter = new EventEmitter();

customEmitter.on('response', (name, age) => {
    console.log(`data received ${name} age of ${age}`);
})

customEmitter.on('response', () => {
    console.log(`some other logic here `);
})

customEmitter.on('response', () => {
    console.log(`other other logic here`);
})
customEmitter.emit('response', 'john', 36);


//* This is the HTTP module example for emitter*//

// const http = require('http')

// // const server = http.createServer ((req, res) => {
// //     res.end('welcome')
// // })

// //Using Event Emitter API
// const server = http.createServer()
// //emits request event 
// // subscribe to it / listen fot it / respond to it
// server.on('request', ('request', (req, res) => {
//     res.end('welcome')
// }))

// server.listen(5000)