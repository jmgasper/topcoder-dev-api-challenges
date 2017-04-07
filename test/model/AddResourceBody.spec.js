/**
 * ap-challenge-microservice
 * Services that provide access and interaction with all sorts of challenges, including design, dev, single round matches, and marathon matches. 
 *
 * OpenAPI spec version: 1.0.5
 * 
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD.
    define(['expect.js', '../../src/index'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    factory(require('expect.js'), require('../../src/index'));
  } else {
    // Browser globals (root is window)
    factory(root.expect, root.ApChallengeMicroservice);
  }
}(this, function(expect, ApChallengeMicroservice) {
  'use strict';

  var instance;

  beforeEach(function() {
    instance = new ApChallengeMicroservice.AddResourceBody();
  });

  var getProperty = function(object, getter, property) {
    // Use getter method if present; otherwise, get the property directly.
    if (typeof object[getter] === 'function')
      return object[getter]();
    else
      return object[property];
  }

  var setProperty = function(object, setter, property, value) {
    // Use setter method if present; otherwise, set the property directly.
    if (typeof object[setter] === 'function')
      object[setter](value);
    else
      object[property] = value;
  }

  describe('AddResourceBody', function() {
    it('should create an instance of AddResourceBody', function() {
      // uncomment below and update the code to test AddResourceBody
      //var instane = new ApChallengeMicroservice.AddResourceBody();
      //expect(instance).to.be.a(ApChallengeMicroservice.AddResourceBody);
    });

    it('should have the property roleId (base name: "roleId")', function() {
      // uncomment below and update the code to test the property roleId
      //var instane = new ApChallengeMicroservice.AddResourceBody();
      //expect(instance).to.be();
    });

    it('should have the property resourceUserId (base name: "resourceUserId")', function() {
      // uncomment below and update the code to test the property resourceUserId
      //var instane = new ApChallengeMicroservice.AddResourceBody();
      //expect(instance).to.be();
    });

    it('should have the property phaseId (base name: "phaseId")', function() {
      // uncomment below and update the code to test the property phaseId
      //var instane = new ApChallengeMicroservice.AddResourceBody();
      //expect(instance).to.be();
    });

    it('should have the property addNotification (base name: "addNotification")', function() {
      // uncomment below and update the code to test the property addNotification
      //var instane = new ApChallengeMicroservice.AddResourceBody();
      //expect(instance).to.be();
    });

    it('should have the property addForumWatch (base name: "addForumWatch")', function() {
      // uncomment below and update the code to test the property addForumWatch
      //var instane = new ApChallengeMicroservice.AddResourceBody();
      //expect(instance).to.be();
    });

    it('should have the property isStudio (base name: "isStudio")', function() {
      // uncomment below and update the code to test the property isStudio
      //var instane = new ApChallengeMicroservice.AddResourceBody();
      //expect(instance).to.be();
    });

    it('should have the property checkTerm (base name: "checkTerm")', function() {
      // uncomment below and update the code to test the property checkTerm
      //var instane = new ApChallengeMicroservice.AddResourceBody();
      //expect(instance).to.be();
    });

  });

}));
