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
 * User-defined filters to return data which will be purged from the table.
 *
 */
class ComponentPurgeBodyFilters {
  /**
   * Create a ComponentPurgeBodyFilters.
   * @member {string} [column] The column of the table over which the given
   * query should run
   * @member {string} [operator] A query operator to evaluate over the provided
   * column and value(s).
   * @member {object} [value] the value for the operator to function over. This
   * can be a number (e.g., > 100), a string (timestamp >= '2017-09-01') or
   * array of values.
   */
  constructor() {
  }

  /**
   * Defines the metadata of ComponentPurgeBodyFilters
   *
   * @returns {object} metadata of ComponentPurgeBodyFilters
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'ComponentPurgeBodyFilters',
      type: {
        name: 'Composite',
        className: 'ComponentPurgeBodyFilters',
        modelProperties: {
          column: {
            required: false,
            serializedName: 'column',
            type: {
              name: 'String'
            }
          },
          operator: {
            required: false,
            serializedName: 'operator',
            type: {
              name: 'String'
            }
          },
          value: {
            required: false,
            serializedName: 'value',
            type: {
              name: 'Object'
            }
          }
        }
      }
    };
  }
}

module.exports = ComponentPurgeBodyFilters;
