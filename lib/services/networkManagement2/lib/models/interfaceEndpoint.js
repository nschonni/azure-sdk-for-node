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
 * Interface endpoint resource.
 *
 * @extends models['Resource']
 */
class InterfaceEndpoint extends models['Resource'] {
  /**
   * Create a InterfaceEndpoint.
   * @member {string} [fqdn] A first-party service's FQDN that is mapped to the
   * private IP allocated via this interface endpoint.
   * @member {object} [endpointService] A reference to the service being
   * brought into the virtual network.
   * @member {string} [endpointService.id] A unique identifier of the service
   * being referenced by the interface endpoint.
   * @member {object} [subnet] The ID of the subnet from which the private IP
   * will be allocated.
   * @member {string} [subnet.addressPrefix] The address prefix for the subnet.
   * @member {array} [subnet.addressPrefixes] List of  address prefixes for the
   * subnet.
   * @member {object} [subnet.networkSecurityGroup] The reference of the
   * NetworkSecurityGroup resource.
   * @member {array} [subnet.networkSecurityGroup.securityRules] A collection
   * of security rules of the network security group.
   * @member {array} [subnet.networkSecurityGroup.defaultSecurityRules] The
   * default security rules of network security group.
   * @member {array} [subnet.networkSecurityGroup.networkInterfaces] A
   * collection of references to network interfaces.
   * @member {array} [subnet.networkSecurityGroup.subnets] A collection of
   * references to subnets.
   * @member {string} [subnet.networkSecurityGroup.resourceGuid] The resource
   * GUID property of the network security group resource.
   * @member {string} [subnet.networkSecurityGroup.provisioningState] The
   * provisioning state of the public IP resource. Possible values are:
   * 'Updating', 'Deleting', and 'Failed'.
   * @member {string} [subnet.networkSecurityGroup.etag] A unique read-only
   * string that changes whenever the resource is updated.
   * @member {object} [subnet.routeTable] The reference of the RouteTable
   * resource.
   * @member {array} [subnet.routeTable.routes] Collection of routes contained
   * within a route table.
   * @member {array} [subnet.routeTable.subnets] A collection of references to
   * subnets.
   * @member {boolean} [subnet.routeTable.disableBgpRoutePropagation] Gets or
   * sets whether to disable the routes learned by BGP on that route table.
   * True means disable.
   * @member {string} [subnet.routeTable.provisioningState] The provisioning
   * state of the resource. Possible values are: 'Updating', 'Deleting', and
   * 'Failed'.
   * @member {string} [subnet.routeTable.etag] Gets a unique read-only string
   * that changes whenever the resource is updated.
   * @member {array} [subnet.serviceEndpoints] An array of service endpoints.
   * @member {array} [subnet.serviceEndpointPolicies] An array of service
   * endpoint policies.
   * @member {array} [subnet.interfaceEndpoints] An array of references to
   * interface endpoints
   * @member {array} [subnet.ipConfigurations] Gets an array of references to
   * the network interface IP configurations using subnet.
   * @member {array} [subnet.ipConfigurationProfiles] Array of IP configuration
   * profiles which reference this subnet.
   * @member {array} [subnet.resourceNavigationLinks] Gets an array of
   * references to the external resources using subnet.
   * @member {array} [subnet.serviceAssociationLinks] Gets an array of
   * references to services injecting into this subnet.
   * @member {array} [subnet.delegations] Gets an array of references to the
   * delegations on the subnet.
   * @member {string} [subnet.purpose] A read-only string identifying the
   * intention of use for this subnet based on delegations and other
   * user-defined properties.
   * @member {string} [subnet.provisioningState] The provisioning state of the
   * resource.
   * @member {string} [subnet.name] The name of the resource that is unique
   * within a resource group. This name can be used to access the resource.
   * @member {string} [subnet.etag] A unique read-only string that changes
   * whenever the resource is updated.
   * @member {array} [networkInterfaces] Gets an array of references to the
   * network interfaces created for this interface endpoint.
   * @member {string} [owner] A read-only property that identifies who created
   * this interface endpoint.
   * @member {string} [provisioningState] The provisioning state of the
   * interface endpoint. Possible values are: 'Updating', 'Deleting', and
   * 'Failed'.
   * @member {string} [etag] Gets a unique read-only string that changes
   * whenever the resource is updated.
   */
  constructor() {
    super();
  }

  /**
   * Defines the metadata of InterfaceEndpoint
   *
   * @returns {object} metadata of InterfaceEndpoint
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'InterfaceEndpoint',
      type: {
        name: 'Composite',
        className: 'InterfaceEndpoint',
        modelProperties: {
          id: {
            required: false,
            serializedName: 'id',
            type: {
              name: 'String'
            }
          },
          name: {
            required: false,
            readOnly: true,
            serializedName: 'name',
            type: {
              name: 'String'
            }
          },
          type: {
            required: false,
            readOnly: true,
            serializedName: 'type',
            type: {
              name: 'String'
            }
          },
          location: {
            required: false,
            serializedName: 'location',
            type: {
              name: 'String'
            }
          },
          tags: {
            required: false,
            serializedName: 'tags',
            type: {
              name: 'Dictionary',
              value: {
                  required: false,
                  serializedName: 'StringElementType',
                  type: {
                    name: 'String'
                  }
              }
            }
          },
          fqdn: {
            required: false,
            serializedName: 'properties.fqdn',
            type: {
              name: 'String'
            }
          },
          endpointService: {
            required: false,
            serializedName: 'properties.endpointService',
            type: {
              name: 'Composite',
              className: 'EndpointService'
            }
          },
          subnet: {
            required: false,
            serializedName: 'properties.subnet',
            type: {
              name: 'Composite',
              className: 'Subnet'
            }
          },
          networkInterfaces: {
            required: false,
            readOnly: true,
            serializedName: 'properties.networkInterfaces',
            type: {
              name: 'Sequence',
              element: {
                  required: false,
                  serializedName: 'NetworkInterfaceElementType',
                  type: {
                    name: 'Composite',
                    className: 'NetworkInterface'
                  }
              }
            }
          },
          owner: {
            required: false,
            readOnly: true,
            serializedName: 'properties.owner',
            type: {
              name: 'String'
            }
          },
          provisioningState: {
            required: false,
            readOnly: true,
            serializedName: 'properties.provisioningState',
            type: {
              name: 'String'
            }
          },
          etag: {
            required: false,
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

module.exports = InterfaceEndpoint;
