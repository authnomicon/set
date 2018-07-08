exports.parse = function(obj) {
  // TODO:
  var o = {};
  o.emails = [ { value: obj.email } ];
  
  return o;
}

exports.format = function(obj) {
  var o = { subject_type: 'id_token_claims' };
  // TODO: Put iss and sub in here
  
  if (obj.emails && obj.emails.length > 0) {
    o.email = obj.emails[0].value;
  }
  if (obj.phones && obj.phones.length > 0) {
    o.phone = obj.phones[0].value;
  }
}
