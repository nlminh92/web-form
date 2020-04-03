var express = require('express');
var jwt = require('jsonwebtoken');

var config = require('../../config/config');

var app = express();
app.set('superSecret', config.secret);

module.exports.generateToken = function(user) {
  const payload = {
    id: user.id
  };
  var token = jwt.sign(
    payload,
    app.get('superSecret'),
    {
      expiresIn : 60*60*24 // expires in 1 day
    }
  );

  return token;
};

