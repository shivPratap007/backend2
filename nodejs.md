## Node js
- `module.exports={add:add, subtract:sub}`=> It gives an object.
- `.mjs extension` => in Commonjs module to use `import {function} from "./filename"`.
- `.cjs extension` => in ES modulle to use `require("./filename")`
- `querystring.parse(querystring)`=> it takes a query string (eg. 'query=shoes&category=clothing') and gives an object ({
    query: 'shoes',
    category: 'clothing'
}) which contains a key value pairs of the data available into the query string.
- `url.parse(url)`=> It takes a url and creates a new object from it which contains different sections of url divided into key and value pairs.
- `Some times you just pass the simple request to the package installed and it returns the whole data which can also be obtained from api but actually internally the package itself is making an api call thats why its no need for us to make it.`
- `express clients se anne vali requests ko serve karega but agar hme express se koi request bhejni ho to hm axios ka use karenge`
- ` req.on('data', chunk => {
        requestData += chunk;
    });

    req.on('end', () => {
        console.log('Received data in chunks:', requestData);
        res.send('Data received successfully.');
    });`
## REST API

- `Everything revolves around the resourse` => So in REST API everything revolves around the resources it means that the routes name must be self expalinatory. eg. "Belglore/movives/night";


## Using static files in node.js

`app.use('/',__dirname+'folder_name')` => only the folder in which contains index.html it automatically detects the index.html


## Connecting to web sockets

`const express=require("express");
const http=require('http');
const socketio=require('socket.io');

const app=express();
const server=http.createServer(app);
const io=socketio(server);

app.use('/',express.static(__dirname+'/public/')) 

server.listen(7000,()=>{
    console.log('App is running on port no. 7000');
    
})
`

- Write this in  public/index.js file
- create `./public/index.html, ./public/index.js`
- Add them in html code
```
 <script src="/socket.io/socket.io.js"></script>
    <script src="script.js"></script>
```
- Dont create /socket.io/socket.io.js file

- Write this in public/index.js
```
var socket=io();
```

- Now add this in outer index.js
```
io.on('connection',(socket)=>{
    console.log("A new user is connected");
})

```

