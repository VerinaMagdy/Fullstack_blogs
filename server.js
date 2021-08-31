//local server
const http = require('http');
const fs =require('fs');//fs-file sys
const _=require('lodash');

const server = http.createServer((req, res) => {
  //console.log(req.url, req.method);

//lodash
const num= _.random(0,20);//loads in console a random number 
console.log(num);

const greet =_.once(() => {
  console.log('hello');
});
greet();
greet();//not allowed to run twice


// set header content type
res.setHeader('Content-Type', 'text/html');

// res.write('<head><link rel=styleseet" href="#"></head>');
// res.write('<p>hello, ninjas<p>');
//  res.write('<p>hello again, ninjas</p>');
//  res.end();

// routing
let path = './views/';
switch(req.url) {
  case '/':
    path += 'index.html';
    res.statusCode = 200;
    break;
  case '/about':
    path += 'about.html';
    res.statusCode = 200;
    break;
  case '/about-us':
    res.statusCode = 301;
    res.setHeader('Location', '/about');
    res.end();
   break;
  default:
    path += '404.html';
    res.statusCode = 404;
   break;
}




// send html file
  fs.readFile(path, (err, data) => {
    if (err) {
      console.log(err);
      res.end();
    }else{
//res.write(data);
res.end(data);
    }
})

});


// localhost is the default value for 2nd argument
server.listen(3000, 'localhost', () => {
  console.log('listening for requests on port 3000');
});
//console appears here not in browser as it is running on backedn not front

