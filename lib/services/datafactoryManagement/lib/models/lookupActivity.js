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
 * Lookup activity.
 *
 * @extends models['ExecutionActivity']
 */
class LookupActivity extends models['ExecutionActivity'] {
  /**
   * Create a LookupActivity.
   * @member {object} source Dataset-specific source properties, same as copy
   * activity source.
   * @member {object} [source.sourceRetryCount] Source retry count. Type:
   * integer (or Expression with resultType integer).
   * @member {object} [source.sourceRetryWait] Source retry wait. Type: string
   * (or Expression with resultType string), pattern:
   * ((\d+)\.)?(\d\d):(60|([0-5][0-9])):(60|([0-5][0-9])).
   * @member {string} [source.type] Polymorphic Discriminator
   * @member {object} dataset Lookup activity dataset reference.
   * @member {string} [dataset.referenceName] Reference dataset name.
   * @member {object} [dataset.parameters] Arguments for dataset.
   * @member {object} [firstRowOnly] Whether to return first row or all rows.
   * Default value is true. Type: boolean (or Expression with resultType
   * boolean).
   */
  constructor() {
    super();
  }

  /**
   * Defines the metadata of LookupActivity
   *
   * @returns {object} metadata of LookupActivity
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'Lookup',
      type: {
        name: 'Composite',
        polymorphicDiscriminator: {
          serializedName: 'type',
          clientName: 'type'
        },
        uberParent: 'Activity',
        className: 'LookupActivity',
        modelProperties: {
          name: {
            required: true,
            serializedName: 'name',
            type: {
              name: 'String'
            }
          },
          description: {
            required: false,
            serializedName: 'description',
            type: {
              name: 'String'
            }
          },
          dependsOn: {
            required: false,
            serializedName: 'dependsOn',
            type: {
              name: 'Sequence',
              element: {
                  required: false,
                  serializedName: 'ActivityDependencyElementType',
                  type: {
                    name: 'Composite',
                    additionalProperties: {
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
                    },
                    className: 'ActivityDependency'
                  }
              }
            }
          },
          userProperties: {
            required: false,
            serializedName: 'userProperties',
            type: {
              name: 'Sequence',
              element: {
                  required: false,
                  serializedName: 'UserPropertyElementType',
                  type: {
                    name: 'Composite',
                    className: 'UserProperty'
                  }
              }
            }
          },
          type: {
            required: true,
            serializedName: 'type',
            isPolymorphicDiscriminator: true,
            type: {
              name: 'String'
            }
          },
          linkedServiceName: {
            required: false,
            serializedName: 'linkedServiceName',
            type: {
              name: 'Composite',
              className: 'LinkedServiceReference'
            }
          },
          policy: {
            required: false,
            serializedName: 'policy',
            type: {
              name: 'Composite',
              additionalProperties: {
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
              },
              className: 'ActivityPolicy'
            }
          },
          source: {
            required: true,
            serializedName: 'typeProperties.source',
            type: {
              name: 'Composite',
              additionalProperties: {
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
              },
              polymorphicDiscriminator: {
                serializedName: 'type',
                clientName: 'type'
              },
              uberParent: 'CopySource',
              className: 'CopySource'
            }
          },
          dataset: {
            required: true,
            serializedName: 'typeProperties.dataset',
            defaultValue: {},
            type: {
              name: 'Composite',
              className: 'DatasetReference'
            }
          },
          firstRowOnly: {
            required: false,
            serializedName: 'typeProperties.firstRowOnly',
            type: {
              name: 'Object'
            }
          }
        }
      }
    };
  }
}

module.exports = LookupActivity;
