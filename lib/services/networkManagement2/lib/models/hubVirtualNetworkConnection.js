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
 * HubVirtualNetworkConnection Resource.
 *
 * @extends models['SubResource']
 */
class HubVirtualNetworkConnection extends models['SubResource'] {
  /**
   * Create a HubVirtualNetworkConnection.
   * @member {object} [remoteVirtualNetwork] Reference to the remote virtual
   * network.
   * @member {string} [remoteVirtualNetwork.id] Resource ID.
   * @member {boolean} [allowHubToRemoteVnetTransit] VirtualHub to RemoteVnet
   * transit to enabled or not.
   * @member {boolean} [allowRemoteVnetToUseHubVnetGateways] Allow RemoteVnet
   * to use Virtual Hub's gateways.
   * @member {boolean} [enableInternetSecurity] Enable internet security
   * @member {string} [provisioningState] The provisioning state of the
   * resource. Possible values include: 'Succeeded', 'Updating', 'Deleting',
   * 'Failed'
   * @member {string} [name] The name of the resource that is unique within a
   * resource group. This name can be used to access the resource.
   * @member {string} [etag] Gets a unique read-only string that changes
   * whenever the resource is updated.
   */
  constructor() {
    super();
  }

  /**
   * Defines the metadata of HubVirtualNetworkConnection
   *
   * @returns {object} metadata of HubVirtualNetworkConnection
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'HubVirtualNetworkConnection',
      type: {
        name: 'Composite',
        className: 'HubVirtualNetworkConnection',
        modelProperties: {
          id: {
            required: false,
            serializedName: 'id',
            type: {
              name: 'String'
            }
          },
          remoteVirtualNetwork: {
            required: false,
            serializedName: 'properties.remoteVirtualNetwork',
            type: {
              name: 'Composite',
              className: 'SubResource'
            }
          },
          allowHubToRemoteVnetTransit: {
            required: false,
            serializedName: 'properties.allowHubToRemoteVnetTransit',
            type: {
              name: 'Boolean'
            }
          },
          allowRemoteVnetToUseHubVnetGateways: {
            required: false,
            serializedName: 'properties.allowRemoteVnetToUseHubVnetGateways',
            type: {
              name: 'Boolean'
            }
          },
          enableInternetSecurity: {
            required: false,
            serializedName: 'properties.enableInternetSecurity',
            type: {
              name: 'Boolean'
            }
          },
          provisioningState: {
            required: false,
            serializedName: 'properties.provisioningState',
            type: {
              name: 'String'
            }
          },
          name: {
            required: false,
            serializedName: 'name',
            type: {
              name: 'String'
            }
          },
          etag: {
            required: false,
            readOnly: true,
            serializedName: 'etag',
            type: {
              name: 'String'
            }
          }
        }
      }
    };
  }
}

module.exports = HubVirtualNetworkConnection;
