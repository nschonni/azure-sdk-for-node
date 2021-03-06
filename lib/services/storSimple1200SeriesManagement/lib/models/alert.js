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
 * Alert class
 *
 * @extends models['BaseModel']
 */
class Alert extends models['BaseModel'] {
  /**
   * Create a Alert.
   * @member {string} title Title of the alert
   * @member {string} scope Device or Resource alert. Possible values include:
   * 'Resource', 'Device'
   * @member {string} alertType Type of the alert
   * @member {date} appearedAtTime UTC time at which the alert appeared
   * @member {date} appearedAtSourceTime UTC time at which the alert appeared
   * on the source
   * @member {date} [clearedAtTime] UTC time at which the alert got cleared
   * @member {date} [clearedAtSourceTime] UTC time at which the alert was
   * cleared on the source
   * @member {object} source Source at which the alert was cleared
   * @member {string} [source.name] Name of the source.
   * @member {string} [source.timeZone] The time zone.
   * @member {string} [source.alertSourceType] Source type of the alert.
   * Possible values include: 'Resource', 'Device'
   * @member {string} [recommendation] Recommendation for acting on the alert
   * @member {string} [resolutionReason] Reason for resolving the alert
   * @member {string} severity Severity of the alert. Possible values include:
   * 'Informational', 'Warning', 'Critical'
   * @member {string} status Current status of the alert. Possible values
   * include: 'Active', 'Cleared'
   * @member {object} [errorDetails] ErrorDetails of the alert
   * @member {string} [errorDetails.errorCode] Error code.
   * @member {string} [errorDetails.errorMessage] Error Message
   * @member {number} [errorDetails.occurences] Number of occurences.
   * @member {object} [detailedInformation] Other information about the alert
   */
  constructor() {
    super();
  }

  /**
   * Defines the metadata of Alert
   *
   * @returns {object} metadata of Alert
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'Alert',
      type: {
        name: 'Composite',
        className: 'Alert',
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
          title: {
            required: true,
            serializedName: 'properties.title',
            type: {
              name: 'String'
            }
          },
          scope: {
            required: true,
            serializedName: 'properties.scope',
            type: {
              name: 'Enum',
              allowedValues: [ 'Resource', 'Device' ]
            }
          },
          alertType: {
            required: true,
            serializedName: 'properties.alertType',
            type: {
              name: 'String'
            }
          },
          appearedAtTime: {
            required: true,
            serializedName: 'properties.appearedAtTime',
            type: {
              name: 'DateTime'
            }
          },
          appearedAtSourceTime: {
            required: true,
            serializedName: 'properties.appearedAtSourceTime',
            type: {
              name: 'DateTime'
            }
          },
          clearedAtTime: {
            required: false,
            serializedName: 'properties.clearedAtTime',
            type: {
              name: 'DateTime'
            }
          },
          clearedAtSourceTime: {
            required: false,
            serializedName: 'properties.clearedAtSourceTime',
            type: {
              name: 'DateTime'
            }
          },
          source: {
            required: true,
            serializedName: 'properties.source',
            type: {
              name: 'Composite',
              className: 'AlertSource'
            }
          },
          recommendation: {
            required: false,
            serializedName: 'properties.recommendation',
            type: {
              name: 'String'
            }
          },
          resolutionReason: {
            required: false,
            serializedName: 'properties.resolutionReason',
            type: {
              name: 'String'
            }
          },
          severity: {
            required: true,
            serializedName: 'properties.severity',
            type: {
              name: 'Enum',
              allowedValues: [ 'Informational', 'Warning', 'Critical' ]
            }
          },
          status: {
            required: true,
            serializedName: 'properties.status',
            type: {
              name: 'Enum',
              allowedValues: [ 'Active', 'Cleared' ]
            }
          },
          errorDetails: {
            required: false,
            serializedName: 'properties.errorDetails',
            type: {
              name: 'Composite',
              className: 'AlertErrorDetails'
            }
          },
          detailedInformation: {
            required: false,
            serializedName: 'properties.detailedInformation',
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
          }
        }
      }
    };
  }
}

module.exports = Alert;
