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
    // AMD. Register as an anonymous module.
    define(['ApiClient', 'model/InlineResponse200ResultContent'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./InlineResponse200ResultContent'));
  } else {
    // Browser globals (root is window)
    if (!root.ApChallengeMicroservice) {
      root.ApChallengeMicroservice = {};
    }
    root.ApChallengeMicroservice.InlineResponse200Result = factory(root.ApChallengeMicroservice.ApiClient, root.ApChallengeMicroservice.InlineResponse200ResultContent);
  }
}(this, function(ApiClient, InlineResponse200ResultContent) {
  'use strict';




  /**
   * The InlineResponse200Result model module.
   * @module model/InlineResponse200Result
   * @version 1.0.5
   */

  /**
   * Constructs a new <code>InlineResponse200Result</code>.
   * @alias module:model/InlineResponse200Result
   * @class
   */
  var exports = function() {
    var _this = this;





  };

  /**
   * Constructs a <code>InlineResponse200Result</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/InlineResponse200Result} obj Optional instance to populate.
   * @return {module:model/InlineResponse200Result} The populated <code>InlineResponse200Result</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('success')) {
        obj['success'] = ApiClient.convertToType(data['success'], 'Boolean');
      }
      if (data.hasOwnProperty('status')) {
        obj['status'] = ApiClient.convertToType(data['status'], 'Number');
      }
      if (data.hasOwnProperty('metadata')) {
        obj['metadata'] = ApiClient.convertToType(data['metadata'], Object);
      }
      if (data.hasOwnProperty('content')) {
        obj['content'] = ApiClient.convertToType(data['content'], [InlineResponse200ResultContent]);
      }
    }
    return obj;
  }

  /**
   * @member {Boolean} success
   */
  exports.prototype['success'] = undefined;
  /**
   * @member {Number} status
   */
  exports.prototype['status'] = undefined;
  /**
   * @member {Object} metadata
   */
  exports.prototype['metadata'] = undefined;
  /**
   * @member {Array.<module:model/InlineResponse200ResultContent>} content
   */
  exports.prototype['content'] = undefined;



  return exports;
}));


