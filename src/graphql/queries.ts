/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getCustomAttributeKey = /* GraphQL */ `
  query GetCustomAttributeKey($customAttributeKey: ID!) {
    getCustomAttributeKey(customAttributeKey: $customAttributeKey) {
      customAttributeKey
      description
      displayOrder
      customAttributeValues {
        items {
          id
          customAttributeValue
          description
          displayOrder
          createdAt
          updatedAt
          customAttributeKeyCustomAttributeValuesId
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const listCustomAttributeKeys = /* GraphQL */ `
  query ListCustomAttributeKeys(
    $customAttributeKey: ID
    $filter: ModelCustomAttributeKeyFilterInput
    $limit: Int
    $nextToken: String
    $sortDirection: ModelSortDirection
  ) {
    listCustomAttributeKeys(
      customAttributeKey: $customAttributeKey
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      sortDirection: $sortDirection
    ) {
      items {
        customAttributeKey
        description
        displayOrder
        customAttributeValues {
          nextToken
        }
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getCustomAttributeValue = /* GraphQL */ `
  query GetCustomAttributeValue($id: ID!) {
    getCustomAttributeValue(id: $id) {
      id
      customAttributeValue
      description
      displayOrder
      customAtrributeKey {
        customAttributeKey
        description
        displayOrder
        customAttributeValues {
          nextToken
        }
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
      customAttributeKeyCustomAttributeValuesId
    }
  }
`;
export const listCustomAttributeValues = /* GraphQL */ `
  query ListCustomAttributeValues(
    $filter: ModelCustomAttributeValueFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listCustomAttributeValues(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        customAttributeValue
        description
        displayOrder
        customAtrributeKey {
          customAttributeKey
          description
          displayOrder
          createdAt
          updatedAt
        }
        createdAt
        updatedAt
        customAttributeKeyCustomAttributeValuesId
      }
      nextToken
    }
  }
`;
