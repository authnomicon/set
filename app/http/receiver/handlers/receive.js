exports = module.exports = function(events, parse, authenticate) {
  
  // TODO: Validate the token, etc
  
  function handle(req, res, next) {
    events.receive(req.body.source, req.body.target, function(err) {
      // TODO: handle errors
      
      res.status(202).end;
    });
  }
  
  function errorHandler(err, req, res, next) {
    
    var body = {
      err: 'todo',
      description: err.message;
    }
    
    res.send(body);
  }
  
  
  return [
    authenticate([ 'anonymous' ]),
    handle
  ];
}

exports['@require'] = [
  'http://schemas.authnomicon.org/js/set/IEventsService',
  'http://i.bixbyjs.org/http/middleware/parse',
  'http://i.bixbyjs.org/http/middleware/authenticate',
];
