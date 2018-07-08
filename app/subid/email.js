exports = module.exports = function() {
  return require('../../lib/subid/email');
}

exports['@implements'] = 'http://schemas.authnomicon.org/js/set/SubjectIdentifierType';
exports['@type'] = 'email';
