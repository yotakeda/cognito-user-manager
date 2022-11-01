/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

export type CreateCustomAttributeKeyInput = {
  customAttributeKey: string,
  description: string,
  displayOrder?: number | null,
};

export type ModelCustomAttributeKeyConditionInput = {
  description?: ModelStringInput | null,
  displayOrder?: ModelIntInput | null,
  and?: Array< ModelCustomAttributeKeyConditionInput | null > | null,
  or?: Array< ModelCustomAttributeKeyConditionInput | null > | null,
  not?: ModelCustomAttributeKeyConditionInput | null,
};

export type ModelStringInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export enum ModelAttributeTypes {
  binary = "binary",
  binarySet = "binarySet",
  bool = "bool",
  list = "list",
  map = "map",
  number = "number",
  numberSet = "numberSet",
  string = "string",
  stringSet = "stringSet",
  _null = "_null",
}


export type ModelSizeInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
};

export type ModelIntInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
};

export type CustomAttributeKey = {
  __typename: "CustomAttributeKey",
  customAttributeKey: string,
  description: string,
  displayOrder?: number | null,
  customAttributeValues?: ModelCustomAttributeValueConnection | null,
  createdAt: string,
  updatedAt: string,
};

export type ModelCustomAttributeValueConnection = {
  __typename: "ModelCustomAttributeValueConnection",
  items:  Array<CustomAttributeValue | null >,
  nextToken?: string | null,
};

export type CustomAttributeValue = {
  __typename: "CustomAttributeValue",
  id: string,
  customAttributeValue: string,
  description?: string | null,
  displayOrder?: number | null,
  customAtrributeKey?: CustomAttributeKey | null,
  createdAt: string,
  updatedAt: string,
  customAttributeKeyCustomAttributeValuesId?: string | null,
};

export type UpdateCustomAttributeKeyInput = {
  customAttributeKey: string,
  description?: string | null,
  displayOrder?: number | null,
};

export type DeleteCustomAttributeKeyInput = {
  customAttributeKey: string,
};

export type CreateCustomAttributeValueInput = {
  id?: string | null,
  customAttributeValue: string,
  description?: string | null,
  displayOrder?: number | null,
  customAttributeKeyCustomAttributeValuesId?: string | null,
};

export type ModelCustomAttributeValueConditionInput = {
  customAttributeValue?: ModelIDInput | null,
  description?: ModelStringInput | null,
  displayOrder?: ModelIntInput | null,
  and?: Array< ModelCustomAttributeValueConditionInput | null > | null,
  or?: Array< ModelCustomAttributeValueConditionInput | null > | null,
  not?: ModelCustomAttributeValueConditionInput | null,
  customAttributeKeyCustomAttributeValuesId?: ModelIDInput | null,
};

export type ModelIDInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export type UpdateCustomAttributeValueInput = {
  id: string,
  customAttributeValue?: string | null,
  description?: string | null,
  displayOrder?: number | null,
  customAttributeKeyCustomAttributeValuesId?: string | null,
};

export type DeleteCustomAttributeValueInput = {
  id: string,
};

export type ModelCustomAttributeKeyFilterInput = {
  customAttributeKey?: ModelIDInput | null,
  description?: ModelStringInput | null,
  displayOrder?: ModelIntInput | null,
  and?: Array< ModelCustomAttributeKeyFilterInput | null > | null,
  or?: Array< ModelCustomAttributeKeyFilterInput | null > | null,
  not?: ModelCustomAttributeKeyFilterInput | null,
};

export enum ModelSortDirection {
  ASC = "ASC",
  DESC = "DESC",
}


export type ModelCustomAttributeKeyConnection = {
  __typename: "ModelCustomAttributeKeyConnection",
  items:  Array<CustomAttributeKey | null >,
  nextToken?: string | null,
};

export type ModelCustomAttributeValueFilterInput = {
  id?: ModelIDInput | null,
  customAttributeValue?: ModelIDInput | null,
  description?: ModelStringInput | null,
  displayOrder?: ModelIntInput | null,
  and?: Array< ModelCustomAttributeValueFilterInput | null > | null,
  or?: Array< ModelCustomAttributeValueFilterInput | null > | null,
  not?: ModelCustomAttributeValueFilterInput | null,
  customAttributeKeyCustomAttributeValuesId?: ModelIDInput | null,
};

export type ModelSubscriptionCustomAttributeKeyFilterInput = {
  customAttributeKey?: ModelSubscriptionIDInput | null,
  description?: ModelSubscriptionStringInput | null,
  displayOrder?: ModelSubscriptionIntInput | null,
  and?: Array< ModelSubscriptionCustomAttributeKeyFilterInput | null > | null,
  or?: Array< ModelSubscriptionCustomAttributeKeyFilterInput | null > | null,
};

export type ModelSubscriptionIDInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  in?: Array< string | null > | null,
  notIn?: Array< string | null > | null,
};

export type ModelSubscriptionStringInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  in?: Array< string | null > | null,
  notIn?: Array< string | null > | null,
};

export type ModelSubscriptionIntInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
  in?: Array< number | null > | null,
  notIn?: Array< number | null > | null,
};

export type ModelSubscriptionCustomAttributeValueFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  customAttributeValue?: ModelSubscriptionIDInput | null,
  description?: ModelSubscriptionStringInput | null,
  displayOrder?: ModelSubscriptionIntInput | null,
  and?: Array< ModelSubscriptionCustomAttributeValueFilterInput | null > | null,
  or?: Array< ModelSubscriptionCustomAttributeValueFilterInput | null > | null,
};

export type CreateCustomAttributeKeyMutationVariables = {
  input: CreateCustomAttributeKeyInput,
  condition?: ModelCustomAttributeKeyConditionInput | null,
};

export type CreateCustomAttributeKeyMutation = {
  createCustomAttributeKey?:  {
    __typename: "CustomAttributeKey",
    customAttributeKey: string,
    description: string,
    displayOrder?: number | null,
    customAttributeValues?:  {
      __typename: "ModelCustomAttributeValueConnection",
      items:  Array< {
        __typename: "CustomAttributeValue",
        id: string,
        customAttributeValue: string,
        description?: string | null,
        displayOrder?: number | null,
        createdAt: string,
        updatedAt: string,
        customAttributeKeyCustomAttributeValuesId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateCustomAttributeKeyMutationVariables = {
  input: UpdateCustomAttributeKeyInput,
  condition?: ModelCustomAttributeKeyConditionInput | null,
};

export type UpdateCustomAttributeKeyMutation = {
  updateCustomAttributeKey?:  {
    __typename: "CustomAttributeKey",
    customAttributeKey: string,
    description: string,
    displayOrder?: number | null,
    customAttributeValues?:  {
      __typename: "ModelCustomAttributeValueConnection",
      items:  Array< {
        __typename: "CustomAttributeValue",
        id: string,
        customAttributeValue: string,
        description?: string | null,
        displayOrder?: number | null,
        createdAt: string,
        updatedAt: string,
        customAttributeKeyCustomAttributeValuesId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteCustomAttributeKeyMutationVariables = {
  input: DeleteCustomAttributeKeyInput,
  condition?: ModelCustomAttributeKeyConditionInput | null,
};

export type DeleteCustomAttributeKeyMutation = {
  deleteCustomAttributeKey?:  {
    __typename: "CustomAttributeKey",
    customAttributeKey: string,
    description: string,
    displayOrder?: number | null,
    customAttributeValues?:  {
      __typename: "ModelCustomAttributeValueConnection",
      items:  Array< {
        __typename: "CustomAttributeValue",
        id: string,
        customAttributeValue: string,
        description?: string | null,
        displayOrder?: number | null,
        createdAt: string,
        updatedAt: string,
        customAttributeKeyCustomAttributeValuesId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateCustomAttributeValueMutationVariables = {
  input: CreateCustomAttributeValueInput,
  condition?: ModelCustomAttributeValueConditionInput | null,
};

export type CreateCustomAttributeValueMutation = {
  createCustomAttributeValue?:  {
    __typename: "CustomAttributeValue",
    id: string,
    customAttributeValue: string,
    description?: string | null,
    displayOrder?: number | null,
    customAtrributeKey?:  {
      __typename: "CustomAttributeKey",
      customAttributeKey: string,
      description: string,
      displayOrder?: number | null,
      customAttributeValues?:  {
        __typename: "ModelCustomAttributeValueConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
    customAttributeKeyCustomAttributeValuesId?: string | null,
  } | null,
};

export type UpdateCustomAttributeValueMutationVariables = {
  input: UpdateCustomAttributeValueInput,
  condition?: ModelCustomAttributeValueConditionInput | null,
};

export type UpdateCustomAttributeValueMutation = {
  updateCustomAttributeValue?:  {
    __typename: "CustomAttributeValue",
    id: string,
    customAttributeValue: string,
    description?: string | null,
    displayOrder?: number | null,
    customAtrributeKey?:  {
      __typename: "CustomAttributeKey",
      customAttributeKey: string,
      description: string,
      displayOrder?: number | null,
      customAttributeValues?:  {
        __typename: "ModelCustomAttributeValueConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
    customAttributeKeyCustomAttributeValuesId?: string | null,
  } | null,
};

export type DeleteCustomAttributeValueMutationVariables = {
  input: DeleteCustomAttributeValueInput,
  condition?: ModelCustomAttributeValueConditionInput | null,
};

export type DeleteCustomAttributeValueMutation = {
  deleteCustomAttributeValue?:  {
    __typename: "CustomAttributeValue",
    id: string,
    customAttributeValue: string,
    description?: string | null,
    displayOrder?: number | null,
    customAtrributeKey?:  {
      __typename: "CustomAttributeKey",
      customAttributeKey: string,
      description: string,
      displayOrder?: number | null,
      customAttributeValues?:  {
        __typename: "ModelCustomAttributeValueConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
    customAttributeKeyCustomAttributeValuesId?: string | null,
  } | null,
};

export type GetCustomAttributeKeyQueryVariables = {
  customAttributeKey: string,
};

export type GetCustomAttributeKeyQuery = {
  getCustomAttributeKey?:  {
    __typename: "CustomAttributeKey",
    customAttributeKey: string,
    description: string,
    displayOrder?: number | null,
    customAttributeValues?:  {
      __typename: "ModelCustomAttributeValueConnection",
      items:  Array< {
        __typename: "CustomAttributeValue",
        id: string,
        customAttributeValue: string,
        description?: string | null,
        displayOrder?: number | null,
        createdAt: string,
        updatedAt: string,
        customAttributeKeyCustomAttributeValuesId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListCustomAttributeKeysQueryVariables = {
  customAttributeKey?: string | null,
  filter?: ModelCustomAttributeKeyFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  sortDirection?: ModelSortDirection | null,
};

export type ListCustomAttributeKeysQuery = {
  listCustomAttributeKeys?:  {
    __typename: "ModelCustomAttributeKeyConnection",
    items:  Array< {
      __typename: "CustomAttributeKey",
      customAttributeKey: string,
      description: string,
      displayOrder?: number | null,
      customAttributeValues?:  {
        __typename: "ModelCustomAttributeValueConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetCustomAttributeValueQueryVariables = {
  id: string,
};

export type GetCustomAttributeValueQuery = {
  getCustomAttributeValue?:  {
    __typename: "CustomAttributeValue",
    id: string,
    customAttributeValue: string,
    description?: string | null,
    displayOrder?: number | null,
    customAtrributeKey?:  {
      __typename: "CustomAttributeKey",
      customAttributeKey: string,
      description: string,
      displayOrder?: number | null,
      customAttributeValues?:  {
        __typename: "ModelCustomAttributeValueConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
    customAttributeKeyCustomAttributeValuesId?: string | null,
  } | null,
};

export type ListCustomAttributeValuesQueryVariables = {
  filter?: ModelCustomAttributeValueFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListCustomAttributeValuesQuery = {
  listCustomAttributeValues?:  {
    __typename: "ModelCustomAttributeValueConnection",
    items:  Array< {
      __typename: "CustomAttributeValue",
      id: string,
      customAttributeValue: string,
      description?: string | null,
      displayOrder?: number | null,
      customAtrributeKey?:  {
        __typename: "CustomAttributeKey",
        customAttributeKey: string,
        description: string,
        displayOrder?: number | null,
        createdAt: string,
        updatedAt: string,
      } | null,
      createdAt: string,
      updatedAt: string,
      customAttributeKeyCustomAttributeValuesId?: string | null,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type OnCreateCustomAttributeKeySubscriptionVariables = {
  filter?: ModelSubscriptionCustomAttributeKeyFilterInput | null,
};

export type OnCreateCustomAttributeKeySubscription = {
  onCreateCustomAttributeKey?:  {
    __typename: "CustomAttributeKey",
    customAttributeKey: string,
    description: string,
    displayOrder?: number | null,
    customAttributeValues?:  {
      __typename: "ModelCustomAttributeValueConnection",
      items:  Array< {
        __typename: "CustomAttributeValue",
        id: string,
        customAttributeValue: string,
        description?: string | null,
        displayOrder?: number | null,
        createdAt: string,
        updatedAt: string,
        customAttributeKeyCustomAttributeValuesId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateCustomAttributeKeySubscriptionVariables = {
  filter?: ModelSubscriptionCustomAttributeKeyFilterInput | null,
};

export type OnUpdateCustomAttributeKeySubscription = {
  onUpdateCustomAttributeKey?:  {
    __typename: "CustomAttributeKey",
    customAttributeKey: string,
    description: string,
    displayOrder?: number | null,
    customAttributeValues?:  {
      __typename: "ModelCustomAttributeValueConnection",
      items:  Array< {
        __typename: "CustomAttributeValue",
        id: string,
        customAttributeValue: string,
        description?: string | null,
        displayOrder?: number | null,
        createdAt: string,
        updatedAt: string,
        customAttributeKeyCustomAttributeValuesId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteCustomAttributeKeySubscriptionVariables = {
  filter?: ModelSubscriptionCustomAttributeKeyFilterInput | null,
};

export type OnDeleteCustomAttributeKeySubscription = {
  onDeleteCustomAttributeKey?:  {
    __typename: "CustomAttributeKey",
    customAttributeKey: string,
    description: string,
    displayOrder?: number | null,
    customAttributeValues?:  {
      __typename: "ModelCustomAttributeValueConnection",
      items:  Array< {
        __typename: "CustomAttributeValue",
        id: string,
        customAttributeValue: string,
        description?: string | null,
        displayOrder?: number | null,
        createdAt: string,
        updatedAt: string,
        customAttributeKeyCustomAttributeValuesId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateCustomAttributeValueSubscriptionVariables = {
  filter?: ModelSubscriptionCustomAttributeValueFilterInput | null,
};

export type OnCreateCustomAttributeValueSubscription = {
  onCreateCustomAttributeValue?:  {
    __typename: "CustomAttributeValue",
    id: string,
    customAttributeValue: string,
    description?: string | null,
    displayOrder?: number | null,
    customAtrributeKey?:  {
      __typename: "CustomAttributeKey",
      customAttributeKey: string,
      description: string,
      displayOrder?: number | null,
      customAttributeValues?:  {
        __typename: "ModelCustomAttributeValueConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
    customAttributeKeyCustomAttributeValuesId?: string | null,
  } | null,
};

export type OnUpdateCustomAttributeValueSubscriptionVariables = {
  filter?: ModelSubscriptionCustomAttributeValueFilterInput | null,
};

export type OnUpdateCustomAttributeValueSubscription = {
  onUpdateCustomAttributeValue?:  {
    __typename: "CustomAttributeValue",
    id: string,
    customAttributeValue: string,
    description?: string | null,
    displayOrder?: number | null,
    customAtrributeKey?:  {
      __typename: "CustomAttributeKey",
      customAttributeKey: string,
      description: string,
      displayOrder?: number | null,
      customAttributeValues?:  {
        __typename: "ModelCustomAttributeValueConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
    customAttributeKeyCustomAttributeValuesId?: string | null,
  } | null,
};

export type OnDeleteCustomAttributeValueSubscriptionVariables = {
  filter?: ModelSubscriptionCustomAttributeValueFilterInput | null,
};

export type OnDeleteCustomAttributeValueSubscription = {
  onDeleteCustomAttributeValue?:  {
    __typename: "CustomAttributeValue",
    id: string,
    customAttributeValue: string,
    description?: string | null,
    displayOrder?: number | null,
    customAtrributeKey?:  {
      __typename: "CustomAttributeKey",
      customAttributeKey: string,
      description: string,
      displayOrder?: number | null,
      customAttributeValues?:  {
        __typename: "ModelCustomAttributeValueConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
    customAttributeKeyCustomAttributeValuesId?: string | null,
  } | null,
};
