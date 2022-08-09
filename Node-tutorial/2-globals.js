// GLOBALS - No Window !!1

// __dirname    - path to current directory 
// __filename   - file name
// require      - function to use modules (CommonJs)
// module       - info about current module (file)
// Process      - info about env where the program is being excuted

console.log("This is directory name", 
    __dirname
);
setInterval(() => {
    console.log('Hello world');
}, 1000)