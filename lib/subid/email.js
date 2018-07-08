exports.parse = function(obj) {
  var o = {};
  o.emails = [ { value: obj.email } ];
  
  return o;
}

exports.format = function(obj) {
  var o = { subject_type: 'email' };
  o.email = obj.emails[0].value;
}
