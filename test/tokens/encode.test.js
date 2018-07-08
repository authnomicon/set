/* global describe, it */

var expect = require('chai').expect;
var sinon = require('sinon');
var factory = require('../../app/tokens/encode');


describe('tokens/encode', function() {
  
  it('should export factory function', function() {
    expect(factory).to.be.a('function');
  });
  
  it('should be annotated', function() {
    expect(factory['@implements']).to.be.undefined;
    expect(factory['@singleton']).to.be.undefined;
  });
  
  describe('encode', function() {
    
    describe('default behavior', function() {
      var claims;
      
      before(function(done) {
        var msg = {
          user: {
            id: '1',
            displayName: 'John Doe'
          }
        }
        
        var encode = factory();
        encode(msg, function(err, c) {
          if (err) { return done(err); }
          claims = c;
          done();
        });
      });
      
      it('should encode', function() {
        expect(claims).to.deep.equal({
          typ: 'secevent+jwt',
          sub: '1'
        });
      });
    }); // default behavior
    
  }); // encode
  
});
