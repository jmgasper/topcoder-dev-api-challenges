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
    // AMD. Register as an anonymous module.
    define(['ApiClient', 'model/GetResourceResult'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./GetResourceResult'));
  } else {
    // Browser globals (root is window)
    if (!root.ApChallengeMicroservice) {
      root.ApChallengeMicroservice = {};
    }
    root.ApChallengeMicroservice.GetResourceResponse = factory(root.ApChallengeMicroservice.ApiClient, root.ApChallengeMicroservice.GetResourceResult);
  }
}(this, function(ApiClient, GetResourceResult) {
  'use strict';




  /**
   * The GetResourceResponse model module.
   * @module model/GetResourceResponse
   * @version 1.0.5
   */

  /**
   * Constructs a new <code>GetResourceResponse</code>.
   * @alias module:model/GetResourceResponse
   * @class
   * @param id {String} 
   * @param version {String} 
   * @param result {Array.<module:model/GetResourceResult>} 
   */
  var exports = function(id, version, result) {
    var _this = this;

    _this['id'] = id;
    _this['version'] = version;
    _this['result'] = result;
  };

  /**
   * Constructs a <code>GetResourceResponse</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/GetResourceResponse} obj Optional instance to populate.
   * @return {module:model/GetResourceResponse} The populated <code>GetResourceResponse</code> instance.
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
        obj['result'] = ApiClient.convertToType(data['result'], [GetResourceResult]);
      }
    }
    return obj;
  }

  /**
   * @member {String} id
   */
  exports.prototype['id'] = undefined;
  /**
   * @member {String} version
   */
  exports.prototype['version'] = undefined;
  /**
   * @member {Array.<module:model/GetResourceResult>} result
   */
  exports.prototype['result'] = undefined;



  return exports;
}));


