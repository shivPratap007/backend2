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
