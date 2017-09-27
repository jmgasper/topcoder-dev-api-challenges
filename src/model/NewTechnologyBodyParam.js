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
    define(['ApiClient', 'model/Technology'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./Technology'));
  } else {
    // Browser globals (root is window)
    if (!root.ApChallengeMicroservice) {
      root.ApChallengeMicroservice = {};
    }
    root.ApChallengeMicroservice.NewTechnologyBodyParam = factory(root.ApChallengeMicroservice.ApiClient, root.ApChallengeMicroservice.Technology);
  }
}(this, function(ApiClient, Technology) {
  'use strict';




  /**
   * The NewTechnologyBodyParam model module.
   * @module model/NewTechnologyBodyParam
   * @version 1.0.5
   */

  /**
   * Constructs a new <code>NewTechnologyBodyParam</code>.
   * @alias module:model/NewTechnologyBodyParam
   * @class
   */
  var exports = function() {
    var _this = this;


  };

  /**
   * Constructs a <code>NewTechnologyBodyParam</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/NewTechnologyBodyParam} obj Optional instance to populate.
   * @return {module:model/NewTechnologyBodyParam} The populated <code>NewTechnologyBodyParam</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('param')) {
        obj['param'] = Technology.constructFromObject(data['param']);
      }
    }
    return obj;
  }

  /**
   * @member {module:model/Technology} param
   */
  exports.prototype['param'] = undefined;



  return exports;
}));


