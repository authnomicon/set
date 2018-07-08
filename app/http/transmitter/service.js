exports = module.exports = function(pollingHandler) {
  var express = require('express');
  var router = new express.Router();
  
  router.post('/', pollingHandler);
  
  return router;
};

exports['@implements'] = [
  'http://i.bixbyjs.org/http/Service',
  'http://schemas.authnomicon.org/js/http/set/TransmitterService'
];
exports['@path'] = '/oauth2/authorize';
exports['@require'] = [
  './handlers/polling'
];
