var express = require('express');

var app = express();
var multer = require('multer')
var constants = require('constants');
var constant = require('./config/constants');
var bodyParser = require('body-parser');

var port = process.env.PORT || 8042;
var mongoose = require('mongoose');
var path = require('path');
var bodyParser = require('body-parser');

var morgan = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var path = require("path");


/***************Mongodb configuratrion********************/
const cors = require('cors');
//configuration ===============================================================

// cros
app.use(cors({ origin: '*' }));
app.use(function (req, res, next) {
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, x-access-token');
  next();
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

//set up our express application
app.use(morgan('dev')); // log every request to the console
app.use(cookieParser()); // read cookies (needed for auth)

//view engine setup
app.use(express.static(path.join(__dirname, 'public')));
app.set('views', path.join(__dirname, 'app/views'));
app.set('view engine', 'ejs');
app.use('/uploads',express.static('uploads'));

require('./config/routes.js')(app); // load our routes and pass in our app and fully configured passport

app.listen(port);
console.log('The magic happens on port ' + port);


//upload file

const  multipart  =  require('connect-multiparty');
const  multipartMiddleware  =  multipart({ uploadDir:  './upload' });
app.get('/api/upload', (req, res) => {
    res.json({
      'message': 'hello'
    });
});
// app.post('/api/upload', multipartMiddleware, (req, res) => {
//     res.json({
//         'message': 'File uploaded successfully'
//     });
// });

app.get('/api/upload1', (req, res) => {
    res.json({
      'message': 'hello'
    });
});

app.post('/api/upload1', (req, res) => {
  uploadFile(req, res, (error) => {
    if (error) {
      return res.send(`Error when trying to upload: ${error}`);
    }
    res.json({
      'file': `/upload/${req.file.filename}`
    });
  });
});

let diskStorage = multer.diskStorage({
  destination: (req, file, callback) => {
    callback(null, "./upload");
  },
  filename: (req, file, callback) => {
    let math = ["image/png", "image/jpeg", "image/jpg"];
    if (math.indexOf(file.mimetype) === -1) {
      let errorMess = `The file <strong>${file.originalname}</strong> is invalid. Only allowed to upload image jpeg or png.`;
      return callback(errorMess, null);
    }
    let filename = `${file.originalname}`;
    callback(null, filename);
  }
});
// app.get('/api/upload', (req, res) => {
//   // res.sendFile(path.join(`${__dirname}/src/app/components/form3/form3.component.html`));
//   res.json({
//         'message': 'hello'
//       });
// });
//
// let diskStorage = multer.diskStorage({
//   destination: (req, file, callback) => {
//     callback(null, "./upload");
//   },
//   filename: (req, file, callback) => {
//     let math = ["image/png", "image/jpeg"];
//     if (math.indexOf(file.mimetype) === -1) {
//       let errorMess = `The file <strong>${file.originalname}</strong> is invalid. Only allowed to upload image jpeg or png.`;
//       return callback(errorMess, null);
//     }
//     let filename = `${Date.now()}-${file.originalname}`;
//     callback(null, filename);
//   }
// });
//
  let uploadFile = multer({storage: diskStorage}).single("file");
  //
  app.post('/api/upload', (req, res) => {
    uploadFile(req, res, (error) => {
      if (error) {
        return res.send(`Error when trying to upload: ${error}`);
      }
      res.json({
        'file': `/upload/${req.file.filename}`
      });
    });
  });




//catch 404 and forward to error handler
app.use(function (req, res, next) {
    res.status(404).render('404', {title: "Sorry, page not found", session: req.sessionbo});
});

app.use(function (req, res, next) {
    res.status(500).render('404', {title: "Sorry, page not found"});
});
exports = module.exports = app;
