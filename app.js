//express more easier and organized than server
const express = require('express');
const morgan = require('morgan');//3rd party
const mongoose = require('mongoose'); 

const blogRoutes = require('./routes/blogRoutes');


// express app
const app = express();

//connect to mongodb
const dbURI= 'mongodb+srv://netninja:test1234@nodetuts.5l1cz.mongodb.net/node-tuts?retryWrites=true&w=majority';
mongoose.connect(dbURI,{ useNewUrlParser: true, useUnifiedTopology: true })
.then(result =>app.listen(3000))
  .catch(err => console.log(err)); 



 
// register view engine
app.set('view engine', 'ejs');
// app.set('views', 'myviews');//name of new folder myviews

// middleware & static files(like css)
app.use(express.static('public'));//public is a folder name
app.use(express.urlencoded({ extended: true }));
app.use(morgan('dev'));

// app.use((req, res, next) => {
//   res.locals.path = req.path;
//   next();
// });

// mongoose & mongo tests
app.get('/add-blog', (req, res) => {
  const blog = new Blog({
    title: 'new blog2',
    snippet: 'about my new blog',
    body: 'more about my new blog'
  });

  blog.save()
    .then((result) => {
      res.send(result);
    })
    .catch(err => {
      console.log(err);
    });
});

app.get('/all-blogs', (req, res) => {
  Blog.find()
    .then((result) => {
      res.send(result);
    })
    .catch(err => {
      console.log(err);
    });
});

app.get('/single-blog', (req, res) => {
  Blog.findById('612d68aed647b8147480993c')
    .then((result) => {
      res.send(result)
    })
    .catch(err => {
      console.log(err);
    });
})

//routes
app.get('/', (req, res) => {
   //res.send('<p>home page</p>');
  //res.sendFile('./views/index.html', { root: __dirname });
  res.redirect('/blogs');
});

app.get('/about', (req, res) => {
  // res.send('<p>about page</p>');
 // res.sendFile('./views/about.html', { root: __dirname });
 res.render('about', { title: 'About' });
});

// redirects
// app.get('/about-us', (req, res) => {
//   res.redirect('/about');
// });


//blog routes
app.use('/blogs',blogRoutes)

// 404 page
app.use((req, res) => {
  res.status(404).render('404', { title: '404' });
});

