//const get     = require('./get');
//const post    = require('./post');
//const put     = require('./put');
//const del     = require('./delete');
const user = {};

user.get = (req, res) => {
  res.render('pages/user/index',{msg:`type : get`})
};

user.hello = (req,res)=>{
  res.render('pages/user/index',{msg:`user name : ${req.params.name}`})
};

user.put = (req, res) => {
  res.render('pages/user/index',{msg:`type : put`})
};

user.post = (req, res) => {
  res.render('pages/user/index',{msg:`type : post`})
};

user.delete = (req, res) => {
  res.render('pages/user/index',{msg:`type : delete`})
};

module.exports = user;