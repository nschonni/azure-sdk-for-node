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
 * The integration account map.
 *
 * @extends models['Resource']
 */
class IntegrationAccountMap extends models['Resource'] {
  /**
   * Create a IntegrationAccountMap.
   * @member {string} mapType The map type. Possible values include:
   * 'NotSpecified', 'Xslt', 'Xslt20', 'Xslt30', 'Liquid'
   * @member {object} [parametersSchema] The parameters schema of integration
   * account map.
   * @member {string} [parametersSchema.ref] The reference name.
   * @member {date} [createdTime] The created time.
   * @member {date} [changedTime] The changed time.
   * @member {string} [content] The content.
   * @member {string} [contentType] The content type.
   * @member {object} [contentLink] The content link.
   * @member {string} [contentLink.uri] The content link URI.
   * @member {string} [contentLink.contentVersion] The content version.
   * @member {number} [contentLink.contentSize] The content size.
   * @member {object} [contentLink.contentHash] The content hash.
   * @member {string} [contentLink.contentHash.algorithm] The algorithm of the
   * content hash.
   * @member {string} [contentLink.contentHash.value] The value of the content
   * hash.
   * @member {object} [contentLink.metadata] The metadata.
   * @member {object} [metadata] The metadata.
   */
  constructor() {
    super();
  }

  /**
   * Defines the metadata of IntegrationAccountMap
   *
   * @returns {object} metadata of IntegrationAccountMap
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'IntegrationAccountMap',
      type: {
        name: 'Composite',
        className: 'IntegrationAccountMap',
        modelProperties: {
          id: {
            required: false,
            readOnly: true,
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
          mapType: {
            required: true,
            serializedName: 'properties.mapType',
            type: {
              name: 'String'
            }
          },
          parametersSchema: {
            required: false,
            serializedName: 'properties.parametersSchema',
            type: {
              name: 'Composite',
              className: 'IntegrationAccountMapPropertiesParametersSchema'
            }
          },
          createdTime: {
            required: false,
            readOnly: true,
            serializedName: 'properties.createdTime',
            type: {
              name: 'DateTime'
            }
          },
          changedTime: {
            required: false,
            readOnly: true,
            serializedName: 'properties.changedTime',
            type: {
              name: 'DateTime'
            }
          },
          content: {
            required: false,
            serializedName: 'properties.content',
            type: {
              name: 'String'
            }
          },
          contentType: {
            required: false,
            serializedName: 'properties.contentType',
            type: {
              name: 'String'
            }
          },
          contentLink: {
            required: false,
            readOnly: true,
            serializedName: 'properties.contentLink',
            type: {
              name: 'Composite',
              className: 'ContentLink'
            }
          },
          metadata: {
            required: false,
            serializedName: 'properties.metadata',
            type: {
              name: 'Object'
            }
          }
        }
      }
    };
  }
}

module.exports = IntegrationAccountMap;
