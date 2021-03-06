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
 * The dsc nodeconfiguration property associated with the entity.
 *
 */
class DscNodeConfigurationAssociationProperty {
  /**
   * Create a DscNodeConfigurationAssociationProperty.
   * @member {string} [name] Gets or sets the name of the dsc
   * nodeconfiguration.
   */
  constructor() {
  }

  /**
   * Defines the metadata of DscNodeConfigurationAssociationProperty
   *
   * @returns {object} metadata of DscNodeConfigurationAssociationProperty
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'DscNodeConfigurationAssociationProperty',
      type: {
        name: 'Composite',
        className: 'DscNodeConfigurationAssociationProperty',
        modelProperties: {
          name: {
            required: false,
            serializedName: 'name',
            type: {
              name: 'String'
            }
          }
        }
      }
    };
  }
}

module.exports = DscNodeConfigurationAssociationProperty;
