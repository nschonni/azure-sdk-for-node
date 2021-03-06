/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License. See License.txt in the project root for
 * license information.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

'use strict';

/**
 * Specifies the network interfaces of the virtual machine.
 *
 */
class NetworkProfile {
  /**
   * Create a NetworkProfile.
   * @member {array} [networkInterfaces] Specifies the list of resource Ids for
   * the network interfaces associated with the virtual machine.
   */
  constructor() {
  }

  /**
   * Defines the metadata of NetworkProfile
   *
   * @returns {object} metadata of NetworkProfile
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'NetworkProfile',
      type: {
        name: 'Composite',
        className: 'NetworkProfile',
        modelProperties: {
          networkInterfaces: {
            required: false,
            serializedName: 'networkInterfaces',
            type: {
              name: 'Sequence',
              element: {
                  required: false,
                  serializedName: 'NetworkInterfaceReferenceElementType',
                  type: {
                    name: 'Composite',
                    className: 'NetworkInterfaceReference'
                  }
              }
            }
          }
        }
      }
    };
  }
}

module.exports = NetworkProfile;
