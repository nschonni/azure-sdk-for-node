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
 * Image Id properties.
 *
 */
class ImageIds {
  /**
   * Create a ImageIds.
   * @member {string} [contentSource] Source of the content.
   * @member {array} [contentIds] Id of the contents.
   * @member {object} [status] Get Image status.
   * @member {number} [status.code] Status code.
   * @member {string} [status.description] Status description.
   * @member {string} [status.exception] Exception status.
   * @member {string} [trackingId] Tracking Id.
   */
  constructor() {
  }

  /**
   * Defines the metadata of ImageIds
   *
   * @returns {object} metadata of ImageIds
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'ImageIds',
      type: {
        name: 'Composite',
        className: 'ImageIds',
        modelProperties: {
          contentSource: {
            required: false,
            serializedName: 'ContentSource',
            type: {
              name: 'String'
            }
          },
          contentIds: {
            required: false,
            serializedName: 'ContentIds',
            type: {
              name: 'Sequence',
              element: {
                  required: false,
                  serializedName: 'NumberElementType',
                  type: {
                    name: 'Number'
                  }
              }
            }
          },
          status: {
            required: false,
            serializedName: 'Status',
            type: {
              name: 'Composite',
              className: 'Status'
            }
          },
          trackingId: {
            required: false,
            serializedName: 'TrackingId',
            type: {
              name: 'String'
            }
          }
        }
      }
    };
  }
}

module.exports = ImageIds;
