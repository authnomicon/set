exports = module.exports = function() {
  
  return function encode(msg, cb) {
    var claims = {};
    
    // TODO: set `jti`, if not present in message
    
    claims.typ = 'secevent+jwt';
    
    // TODO: Allow event-specific payloads to set `sub`, if needed
    if (msg.user) {
      claims.sub = msg.user.id;
    }
    
    // TODO: transactionID -> txn support
    // TODO: timestamp -> toe support
    
    return cb(null, claims);
  };
};
