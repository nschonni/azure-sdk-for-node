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
 * Paged email template list representation.
 */
class EmailTemplateCollection extends Array {
  /**
   * Create a EmailTemplateCollection.
   * @member {string} [nextLink] Next page link if any.
   */
  constructor() {
    super();
  }

  /**
   * Defines the metadata of EmailTemplateCollection
   *
   * @returns {object} metadata of EmailTemplateCollection
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'EmailTemplateCollection',
      type: {
        name: 'Composite',
        className: 'EmailTemplateCollection',
        modelProperties: {
          value: {
            required: false,
            serializedName: '',
            type: {
              name: 'Sequence',
              element: {
                  required: false,
                  serializedName: 'EmailTemplateContractElementType',
                  type: {
                    name: 'Composite',
                    className: 'EmailTemplateContract'
                  }
              }
            }
          },
          nextLink: {
            required: false,
            serializedName: 'nextLink',
            type: {
              name: 'String'
            }
          }
        }
      }
    };
  }
}

module.exports = EmailTemplateCollection;
