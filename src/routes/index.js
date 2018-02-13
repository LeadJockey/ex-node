const route = {};

route.load = (rootPath, app, schemas) => {
  const express = require('express');
  const router  = express.Router();
  schemas.forEach((scma) => {
    let fileName   = scma.file;
    let reqPath    = scma.path;
    let reqType    = scma.type;
    const file     = require(fileName);
    const callback = file[scma.method];

    app.route(reqPath)[reqType](callback);
  });

  app.use(rootPath, router);
};

module.exports = route;