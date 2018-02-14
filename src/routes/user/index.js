//const get     = require('./get');
//const post    = require('./post');
//const put     = require('./put');
//const del     = require('./delete');
const dev          = require('./dev');
const fs           = require('fs');
const path         = require('path');
const testFilePath = path.join(__dirname, '..', '..', 'database', 'test', 'test.json');

const user = {};

user.get = (req, res) => {
  fs.readFile(testFilePath, 'utf8', (err, data) => {
    if (err) throw err;
    res.render('pages/user/index', {msg: `type : get`, data: JSON.parse(data)})
  });
};

user.hello = (req, res) => {
  res.render('pages/user/index', {msg: `user name : ${req.params.name}`})
};

user.put = (req, res) => {
  res.render('pages/user/index', {msg: `type : put`})
};

user.post = (req, res) => {
  res.render('pages/user/index', {msg: `type : post`})
};

user.delete = (req, res) => {
  res.render('pages/user/index', {msg: `type : delete`})
};

module.exports = user;