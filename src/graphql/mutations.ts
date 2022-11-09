/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createCustomAttributeKey = /* GraphQL */ `
  mutation CreateCustomAttributeKey(
    $input: CreateCustomAttributeKeyInput!
    $condition: ModelCustomAttributeKeyConditionInput
  ) {
    createCustomAttributeKey(input: $input, condition: $condition) {
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
export const updateCustomAttributeKey = /* GraphQL */ `
  mutation UpdateCustomAttributeKey(
    $input: UpdateCustomAttributeKeyInput!
    $condition: ModelCustomAttributeKeyConditionInput
  ) {
    updateCustomAttributeKey(input: $input, condition: $condition) {
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
export const deleteCustomAttributeKey = /* GraphQL */ `
  mutation DeleteCustomAttributeKey(
    $input: DeleteCustomAttributeKeyInput!
    $condition: ModelCustomAttributeKeyConditionInput
  ) {
    deleteCustomAttributeKey(input: $input, condition: $condition) {
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
export const createCustomAttributeValue = /* GraphQL */ `
  mutation CreateCustomAttributeValue(
    $input: CreateCustomAttributeValueInput!
    $condition: ModelCustomAttributeValueConditionInput
  ) {
    createCustomAttributeValue(input: $input, condition: $condition) {
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
export const updateCustomAttributeValue = /* GraphQL */ `
  mutation UpdateCustomAttributeValue(
    $input: UpdateCustomAttributeValueInput!
    $condition: ModelCustomAttributeValueConditionInput
  ) {
    updateCustomAttributeValue(input: $input, condition: $condition) {
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
export const deleteCustomAttributeValue = /* GraphQL */ `
  mutation DeleteCustomAttributeValue(
    $input: DeleteCustomAttributeValueInput!
    $condition: ModelCustomAttributeValueConditionInput
  ) {
    deleteCustomAttributeValue(input: $input, condition: $condition) {
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
