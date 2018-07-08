/* global describe, it */

var expect = require('chai').expect;


describe('@authnomicon/set', function() {
  
  it('should throw if required', function() {
    expect(function() {
      var pkg = require('..');
    }).to.throw(Error).with.property('code', 'MODULE_NOT_FOUND');
  });
  
});
