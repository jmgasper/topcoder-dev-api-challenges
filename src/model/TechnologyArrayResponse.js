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
    define(['ApiClient', 'model/TechnologyArrayResponseResult'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./TechnologyArrayResponseResult'));
  } else {
    // Browser globals (root is window)
    if (!root.ApChallengeMicroservice) {
      root.ApChallengeMicroservice = {};
    }
    root.ApChallengeMicroservice.TechnologyArrayResponse = factory(root.ApChallengeMicroservice.ApiClient, root.ApChallengeMicroservice.TechnologyArrayResponseResult);
  }
}(this, function(ApiClient, TechnologyArrayResponseResult) {
  'use strict';




  /**
   * The TechnologyArrayResponse model module.
   * @module model/TechnologyArrayResponse
   * @version 1.0.5
   */

  /**
   * Constructs a new <code>TechnologyArrayResponse</code>.
   * @alias module:model/TechnologyArrayResponse
   * @class
   */
  var exports = function() {
    var _this = this;




  };

  /**
   * Constructs a <code>TechnologyArrayResponse</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/TechnologyArrayResponse} obj Optional instance to populate.
   * @return {module:model/TechnologyArrayResponse} The populated <code>TechnologyArrayResponse</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('id')) {
        obj['id'] = ApiClient.convertToType(data['id'], 'String');
      }
      if (data.hasOwnProperty('version')) {
        obj['version'] = ApiClient.convertToType(data['version'], 'String');
      }
      if (data.hasOwnProperty('result')) {
        obj['result'] = TechnologyArrayResponseResult.constructFromObject(data['result']);
      }
    }
    return obj;
  }

  /**
   * unique id identifying the request
   * @member {String} id
   */
  exports.prototype['id'] = undefined;
  /**
   * @member {String} version
   */
  exports.prototype['version'] = undefined;
  /**
   * @member {module:model/TechnologyArrayResponseResult} result
   */
  exports.prototype['result'] = undefined;



  return exports;
}));

