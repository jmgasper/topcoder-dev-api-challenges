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
    instance = new ApChallengeMicroservice.InlineResponse2004ResultContent();
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

  describe('InlineResponse2004ResultContent', function() {
    it('should create an instance of InlineResponse2004ResultContent', function() {
      // uncomment below and update the code to test InlineResponse2004ResultContent
      //var instane = new ApChallengeMicroservice.InlineResponse2004ResultContent();
      //expect(instance).to.be.a(ApChallengeMicroservice.InlineResponse2004ResultContent);
    });

    it('should have the property placement (base name: "placement")', function() {
      // uncomment below and update the code to test the property placement
      //var instane = new ApChallengeMicroservice.InlineResponse2004ResultContent();
      //expect(instance).to.be();
    });

    it('should have the property pointTotal (base name: "pointTotal")', function() {
      // uncomment below and update the code to test the property pointTotal
      //var instane = new ApChallengeMicroservice.InlineResponse2004ResultContent();
      //expect(instance).to.be();
    });

    it('should have the property oldRating (base name: "oldRating")', function() {
      // uncomment below and update the code to test the property oldRating
      //var instane = new ApChallengeMicroservice.InlineResponse2004ResultContent();
      //expect(instance).to.be();
    });

    it('should have the property newRating (base name: "newRating")', function() {
      // uncomment below and update the code to test the property newRating
      //var instane = new ApChallengeMicroservice.InlineResponse2004ResultContent();
      //expect(instance).to.be();
    });

    it('should have the property rated (base name: "rated")', function() {
      // uncomment below and update the code to test the property rated
      //var instane = new ApChallengeMicroservice.InlineResponse2004ResultContent();
      //expect(instance).to.be();
    });

    it('should have the property userId (base name: "userId")', function() {
      // uncomment below and update the code to test the property userId
      //var instane = new ApChallengeMicroservice.InlineResponse2004ResultContent();
      //expect(instance).to.be();
    });

  });

}));
