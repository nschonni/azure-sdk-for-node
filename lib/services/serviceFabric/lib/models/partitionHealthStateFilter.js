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
 * Defines matching criteria to determine whether a partition should be
 * included as a child of a service in the cluster health chunk.
 * The partitions are only returned if the parent entities match a filter
 * specified in the cluster health chunk query description. The parent service
 * and application must be included in the cluster health chunk.
 * One filter can match zero, one or multiple partitions, depending on its
 * properties.
 *
 */
class PartitionHealthStateFilter {
  /**
   * Create a PartitionHealthStateFilter.
   * @member {uuid} [partitionIdFilter] ID of the partition that matches the
   * filter. The filter is applied only to the specified partition, if it
   * exists.
   * If the partition doesn't exist, no partition is returned in the cluster
   * health chunk based on this filter.
   * If the partition exists, it is included in the cluster health chunk if it
   * respects the other filter properties.
   * If not specified, all partitions that match the parent filters (if any)
   * are taken into consideration and matched against the other filter members,
   * like health state filter.
   * @member {number} [healthStateFilter] The filter for the health state of
   * the partitions. It allows selecting partitions if they match the desired
   * health states.
   * The possible values are integer value of one of the following health
   * states. Only partitions that match the filter are returned. All partitions
   * are used to evaluate the cluster aggregated health state.
   * If not specified, default value is None, unless the partition ID is
   * specified. If the filter has default value and partition ID is specified,
   * the matching partition is returned.
   * The state values are flag-based enumeration, so the value could be a
   * combination of these values obtained using bitwise 'OR' operator.
   * For example, if the provided value is 6, it matches partitions with
   * HealthState value of OK (2) and Warning (4).
   *
   * - Default - Default value. Matches any HealthState. The value is zero.
   * - None - Filter that doesn't match any HealthState value. Used in order to
   * return no results on a given collection of states. The value is 1.
   * - Ok - Filter that matches input with HealthState value Ok. The value is
   * 2.
   * - Warning - Filter that matches input with HealthState value Warning. The
   * value is 4.
   * - Error - Filter that matches input with HealthState value Error. The
   * value is 8.
   * - All - Filter that matches input with any HealthState value. The value is
   * 65535. Default value: 0 .
   * @member {array} [replicaFilters] Defines a list of filters that specify
   * which replicas to be included in the returned cluster health chunk as
   * children of the parent partition. The replicas are returned only if the
   * parent partition matches a filter.
   * If the list is empty, no replicas are returned. All the replicas are used
   * to evaluate the parent partition aggregated health state, regardless of
   * the input filters.
   * The partition filter may specify multiple replica filters.
   * For example, it can specify a filter to return all replicas with health
   * state Error and another filter to always include a replica identified by
   * its replica id.
   */
  constructor() {
  }

  /**
   * Defines the metadata of PartitionHealthStateFilter
   *
   * @returns {object} metadata of PartitionHealthStateFilter
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'PartitionHealthStateFilter',
      type: {
        name: 'Composite',
        className: 'PartitionHealthStateFilter',
        modelProperties: {
          partitionIdFilter: {
            required: false,
            serializedName: 'PartitionIdFilter',
            type: {
              name: 'String'
            }
          },
          healthStateFilter: {
            required: false,
            serializedName: 'HealthStateFilter',
            defaultValue: 0,
            type: {
              name: 'Number'
            }
          },
          replicaFilters: {
            required: false,
            serializedName: 'ReplicaFilters',
            type: {
              name: 'Sequence',
              element: {
                  required: false,
                  serializedName: 'ReplicaHealthStateFilterElementType',
                  type: {
                    name: 'Composite',
                    className: 'ReplicaHealthStateFilter'
                  }
              }
            }
          }
        }
      }
    };
  }
}

module.exports = PartitionHealthStateFilter;
