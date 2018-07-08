// https://tools.ietf.org/html/draft-backman-secevent-subject-identifiers-00
// https://bitbucket.org/openid/risc/src/28269d49e26c35940babca464068dbb7b7cf7864/openid-risc-profile-1_0.txt?at=master&fileviewer=file-view-default
exports.parse = function(obj) {
  var o = {};
  o.id = obj.sub;
  // TODO: Issuer?
  
  return o;
}

exports.format = function(obj) {
  var o = { subject_type: 'iss_sub' };
  // TODO: best way to get the issuer value?
  o.sub = obj.id;
}
