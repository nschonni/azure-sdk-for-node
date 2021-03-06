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

const models = require('./index');

/**
 * IaaS VM specific backup protection intent item.
 *
 * @extends models['ProtectionIntent']
 */
class AzureResourceProtectionIntent extends models['ProtectionIntent'] {
  /**
   * Create a AzureResourceProtectionIntent.
   * @member {string} [friendlyName] Friendly name of the VM represented by
   * this backup item.
   */
  constructor() {
    super();
  }

  /**
   * Defines the metadata of AzureResourceProtectionIntent
   *
   * @returns {object} metadata of AzureResourceProtectionIntent
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'AzureResourceItem',
      type: {
        name: 'Composite',
        polymorphicDiscriminator: {
          serializedName: 'protectionIntentItemType',
          clientName: 'protectionIntentItemType'
        },
        uberParent: 'ProtectionIntent',
        className: 'AzureResourceProtectionIntent',
        modelProperties: {
          backupManagementType: {
            required: false,
            serializedName: 'backupManagementType',
            type: {
              name: 'String'
            }
          },
          sourceResourceId: {
            required: false,
            serializedName: 'sourceResourceId',
            type: {
              name: 'String'
            }
          },
          itemId: {
            required: false,
            serializedName: 'itemId',
            type: {
              name: 'String'
            }
          },
          policyId: {
            required: false,
            serializedName: 'policyId',
            type: {
              name: 'String'
            }
          },
          protectionState: {
            required: false,
            serializedName: 'protectionState',
            type: {
              name: 'String'
            }
          },
          protectionIntentItemType: {
            required: true,
            serializedName: 'protectionIntentItemType',
            isPolymorphicDiscriminator: true,
            type: {
              name: 'String'
            }
          },
          friendlyName: {
            required: false,
            serializedName: 'friendlyName',
            type: {
              name: 'String'
            }
          }
        }
      }
    };
  }
}

module.exports = AzureResourceProtectionIntent;
