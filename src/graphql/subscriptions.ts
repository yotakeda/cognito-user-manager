/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateCustomAttributeKey = /* GraphQL */ `
  subscription OnCreateCustomAttributeKey(
    $filter: ModelSubscriptionCustomAttributeKeyFilterInput
  ) {
    onCreateCustomAttributeKey(filter: $filter) {
      customAttributeKey
      description
      displayOrder
      customAttributeValues {
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
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateCustomAttributeKey = /* GraphQL */ `
  subscription OnUpdateCustomAttributeKey(
    $filter: ModelSubscriptionCustomAttributeKeyFilterInput
  ) {
    onUpdateCustomAttributeKey(filter: $filter) {
      customAttributeKey
      description
      displayOrder
      customAttributeValues {
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
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteCustomAttributeKey = /* GraphQL */ `
  subscription OnDeleteCustomAttributeKey(
    $filter: ModelSubscriptionCustomAttributeKeyFilterInput
  ) {
    onDeleteCustomAttributeKey(filter: $filter) {
      customAttributeKey
      description
      displayOrder
      customAttributeValues {
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
      createdAt
      updatedAt
    }
  }
`;
export const onCreateCustomAttributeValue = /* GraphQL */ `
  subscription OnCreateCustomAttributeValue(
    $filter: ModelSubscriptionCustomAttributeValueFilterInput
  ) {
    onCreateCustomAttributeValue(filter: $filter) {
      id
      customAttributeValue
      description
      displayOrder
      customAtrributeKey {
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
      createdAt
      updatedAt
      customAttributeKeyCustomAttributeValuesId
    }
  }
`;
export const onUpdateCustomAttributeValue = /* GraphQL */ `
  subscription OnUpdateCustomAttributeValue(
    $filter: ModelSubscriptionCustomAttributeValueFilterInput
  ) {
    onUpdateCustomAttributeValue(filter: $filter) {
      id
      customAttributeValue
      description
      displayOrder
      customAtrributeKey {
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
      createdAt
      updatedAt
      customAttributeKeyCustomAttributeValuesId
    }
  }
`;
export const onDeleteCustomAttributeValue = /* GraphQL */ `
  subscription OnDeleteCustomAttributeValue(
    $filter: ModelSubscriptionCustomAttributeValueFilterInput
  ) {
    onDeleteCustomAttributeValue(filter: $filter) {
      id
      customAttributeValue
      description
      displayOrder
      customAtrributeKey {
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
      createdAt
      updatedAt
      customAttributeKeyCustomAttributeValuesId
    }
  }
`;
