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
 * Web Job Information.
 *
 * @extends models['ProxyOnlyResource']
 */
class WebJob extends models['ProxyOnlyResource'] {
  /**
   * Create a WebJob.
   * @member {string} [runCommand] Run command.
   * @member {string} [url] Job URL.
   * @member {string} [extraInfoUrl] Extra Info URL.
   * @member {string} [webJobType] Job type. Possible values include:
   * 'Continuous', 'Triggered'
   * @member {string} [error] Error information.
   * @member {boolean} [usingSdk] Using SDK?
   * @member {object} [settings] Job settings.
   */
  constructor() {
    super();
  }

  /**
   * Defines the metadata of WebJob
   *
   * @returns {object} metadata of WebJob
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'WebJob',
      type: {
        name: 'Composite',
        className: 'WebJob',
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
          kind: {
            required: false,
            serializedName: 'kind',
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
          runCommand: {
            required: false,
            serializedName: 'properties.run_command',
            type: {
              name: 'String'
            }
          },
          url: {
            required: false,
            serializedName: 'properties.url',
            type: {
              name: 'String'
            }
          },
          extraInfoUrl: {
            required: false,
            serializedName: 'properties.extra_info_url',
            type: {
              name: 'String'
            }
          },
          webJobType: {
            required: false,
            serializedName: 'properties.web_job_type',
            type: {
              name: 'Enum',
              allowedValues: [ 'Continuous', 'Triggered' ]
            }
          },
          error: {
            required: false,
            serializedName: 'properties.error',
            type: {
              name: 'String'
            }
          },
          usingSdk: {
            required: false,
            serializedName: 'properties.using_sdk',
            type: {
              name: 'Boolean'
            }
          },
          settings: {
            required: false,
            serializedName: 'properties.settings',
            type: {
              name: 'Dictionary',
              value: {
                  required: false,
                  serializedName: 'ObjectElementType',
                  type: {
                    name: 'Object'
                  }
              }
            }
          }
        }
      }
    };
  }
}

module.exports = WebJob;
