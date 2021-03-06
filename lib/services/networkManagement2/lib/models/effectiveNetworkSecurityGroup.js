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
 * Effective network security group.
 *
 */
class EffectiveNetworkSecurityGroup {
  /**
   * Create a EffectiveNetworkSecurityGroup.
   * @member {object} [networkSecurityGroup] The ID of network security group
   * that is applied.
   * @member {string} [networkSecurityGroup.id] Resource ID.
   * @member {object} [association] Associated resources.
   * @member {object} [association.subnet] The ID of the subnet if assigned.
   * @member {string} [association.subnet.id] Resource ID.
   * @member {object} [association.networkInterface] The ID of the network
   * interface if assigned.
   * @member {string} [association.networkInterface.id] Resource ID.
   * @member {array} [effectiveSecurityRules] A collection of effective
   * security rules.
   * @member {object} [tagMap] Mapping of tags to list of IP Addresses included
   * within the tag.
   */
  constructor() {
  }

  /**
   * Defines the metadata of EffectiveNetworkSecurityGroup
   *
   * @returns {object} metadata of EffectiveNetworkSecurityGroup
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'EffectiveNetworkSecurityGroup',
      type: {
        name: 'Composite',
        className: 'EffectiveNetworkSecurityGroup',
        modelProperties: {
          networkSecurityGroup: {
            required: false,
            serializedName: 'networkSecurityGroup',
            type: {
              name: 'Composite',
              className: 'SubResource'
            }
          },
          association: {
            required: false,
            serializedName: 'association',
            type: {
              name: 'Composite',
              className: 'EffectiveNetworkSecurityGroupAssociation'
            }
          },
          effectiveSecurityRules: {
            required: false,
            serializedName: 'effectiveSecurityRules',
            type: {
              name: 'Sequence',
              element: {
                  required: false,
                  serializedName: 'EffectiveNetworkSecurityRuleElementType',
                  type: {
                    name: 'Composite',
                    className: 'EffectiveNetworkSecurityRule'
                  }
              }
            }
          },
          tagMap: {
            required: false,
            serializedName: 'tagMap',
            type: {
              name: 'Dictionary',
              value: {
                  required: false,
                  serializedName: 'ArrayElementType',
                  type: {
                    name: 'Sequence',
                    element: {
                        required: false,
                        serializedName: 'StringElementType',
                        type: {
                          name: 'String'
                        }
                    }
                  }
              }
            }
          }
        }
      }
    };
  }
}

module.exports = EffectiveNetworkSecurityGroup;
