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
 * Diagnostic settings for incoming/outcoming HTTP messages to the Gateway.
 *
 */
class PipelineDiagnosticSettings {
  /**
   * Create a PipelineDiagnosticSettings.
   * @member {object} [request] Diagnostic settings for request.
   * @member {array} [request.headers] Array of HTTP Headers to log.
   * @member {object} [request.body] Body logging settings.
   * @member {number} [request.body.bytes] Number of request body bytes to log.
   * @member {object} [response] Diagnostic settings for response.
   * @member {array} [response.headers] Array of HTTP Headers to log.
   * @member {object} [response.body] Body logging settings.
   * @member {number} [response.body.bytes] Number of request body bytes to
   * log.
   */
  constructor() {
  }

  /**
   * Defines the metadata of PipelineDiagnosticSettings
   *
   * @returns {object} metadata of PipelineDiagnosticSettings
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'PipelineDiagnosticSettings',
      type: {
        name: 'Composite',
        className: 'PipelineDiagnosticSettings',
        modelProperties: {
          request: {
            required: false,
            serializedName: 'request',
            type: {
              name: 'Composite',
              className: 'HttpMessageDiagnostic'
            }
          },
          response: {
            required: false,
            serializedName: 'response',
            type: {
              name: 'Composite',
              className: 'HttpMessageDiagnostic'
            }
          }
        }
      }
    };
  }
}

module.exports = PipelineDiagnosticSettings;
