//console.log(global);

//output appears after 3 seconds
global.setTimeout(() => {
    console.log('in the timeout');
}, 3000);

setTimeout(() => {
    console.log('in the timeout');
    clearInterval(int);
  }, 3000);
  
   const int = setInterval(() => {
     console.log('in the interval');
   }, 1000);
  
   console.log(__dirname);//abs path
   console.log(__filename);// abs path with filename
  
   // no access to DOM methods
   console.log(document.querySelector);