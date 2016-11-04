var should = require('chai').should();

var WCParser = require('./../webconfig-parser');

describe('parse web.config.sample1 without connectionStrings', function() {
  var config = WCParser.parse({
    url: './test/web.config.sample1'
  });

  it('should return correct parameters', function() {
    config.should.have.property('UnobtrusiveJavaScriptEnabled')
    .and.equal('true');
    config.should.have.property('ClientValidationEnabled')
    .and.equal('true');
    config.should.have.property('webpages:Enabled')
    .and.equal('false');
    config.should.have.property('webpages:Version')
    .and.equal('3.0.0.0');
    config.should.not.have.property('connectionStrings');
  });

  it('should return the last occurence of duplicate keys', function() {
    config.should.have.property('fakeUrl')
    .and.equal('127.0.0.1');
  });
});

describe('parse web.config.sample1 with connectionStrings', function() {
  var config = WCParser.parse({
    url: './test/web.config.sample1',
    readConnectionStrings: true
  });

  it('should return correct parameters', function() {
    config.should.have.property('UnobtrusiveJavaScriptEnabled')
    .and.equal('true');
    config.should.have.property('ClientValidationEnabled')
    .and.equal('true');
    config.should.have.property('webpages:Enabled')
    .and.equal('false');
    config.should.have.property('webpages:Version')
    .and.equal('3.0.0.0');
    config.should.have.property('connectionStrings');
    config.connectionStrings.should.have.property('DefaultConnection')
    .and.equal('Data Source=(LocalDb)\\v11.0;AttachDbFilename=|DataDirectory|\\aspnet-WebApplication45-20140804053515.mdf;Initial Catalog=aspnet-WebApplication45-20140804053515;Integrated Security=True');
  });

  it('should return the last occurence of duplicate keys', function() {
    config.should.have.property('fakeUrl')
    .and.equal('127.0.0.1');
  });

});