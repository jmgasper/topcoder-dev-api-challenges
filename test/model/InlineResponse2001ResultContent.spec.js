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
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
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
    instance = new ApChallengeMicroservice.InlineResponse2001ResultContent();
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

  describe('InlineResponse2001ResultContent', function() {
    it('should create an instance of InlineResponse2001ResultContent', function() {
      // uncomment below and update the code to test InlineResponse2001ResultContent
      //var instane = new ApChallengeMicroservice.InlineResponse2001ResultContent();
      //expect(instance).to.be.a(ApChallengeMicroservice.InlineResponse2001ResultContent);
    });

    it('should have the property submissions (base name: "submissions")', function() {
      // uncomment below and update the code to test the property submissions
      //var instane = new ApChallengeMicroservice.InlineResponse2001ResultContent();
      //expect(instance).to.be();
    });

    it('should have the property updatedAt (base name: "updatedAt")', function() {
      // uncomment below and update the code to test the property updatedAt
      //var instane = new ApChallengeMicroservice.InlineResponse2001ResultContent();
      //expect(instance).to.be();
    });

    it('should have the property createdAt (base name: "createdAt")', function() {
      // uncomment below and update the code to test the property createdAt
      //var instane = new ApChallengeMicroservice.InlineResponse2001ResultContent();
      //expect(instance).to.be();
    });

    it('should have the property createdBy (base name: "createdBy")', function() {
      // uncomment below and update the code to test the property createdBy
      //var instane = new ApChallengeMicroservice.InlineResponse2001ResultContent();
      //expect(instance).to.be();
    });

    it('should have the property updatedBy (base name: "updatedBy")', function() {
      // uncomment below and update the code to test the property updatedBy
      //var instane = new ApChallengeMicroservice.InlineResponse2001ResultContent();
      //expect(instance).to.be();
    });

    it('should have the property technologies (base name: "technologies")', function() {
      // uncomment below and update the code to test the property technologies
      //var instane = new ApChallengeMicroservice.InlineResponse2001ResultContent();
      //expect(instance).to.be();
    });

    it('should have the property status (base name: "status")', function() {
      // uncomment below and update the code to test the property status
      //var instane = new ApChallengeMicroservice.InlineResponse2001ResultContent();
      //expect(instance).to.be();
    });

    it('should have the property track (base name: "track")', function() {
      // uncomment below and update the code to test the property track
      //var instane = new ApChallengeMicroservice.InlineResponse2001ResultContent();
      //expect(instance).to.be();
    });

    it('should have the property subTrack (base name: "subTrack")', function() {
      // uncomment below and update the code to test the property subTrack
      //var instane = new ApChallengeMicroservice.InlineResponse2001ResultContent();
      //expect(instance).to.be();
    });

    it('should have the property name (base name: "name")', function() {
      // uncomment below and update the code to test the property name
      //var instane = new ApChallengeMicroservice.InlineResponse2001ResultContent();
      //expect(instance).to.be();
    });

    it('should have the property reviewType (base name: "reviewType")', function() {
      // uncomment below and update the code to test the property reviewType
      //var instane = new ApChallengeMicroservice.InlineResponse2001ResultContent();
      //expect(instance).to.be();
    });

    it('should have the property id (base name: "id")', function() {
      // uncomment below and update the code to test the property id
      //var instane = new ApChallengeMicroservice.InlineResponse2001ResultContent();
      //expect(instance).to.be();
    });

    it('should have the property forumId (base name: "forumId")', function() {
      // uncomment below and update the code to test the property forumId
      //var instane = new ApChallengeMicroservice.InlineResponse2001ResultContent();
      //expect(instance).to.be();
    });

    it('should have the property numSubmissions (base name: "numSubmissions")', function() {
      // uncomment below and update the code to test the property numSubmissions
      //var instane = new ApChallengeMicroservice.InlineResponse2001ResultContent();
      //expect(instance).to.be();
    });

    it('should have the property numRegistrants (base name: "numRegistrants")', function() {
      // uncomment below and update the code to test the property numRegistrants
      //var instane = new ApChallengeMicroservice.InlineResponse2001ResultContent();
      //expect(instance).to.be();
    });

    it('should have the property registrationStartDate (base name: "registrationStartDate")', function() {
      // uncomment below and update the code to test the property registrationStartDate
      //var instane = new ApChallengeMicroservice.InlineResponse2001ResultContent();
      //expect(instance).to.be();
    });

    it('should have the property registrationEndDate (base name: "registrationEndDate")', function() {
      // uncomment below and update the code to test the property registrationEndDate
      //var instane = new ApChallengeMicroservice.InlineResponse2001ResultContent();
      //expect(instance).to.be();
    });

    it('should have the property checkpointSubmissionEndDate (base name: "checkpointSubmissionEndDate")', function() {
      // uncomment below and update the code to test the property checkpointSubmissionEndDate
      //var instane = new ApChallengeMicroservice.InlineResponse2001ResultContent();
      //expect(instance).to.be();
    });

    it('should have the property submissionEndDate (base name: "submissionEndDate")', function() {
      // uncomment below and update the code to test the property submissionEndDate
      //var instane = new ApChallengeMicroservice.InlineResponse2001ResultContent();
      //expect(instance).to.be();
    });

    it('should have the property platforms (base name: "platforms")', function() {
      // uncomment below and update the code to test the property platforms
      //var instane = new ApChallengeMicroservice.InlineResponse2001ResultContent();
      //expect(instance).to.be();
    });

    it('should have the property numberOfCheckpointPrizes (base name: "numberOfCheckpointPrizes")', function() {
      // uncomment below and update the code to test the property numberOfCheckpointPrizes
      //var instane = new ApChallengeMicroservice.InlineResponse2001ResultContent();
      //expect(instance).to.be();
    });

    it('should have the property totalCheckpointPrize (base name: "totalCheckpointPrize")', function() {
      // uncomment below and update the code to test the property totalCheckpointPrize
      //var instane = new ApChallengeMicroservice.InlineResponse2001ResultContent();
      //expect(instance).to.be();
    });

    it('should have the property totalPrize (base name: "totalPrize")', function() {
      // uncomment below and update the code to test the property totalPrize
      //var instane = new ApChallengeMicroservice.InlineResponse2001ResultContent();
      //expect(instance).to.be();
    });

    it('should have the property isPrivate (base name: "isPrivate")', function() {
      // uncomment below and update the code to test the property isPrivate
      //var instane = new ApChallengeMicroservice.InlineResponse2001ResultContent();
      //expect(instance).to.be();
    });

    it('should have the property upcomingPhase (base name: "upcomingPhase")', function() {
      // uncomment below and update the code to test the property upcomingPhase
      //var instane = new ApChallengeMicroservice.InlineResponse2001ResultContent();
      //expect(instance).to.be();
    });

    it('should have the property projectId (base name: "projectId")', function() {
      // uncomment below and update the code to test the property projectId
      //var instane = new ApChallengeMicroservice.InlineResponse2001ResultContent();
      //expect(instance).to.be();
    });

    it('should have the property projectName (base name: "projectName")', function() {
      // uncomment below and update the code to test the property projectName
      //var instane = new ApChallengeMicroservice.InlineResponse2001ResultContent();
      //expect(instance).to.be();
    });

    it('should have the property currentPhases (base name: "currentPhases")', function() {
      // uncomment below and update the code to test the property currentPhases
      //var instane = new ApChallengeMicroservice.InlineResponse2001ResultContent();
      //expect(instance).to.be();
    });

    it('should have the property submissionViewable (base name: "submissionViewable")', function() {
      // uncomment below and update the code to test the property submissionViewable
      //var instane = new ApChallengeMicroservice.InlineResponse2001ResultContent();
      //expect(instance).to.be();
    });

    it('should have the property allPhases (base name: "allPhases")', function() {
      // uncomment below and update the code to test the property allPhases
      //var instane = new ApChallengeMicroservice.InlineResponse2001ResultContent();
      //expect(instance).to.be();
    });

    it('should have the property prize (base name: "prize")', function() {
      // uncomment below and update the code to test the property prize
      //var instane = new ApChallengeMicroservice.InlineResponse2001ResultContent();
      //expect(instance).to.be();
    });

    it('should have the property winners (base name: "winners")', function() {
      // uncomment below and update the code to test the property winners
      //var instane = new ApChallengeMicroservice.InlineResponse2001ResultContent();
      //expect(instance).to.be();
    });

    it('should have the property events (base name: "events")', function() {
      // uncomment below and update the code to test the property events
      //var instane = new ApChallengeMicroservice.InlineResponse2001ResultContent();
      //expect(instance).to.be();
    });

    it('should have the property drPoints (base name: "drPoints")', function() {
      // uncomment below and update the code to test the property drPoints
      //var instane = new ApChallengeMicroservice.InlineResponse2001ResultContent();
      //expect(instance).to.be();
    });

    it('should have the property reliabilityBonus (base name: "reliabilityBonus")', function() {
      // uncomment below and update the code to test the property reliabilityBonus
      //var instane = new ApChallengeMicroservice.InlineResponse2001ResultContent();
      //expect(instance).to.be();
    });

    it('should have the property isTask (base name: "isTask")', function() {
      // uncomment below and update the code to test the property isTask
      //var instane = new ApChallengeMicroservice.InlineResponse2001ResultContent();
      //expect(instance).to.be();
    });

    it('should have the property groupIds (base name: "groupIds")', function() {
      // uncomment below and update the code to test the property groupIds
      //var instane = new ApChallengeMicroservice.InlineResponse2001ResultContent();
      //expect(instance).to.be();
    });

  });

}));
