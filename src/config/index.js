module.exports = {
  server_port  : 3000,
  db_url       : 'mongodb://localhost:27017/local',
  db_schemas   : [
    {file: './user_schema', collection: 'user', schemaName: 'userchema', modelName: 'UserModel'}
  ],
  route_schemas:[
    //=== index ===//
    //{file: './',      path: '/',            method: 'get',      type: 'get'},
    //{file: './',      path: '/show/:id',    method: 'dynamic',  type: 'get'},
    //=== user ===//
    {file: './user', path: '/user',       method: 'get',      type: 'get'},
    {file: './user', path: '/user/:name', method: 'hello',    type: 'get'},
    {file: './user', path: '/user',       method: 'post',     type: 'post'},
    {file: './user', path: '/user',       method: 'put',      type: 'put'},
    {file: './user', path: '/user',       method: 'delete',   type: 'delete'}
    //=== dev ===//
    //{file: './dev',   path: '/dev',         method: 'get',      type: 'get'},
    //{file: './dev',   path: '/dev/:mode',   method: 'mode',     type: 'get'},
    //{file: './dev',   path: '/dev',         method: 'post',     type: 'post'},
    //{file: './dev',   path: '/dev',         method: 'put',      type: 'put'},
    //{file: './dev',   path: '/dev',         method: 'delete',   type: 'delete'}
  ]
};