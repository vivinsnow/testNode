/**
 * Created by vivin on 2017-04-12.
 */
let http  = require('http');

let server = http.createServer((req,res)=>{

   res.end('123');
});

server.listen(3000);