// https://tools.ietf.org/html/draft-backman-secevent-subject-identifiers-00
exports.parse = function(obj) {
  var o = {};
  // ??? Is phones the poco property?
  o.phones = [ { value: obj.phone } ];
  
  return o;
}

exports.format = function(obj) {
  var o = { subject_type: 'phone' };
  o.phone = obj.phones[0].value;
}
