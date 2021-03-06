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
 * Represents a collection of alert rule resources.
 *
 */
class DiagnosticSettingsResourceCollection {
  /**
   * Create a DiagnosticSettingsResourceCollection.
   * @member {array} [value] The collection of diagnostic settings resources;.
   */
  constructor() {
  }

  /**
   * Defines the metadata of DiagnosticSettingsResourceCollection
   *
   * @returns {object} metadata of DiagnosticSettingsResourceCollection
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'DiagnosticSettingsResourceCollection',
      type: {
        name: 'Composite',
        className: 'DiagnosticSettingsResourceCollection',
        modelProperties: {
          value: {
            required: false,
            serializedName: 'value',
            type: {
              name: 'Sequence',
              element: {
                  required: false,
                  serializedName: 'DiagnosticSettingsResourceElementType',
                  type: {
                    name: 'Composite',
                    className: 'DiagnosticSettingsResource'
                  }
              }
            }
          }
        }
      }
    };
  }
}

module.exports = DiagnosticSettingsResourceCollection;
