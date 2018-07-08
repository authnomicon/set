exports = module.exports = function(receiveHandler) {
  var express = require('express');
  var router = new express.Router();
  
  router.post('/', receiveHandler);
  
  return router;
};

exports['@implements'] = [
  'http://i.bixbyjs.org/http/Service',
  'http://schemas.authnomicon.org/js/http/set/ReceiverService'
];
exports['@path'] = '/oauth2/authorize';
exports['@require'] = [
  './handlers/receive'
];
