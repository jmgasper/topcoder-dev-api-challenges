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
    define(['ApiClient', 'model/ResponseMetadata'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./ResponseMetadata'));
  } else {
    // Browser globals (root is window)
    if (!root.ApChallengeMicroservice) {
      root.ApChallengeMicroservice = {};
    }
    root.ApChallengeMicroservice.NullResponseResult = factory(root.ApChallengeMicroservice.ApiClient, root.ApChallengeMicroservice.ResponseMetadata);
  }
}(this, function(ApiClient, ResponseMetadata) {
  'use strict';




  /**
   * The NullResponseResult model module.
   * @module model/NullResponseResult
   * @version 1.0.5
   */

  /**
   * Constructs a new <code>NullResponseResult</code>.
   * @alias module:model/NullResponseResult
   * @class
   */
  var exports = function() {
    var _this = this;





  };

  /**
   * Constructs a <code>NullResponseResult</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/NullResponseResult} obj Optional instance to populate.
   * @return {module:model/NullResponseResult} The populated <code>NullResponseResult</code> instance.
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
        obj['metadata'] = ResponseMetadata.constructFromObject(data['metadata']);
      }
      if (data.hasOwnProperty('content')) {
        obj['content'] = ApiClient.convertToType(data['content'], Object);
      }
    }
    return obj;
  }

  /**
   * @member {Boolean} success
   */
  exports.prototype['success'] = undefined;
  /**
   * http status code
   * @member {Number} status
   */
  exports.prototype['status'] = undefined;
  /**
   * @member {module:model/ResponseMetadata} metadata
   */
  exports.prototype['metadata'] = undefined;
  /**
   * This content will be null
   * @member {Object} content
   */
  exports.prototype['content'] = undefined;



  return exports;
}));


