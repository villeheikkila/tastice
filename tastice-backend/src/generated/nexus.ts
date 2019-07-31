/**
 * This file was automatically generated by GraphQL Nexus
 * Do not make changes to this file directly
 */

import * as types from "../types/index"




declare global {
  interface NexusGen extends NexusGenTypes {}
}

export interface NexusGenInputs {
  CategoryWhereInput: { // input type
    AND?: NexusGenInputs['CategoryWhereInput'][] | null; // [CategoryWhereInput!]
    id?: string | null; // ID
    id_contains?: string | null; // ID
    id_ends_with?: string | null; // ID
    id_gt?: string | null; // ID
    id_gte?: string | null; // ID
    id_in?: string[] | null; // [ID!]
    id_lt?: string | null; // ID
    id_lte?: string | null; // ID
    id_not?: string | null; // ID
    id_not_contains?: string | null; // ID
    id_not_ends_with?: string | null; // ID
    id_not_in?: string[] | null; // [ID!]
    id_not_starts_with?: string | null; // ID
    id_starts_with?: string | null; // ID
    name?: string | null; // String
    name_contains?: string | null; // String
    name_ends_with?: string | null; // String
    name_gt?: string | null; // String
    name_gte?: string | null; // String
    name_in?: string[] | null; // [String!]
    name_lt?: string | null; // String
    name_lte?: string | null; // String
    name_not?: string | null; // String
    name_not_contains?: string | null; // String
    name_not_ends_with?: string | null; // String
    name_not_in?: string[] | null; // [String!]
    name_not_starts_with?: string | null; // String
    name_starts_with?: string | null; // String
    NOT?: NexusGenInputs['CategoryWhereInput'][] | null; // [CategoryWhereInput!]
    OR?: NexusGenInputs['CategoryWhereInput'][] | null; // [CategoryWhereInput!]
    products_every?: NexusGenInputs['ProductWhereInput'] | null; // ProductWhereInput
    products_none?: NexusGenInputs['ProductWhereInput'] | null; // ProductWhereInput
    products_some?: NexusGenInputs['ProductWhereInput'] | null; // ProductWhereInput
    subCategory_every?: NexusGenInputs['SubCategoryWhereInput'] | null; // SubCategoryWhereInput
    subCategory_none?: NexusGenInputs['SubCategoryWhereInput'] | null; // SubCategoryWhereInput
    subCategory_some?: NexusGenInputs['SubCategoryWhereInput'] | null; // SubCategoryWhereInput
  }
  CheckinWhereInput: { // input type
    AND?: NexusGenInputs['CheckinWhereInput'][] | null; // [CheckinWhereInput!]
    author?: NexusGenInputs['UserWhereInput'] | null; // UserWhereInput
    comment?: string | null; // String
    comment_contains?: string | null; // String
    comment_ends_with?: string | null; // String
    comment_gt?: string | null; // String
    comment_gte?: string | null; // String
    comment_in?: string[] | null; // [String!]
    comment_lt?: string | null; // String
    comment_lte?: string | null; // String
    comment_not?: string | null; // String
    comment_not_contains?: string | null; // String
    comment_not_ends_with?: string | null; // String
    comment_not_in?: string[] | null; // [String!]
    comment_not_starts_with?: string | null; // String
    comment_starts_with?: string | null; // String
    createdAt?: any | null; // DateTime
    createdAt_gt?: any | null; // DateTime
    createdAt_gte?: any | null; // DateTime
    createdAt_in?: any[] | null; // [DateTime!]
    createdAt_lt?: any | null; // DateTime
    createdAt_lte?: any | null; // DateTime
    createdAt_not?: any | null; // DateTime
    createdAt_not_in?: any[] | null; // [DateTime!]
    id?: string | null; // ID
    id_contains?: string | null; // ID
    id_ends_with?: string | null; // ID
    id_gt?: string | null; // ID
    id_gte?: string | null; // ID
    id_in?: string[] | null; // [ID!]
    id_lt?: string | null; // ID
    id_lte?: string | null; // ID
    id_not?: string | null; // ID
    id_not_contains?: string | null; // ID
    id_not_ends_with?: string | null; // ID
    id_not_in?: string[] | null; // [ID!]
    id_not_starts_with?: string | null; // ID
    id_starts_with?: string | null; // ID
    NOT?: NexusGenInputs['CheckinWhereInput'][] | null; // [CheckinWhereInput!]
    OR?: NexusGenInputs['CheckinWhereInput'][] | null; // [CheckinWhereInput!]
    product?: NexusGenInputs['ProductWhereInput'] | null; // ProductWhereInput
    rating?: number | null; // Int
    rating_gt?: number | null; // Int
    rating_gte?: number | null; // Int
    rating_in?: number[] | null; // [Int!]
    rating_lt?: number | null; // Int
    rating_lte?: number | null; // Int
    rating_not?: number | null; // Int
    rating_not_in?: number[] | null; // [Int!]
    updatedAt?: any | null; // DateTime
    updatedAt_gt?: any | null; // DateTime
    updatedAt_gte?: any | null; // DateTime
    updatedAt_in?: any[] | null; // [DateTime!]
    updatedAt_lt?: any | null; // DateTime
    updatedAt_lte?: any | null; // DateTime
    updatedAt_not?: any | null; // DateTime
    updatedAt_not_in?: any[] | null; // [DateTime!]
  }
  CompanyWhereInput: { // input type
    AND?: NexusGenInputs['CompanyWhereInput'][] | null; // [CompanyWhereInput!]
    id?: string | null; // ID
    id_contains?: string | null; // ID
    id_ends_with?: string | null; // ID
    id_gt?: string | null; // ID
    id_gte?: string | null; // ID
    id_in?: string[] | null; // [ID!]
    id_lt?: string | null; // ID
    id_lte?: string | null; // ID
    id_not?: string | null; // ID
    id_not_contains?: string | null; // ID
    id_not_ends_with?: string | null; // ID
    id_not_in?: string[] | null; // [ID!]
    id_not_starts_with?: string | null; // ID
    id_starts_with?: string | null; // ID
    name?: string | null; // String
    name_contains?: string | null; // String
    name_ends_with?: string | null; // String
    name_gt?: string | null; // String
    name_gte?: string | null; // String
    name_in?: string[] | null; // [String!]
    name_lt?: string | null; // String
    name_lte?: string | null; // String
    name_not?: string | null; // String
    name_not_contains?: string | null; // String
    name_not_ends_with?: string | null; // String
    name_not_in?: string[] | null; // [String!]
    name_not_starts_with?: string | null; // String
    name_starts_with?: string | null; // String
    NOT?: NexusGenInputs['CompanyWhereInput'][] | null; // [CompanyWhereInput!]
    OR?: NexusGenInputs['CompanyWhereInput'][] | null; // [CompanyWhereInput!]
    products_every?: NexusGenInputs['ProductWhereInput'] | null; // ProductWhereInput
    products_none?: NexusGenInputs['ProductWhereInput'] | null; // ProductWhereInput
    products_some?: NexusGenInputs['ProductWhereInput'] | null; // ProductWhereInput
  }
  FriendRequestWhereInput: { // input type
    AND?: NexusGenInputs['FriendRequestWhereInput'][] | null; // [FriendRequestWhereInput!]
    id?: string | null; // ID
    id_contains?: string | null; // ID
    id_ends_with?: string | null; // ID
    id_gt?: string | null; // ID
    id_gte?: string | null; // ID
    id_in?: string[] | null; // [ID!]
    id_lt?: string | null; // ID
    id_lte?: string | null; // ID
    id_not?: string | null; // ID
    id_not_contains?: string | null; // ID
    id_not_ends_with?: string | null; // ID
    id_not_in?: string[] | null; // [ID!]
    id_not_starts_with?: string | null; // ID
    id_starts_with?: string | null; // ID
    message?: string | null; // String
    message_contains?: string | null; // String
    message_ends_with?: string | null; // String
    message_gt?: string | null; // String
    message_gte?: string | null; // String
    message_in?: string[] | null; // [String!]
    message_lt?: string | null; // String
    message_lte?: string | null; // String
    message_not?: string | null; // String
    message_not_contains?: string | null; // String
    message_not_ends_with?: string | null; // String
    message_not_in?: string[] | null; // [String!]
    message_not_starts_with?: string | null; // String
    message_starts_with?: string | null; // String
    NOT?: NexusGenInputs['FriendRequestWhereInput'][] | null; // [FriendRequestWhereInput!]
    OR?: NexusGenInputs['FriendRequestWhereInput'][] | null; // [FriendRequestWhereInput!]
    receiver_every?: NexusGenInputs['UserWhereInput'] | null; // UserWhereInput
    receiver_none?: NexusGenInputs['UserWhereInput'] | null; // UserWhereInput
    receiver_some?: NexusGenInputs['UserWhereInput'] | null; // UserWhereInput
    sender_every?: NexusGenInputs['UserWhereInput'] | null; // UserWhereInput
    sender_none?: NexusGenInputs['UserWhereInput'] | null; // UserWhereInput
    sender_some?: NexusGenInputs['UserWhereInput'] | null; // UserWhereInput
  }
  ProductWhereInput: { // input type
    AND?: NexusGenInputs['ProductWhereInput'][] | null; // [ProductWhereInput!]
    category_every?: NexusGenInputs['CategoryWhereInput'] | null; // CategoryWhereInput
    category_none?: NexusGenInputs['CategoryWhereInput'] | null; // CategoryWhereInput
    category_some?: NexusGenInputs['CategoryWhereInput'] | null; // CategoryWhereInput
    checkins_every?: NexusGenInputs['CheckinWhereInput'] | null; // CheckinWhereInput
    checkins_none?: NexusGenInputs['CheckinWhereInput'] | null; // CheckinWhereInput
    checkins_some?: NexusGenInputs['CheckinWhereInput'] | null; // CheckinWhereInput
    company?: NexusGenInputs['CompanyWhereInput'] | null; // CompanyWhereInput
    createdAt?: any | null; // DateTime
    createdAt_gt?: any | null; // DateTime
    createdAt_gte?: any | null; // DateTime
    createdAt_in?: any[] | null; // [DateTime!]
    createdAt_lt?: any | null; // DateTime
    createdAt_lte?: any | null; // DateTime
    createdAt_not?: any | null; // DateTime
    createdAt_not_in?: any[] | null; // [DateTime!]
    id?: string | null; // ID
    id_contains?: string | null; // ID
    id_ends_with?: string | null; // ID
    id_gt?: string | null; // ID
    id_gte?: string | null; // ID
    id_in?: string[] | null; // [ID!]
    id_lt?: string | null; // ID
    id_lte?: string | null; // ID
    id_not?: string | null; // ID
    id_not_contains?: string | null; // ID
    id_not_ends_with?: string | null; // ID
    id_not_in?: string[] | null; // [ID!]
    id_not_starts_with?: string | null; // ID
    id_starts_with?: string | null; // ID
    name?: string | null; // String
    name_contains?: string | null; // String
    name_ends_with?: string | null; // String
    name_gt?: string | null; // String
    name_gte?: string | null; // String
    name_in?: string[] | null; // [String!]
    name_lt?: string | null; // String
    name_lte?: string | null; // String
    name_not?: string | null; // String
    name_not_contains?: string | null; // String
    name_not_ends_with?: string | null; // String
    name_not_in?: string[] | null; // [String!]
    name_not_starts_with?: string | null; // String
    name_starts_with?: string | null; // String
    NOT?: NexusGenInputs['ProductWhereInput'][] | null; // [ProductWhereInput!]
    OR?: NexusGenInputs['ProductWhereInput'][] | null; // [ProductWhereInput!]
    subCategory_every?: NexusGenInputs['SubCategoryWhereInput'] | null; // SubCategoryWhereInput
    subCategory_none?: NexusGenInputs['SubCategoryWhereInput'] | null; // SubCategoryWhereInput
    subCategory_some?: NexusGenInputs['SubCategoryWhereInput'] | null; // SubCategoryWhereInput
    updatedAt?: any | null; // DateTime
    updatedAt_gt?: any | null; // DateTime
    updatedAt_gte?: any | null; // DateTime
    updatedAt_in?: any[] | null; // [DateTime!]
    updatedAt_lt?: any | null; // DateTime
    updatedAt_lte?: any | null; // DateTime
    updatedAt_not?: any | null; // DateTime
    updatedAt_not_in?: any[] | null; // [DateTime!]
  }
  SubCategoryWhereInput: { // input type
    AND?: NexusGenInputs['SubCategoryWhereInput'][] | null; // [SubCategoryWhereInput!]
    category?: NexusGenInputs['CategoryWhereInput'] | null; // CategoryWhereInput
    id?: string | null; // ID
    id_contains?: string | null; // ID
    id_ends_with?: string | null; // ID
    id_gt?: string | null; // ID
    id_gte?: string | null; // ID
    id_in?: string[] | null; // [ID!]
    id_lt?: string | null; // ID
    id_lte?: string | null; // ID
    id_not?: string | null; // ID
    id_not_contains?: string | null; // ID
    id_not_ends_with?: string | null; // ID
    id_not_in?: string[] | null; // [ID!]
    id_not_starts_with?: string | null; // ID
    id_starts_with?: string | null; // ID
    name?: string | null; // String
    name_contains?: string | null; // String
    name_ends_with?: string | null; // String
    name_gt?: string | null; // String
    name_gte?: string | null; // String
    name_in?: string[] | null; // [String!]
    name_lt?: string | null; // String
    name_lte?: string | null; // String
    name_not?: string | null; // String
    name_not_contains?: string | null; // String
    name_not_ends_with?: string | null; // String
    name_not_in?: string[] | null; // [String!]
    name_not_starts_with?: string | null; // String
    name_starts_with?: string | null; // String
    NOT?: NexusGenInputs['SubCategoryWhereInput'][] | null; // [SubCategoryWhereInput!]
    OR?: NexusGenInputs['SubCategoryWhereInput'][] | null; // [SubCategoryWhereInput!]
    products_every?: NexusGenInputs['ProductWhereInput'] | null; // ProductWhereInput
    products_none?: NexusGenInputs['ProductWhereInput'] | null; // ProductWhereInput
    products_some?: NexusGenInputs['ProductWhereInput'] | null; // ProductWhereInput
  }
  UserWhereInput: { // input type
    admin?: boolean | null; // Boolean
    admin_not?: boolean | null; // Boolean
    AND?: NexusGenInputs['UserWhereInput'][] | null; // [UserWhereInput!]
    checkins_every?: NexusGenInputs['CheckinWhereInput'] | null; // CheckinWhereInput
    checkins_none?: NexusGenInputs['CheckinWhereInput'] | null; // CheckinWhereInput
    checkins_some?: NexusGenInputs['CheckinWhereInput'] | null; // CheckinWhereInput
    createdAt?: any | null; // DateTime
    createdAt_gt?: any | null; // DateTime
    createdAt_gte?: any | null; // DateTime
    createdAt_in?: any[] | null; // [DateTime!]
    createdAt_lt?: any | null; // DateTime
    createdAt_lte?: any | null; // DateTime
    createdAt_not?: any | null; // DateTime
    createdAt_not_in?: any[] | null; // [DateTime!]
    email?: string | null; // String
    email_contains?: string | null; // String
    email_ends_with?: string | null; // String
    email_gt?: string | null; // String
    email_gte?: string | null; // String
    email_in?: string[] | null; // [String!]
    email_lt?: string | null; // String
    email_lte?: string | null; // String
    email_not?: string | null; // String
    email_not_contains?: string | null; // String
    email_not_ends_with?: string | null; // String
    email_not_in?: string[] | null; // [String!]
    email_not_starts_with?: string | null; // String
    email_starts_with?: string | null; // String
    firstName?: string | null; // String
    firstName_contains?: string | null; // String
    firstName_ends_with?: string | null; // String
    firstName_gt?: string | null; // String
    firstName_gte?: string | null; // String
    firstName_in?: string[] | null; // [String!]
    firstName_lt?: string | null; // String
    firstName_lte?: string | null; // String
    firstName_not?: string | null; // String
    firstName_not_contains?: string | null; // String
    firstName_not_ends_with?: string | null; // String
    firstName_not_in?: string[] | null; // [String!]
    firstName_not_starts_with?: string | null; // String
    firstName_starts_with?: string | null; // String
    friendRequest_every?: NexusGenInputs['FriendRequestWhereInput'] | null; // FriendRequestWhereInput
    friendRequest_none?: NexusGenInputs['FriendRequestWhereInput'] | null; // FriendRequestWhereInput
    friendRequest_some?: NexusGenInputs['FriendRequestWhereInput'] | null; // FriendRequestWhereInput
    friends_every?: NexusGenInputs['UserWhereInput'] | null; // UserWhereInput
    friends_none?: NexusGenInputs['UserWhereInput'] | null; // UserWhereInput
    friends_some?: NexusGenInputs['UserWhereInput'] | null; // UserWhereInput
    id?: string | null; // ID
    id_contains?: string | null; // ID
    id_ends_with?: string | null; // ID
    id_gt?: string | null; // ID
    id_gte?: string | null; // ID
    id_in?: string[] | null; // [ID!]
    id_lt?: string | null; // ID
    id_lte?: string | null; // ID
    id_not?: string | null; // ID
    id_not_contains?: string | null; // ID
    id_not_ends_with?: string | null; // ID
    id_not_in?: string[] | null; // [ID!]
    id_not_starts_with?: string | null; // ID
    id_starts_with?: string | null; // ID
    lastName?: string | null; // String
    lastName_contains?: string | null; // String
    lastName_ends_with?: string | null; // String
    lastName_gt?: string | null; // String
    lastName_gte?: string | null; // String
    lastName_in?: string[] | null; // [String!]
    lastName_lt?: string | null; // String
    lastName_lte?: string | null; // String
    lastName_not?: string | null; // String
    lastName_not_contains?: string | null; // String
    lastName_not_ends_with?: string | null; // String
    lastName_not_in?: string[] | null; // [String!]
    lastName_not_starts_with?: string | null; // String
    lastName_starts_with?: string | null; // String
    NOT?: NexusGenInputs['UserWhereInput'][] | null; // [UserWhereInput!]
    OR?: NexusGenInputs['UserWhereInput'][] | null; // [UserWhereInput!]
    password?: string | null; // String
    password_contains?: string | null; // String
    password_ends_with?: string | null; // String
    password_gt?: string | null; // String
    password_gte?: string | null; // String
    password_in?: string[] | null; // [String!]
    password_lt?: string | null; // String
    password_lte?: string | null; // String
    password_not?: string | null; // String
    password_not_contains?: string | null; // String
    password_not_ends_with?: string | null; // String
    password_not_in?: string[] | null; // [String!]
    password_not_starts_with?: string | null; // String
    password_starts_with?: string | null; // String
    updatedAt?: any | null; // DateTime
    updatedAt_gt?: any | null; // DateTime
    updatedAt_gte?: any | null; // DateTime
    updatedAt_in?: any[] | null; // [DateTime!]
    updatedAt_lt?: any | null; // DateTime
    updatedAt_lte?: any | null; // DateTime
    updatedAt_not?: any | null; // DateTime
    updatedAt_not_in?: any[] | null; // [DateTime!]
  }
}

export interface NexusGenEnums {
  CategoryOrderByInput: "createdAt_ASC" | "createdAt_DESC" | "id_ASC" | "id_DESC" | "name_ASC" | "name_DESC" | "updatedAt_ASC" | "updatedAt_DESC"
  CheckinOrderByInput: "comment_ASC" | "comment_DESC" | "createdAt_ASC" | "createdAt_DESC" | "id_ASC" | "id_DESC" | "rating_ASC" | "rating_DESC" | "updatedAt_ASC" | "updatedAt_DESC"
  MutationType: "CREATED" | "DELETED" | "UPDATED"
  ProductOrderByInput: "createdAt_ASC" | "createdAt_DESC" | "id_ASC" | "id_DESC" | "name_ASC" | "name_DESC" | "updatedAt_ASC" | "updatedAt_DESC"
  SubCategoryOrderByInput: "createdAt_ASC" | "createdAt_DESC" | "id_ASC" | "id_DESC" | "name_ASC" | "name_DESC" | "updatedAt_ASC" | "updatedAt_DESC"
  UserOrderByInput: "admin_ASC" | "admin_DESC" | "createdAt_ASC" | "createdAt_DESC" | "email_ASC" | "email_DESC" | "firstName_ASC" | "firstName_DESC" | "id_ASC" | "id_DESC" | "lastName_ASC" | "lastName_DESC" | "password_ASC" | "password_DESC" | "updatedAt_ASC" | "updatedAt_DESC"
}

export interface NexusGenRootTypes {
  AuthPayload: { // root type
    token?: string | null; // String
    user?: NexusGenRootTypes['User'] | null; // User
  }
  Category: { // root type
    id: string; // ID!
    name: string; // String!
  }
  Checkin: { // root type
    comment: string; // String!
    createdAt: any; // DateTime!
    id: string; // ID!
    rating: number; // Int!
    updatedAt: any; // DateTime!
  }
  Company: { // root type
    id: string; // ID!
    name: string; // String!
  }
  FriendRequest: { // root type
    id: string; // ID!
    message: string; // String!
  }
  FriendRequestPreviousValues: { // root type
    id: string; // ID!
    message: string; // String!
  }
  FriendRequestSubscriptionPayload: { // root type
    mutation: NexusGenEnums['MutationType']; // MutationType!
    node?: NexusGenRootTypes['FriendRequest'] | null; // FriendRequest
    previousValues?: NexusGenRootTypes['FriendRequestPreviousValues'] | null; // FriendRequestPreviousValues
    updatedFields?: string[] | null; // [String!]
  }
  Mutation: {};
  Product: { // root type
    createdAt: any; // DateTime!
    id: string; // ID!
    name: string; // String!
    updatedAt: any; // DateTime!
  }
  ProductPreviousValues: { // root type
    createdAt: any; // DateTime!
    id: string; // ID!
    name: string; // String!
    updatedAt: any; // DateTime!
  }
  ProductSubscriptionPayload: { // root type
    mutation: NexusGenEnums['MutationType']; // MutationType!
    node?: NexusGenRootTypes['Product'] | null; // Product
    previousValues?: NexusGenRootTypes['ProductPreviousValues'] | null; // ProductPreviousValues
    updatedFields?: string[] | null; // [String!]
  }
  Query: {};
  SubCategory: { // root type
    id: string; // ID!
    name: string; // String!
  }
  Subscription: {};
  User: { // root type
    admin: boolean; // Boolean!
    email?: string | null; // String
    firstName: string; // String!
    id: string; // ID!
    lastName: string; // String!
  }
  UserPreviousValues: { // root type
    admin: boolean; // Boolean!
    createdAt: any; // DateTime!
    email?: string | null; // String
    firstName: string; // String!
    id: string; // ID!
    lastName: string; // String!
    password: string; // String!
    updatedAt: any; // DateTime!
  }
  UserSubscriptionPayload: { // root type
    mutation: NexusGenEnums['MutationType']; // MutationType!
    node?: NexusGenRootTypes['User'] | null; // User
    previousValues?: NexusGenRootTypes['UserPreviousValues'] | null; // UserPreviousValues
    updatedFields?: string[] | null; // [String!]
  }
  String: string;
  Int: number;
  Float: number;
  Boolean: boolean;
  ID: string;
  DateTime: any;
}

export interface NexusGenAllTypes extends NexusGenRootTypes {
  CategoryWhereInput: NexusGenInputs['CategoryWhereInput'];
  CheckinWhereInput: NexusGenInputs['CheckinWhereInput'];
  CompanyWhereInput: NexusGenInputs['CompanyWhereInput'];
  FriendRequestWhereInput: NexusGenInputs['FriendRequestWhereInput'];
  ProductWhereInput: NexusGenInputs['ProductWhereInput'];
  SubCategoryWhereInput: NexusGenInputs['SubCategoryWhereInput'];
  UserWhereInput: NexusGenInputs['UserWhereInput'];
  CategoryOrderByInput: NexusGenEnums['CategoryOrderByInput'];
  CheckinOrderByInput: NexusGenEnums['CheckinOrderByInput'];
  MutationType: NexusGenEnums['MutationType'];
  ProductOrderByInput: NexusGenEnums['ProductOrderByInput'];
  SubCategoryOrderByInput: NexusGenEnums['SubCategoryOrderByInput'];
  UserOrderByInput: NexusGenEnums['UserOrderByInput'];
}

export interface NexusGenFieldTypes {
  AuthPayload: { // field return type
    token: string | null; // String
    user: NexusGenRootTypes['User'] | null; // User
  }
  Category: { // field return type
    id: string; // ID!
    name: string; // String!
    products: NexusGenRootTypes['Product'][] | null; // [Product!]
    subCategory: NexusGenRootTypes['SubCategory'][] | null; // [SubCategory!]
  }
  Checkin: { // field return type
    author: NexusGenRootTypes['User']; // User!
    comment: string; // String!
    createdAt: any; // DateTime!
    id: string; // ID!
    product: NexusGenRootTypes['Product']; // Product!
    rating: number; // Int!
    updatedAt: any; // DateTime!
  }
  Company: { // field return type
    id: string; // ID!
    name: string; // String!
    products: NexusGenRootTypes['Product'][] | null; // [Product!]
  }
  FriendRequest: { // field return type
    id: string; // ID!
    message: string; // String!
    receiver: NexusGenRootTypes['User'][] | null; // [User!]
    sender: NexusGenRootTypes['User'][] | null; // [User!]
  }
  FriendRequestPreviousValues: { // field return type
    id: string; // ID!
    message: string; // String!
  }
  FriendRequestSubscriptionPayload: { // field return type
    mutation: NexusGenEnums['MutationType']; // MutationType!
    node: NexusGenRootTypes['FriendRequest'] | null; // FriendRequest
    previousValues: NexusGenRootTypes['FriendRequestPreviousValues'] | null; // FriendRequestPreviousValues
    updatedFields: string[] | null; // [String!]
  }
  Mutation: { // field return type
    acceptFriendRequest: NexusGenRootTypes['User'] | null; // User
    addProduct: NexusGenRootTypes['Product'] | null; // Product
    createCategory: NexusGenRootTypes['Category'] | null; // Category
    createCheckin: NexusGenRootTypes['Checkin'] | null; // Checkin
    createCompany: NexusGenRootTypes['Company'] | null; // Company
    createFriendRequest: NexusGenRootTypes['FriendRequest'] | null; // FriendRequest
    createSubCategory: NexusGenRootTypes['SubCategory'] | null; // SubCategory
    deleteCategory: NexusGenRootTypes['Category'] | null; // Category
    deleteCheckin: NexusGenRootTypes['Checkin'] | null; // Checkin
    deleteFriend: NexusGenRootTypes['User'] | null; // User
    deleteFriendRequest: NexusGenRootTypes['FriendRequest'] | null; // FriendRequest
    deleteProduct: NexusGenRootTypes['Product'] | null; // Product
    deleteUser: NexusGenRootTypes['User'] | null; // User
    login: NexusGenRootTypes['AuthPayload'] | null; // AuthPayload
    signup: NexusGenRootTypes['AuthPayload'] | null; // AuthPayload
    updateCheckin: NexusGenRootTypes['Checkin'] | null; // Checkin
    updateProduct: NexusGenRootTypes['Product'] | null; // Product
    updateUser: NexusGenRootTypes['User'] | null; // User
  }
  Product: { // field return type
    category: NexusGenRootTypes['Category'][] | null; // [Category!]
    checkins: NexusGenRootTypes['Checkin'][] | null; // [Checkin!]
    company: NexusGenRootTypes['Company']; // Company!
    createdAt: any; // DateTime!
    id: string; // ID!
    name: string; // String!
    subCategory: NexusGenRootTypes['SubCategory'][] | null; // [SubCategory!]
    updatedAt: any; // DateTime!
  }
  ProductPreviousValues: { // field return type
    createdAt: any; // DateTime!
    id: string; // ID!
    name: string; // String!
    updatedAt: any; // DateTime!
  }
  ProductSubscriptionPayload: { // field return type
    mutation: NexusGenEnums['MutationType']; // MutationType!
    node: NexusGenRootTypes['Product'] | null; // Product
    previousValues: NexusGenRootTypes['ProductPreviousValues'] | null; // ProductPreviousValues
    updatedFields: string[] | null; // [String!]
  }
  Query: { // field return type
    categories: NexusGenRootTypes['Category'][] | null; // [Category!]
    checkin: NexusGenRootTypes['Checkin'][] | null; // [Checkin!]
    checkins: NexusGenRootTypes['Checkin'][] | null; // [Checkin!]
    companies: NexusGenRootTypes['Company'][] | null; // [Company!]
    company: NexusGenRootTypes['Company'][] | null; // [Company!]
    friendRequest: NexusGenRootTypes['FriendRequest'][] | null; // [FriendRequest!]
    friendRequests: NexusGenRootTypes['FriendRequest'][] | null; // [FriendRequest!]
    me: NexusGenRootTypes['User'] | null; // User
    product: NexusGenRootTypes['Product'][] | null; // [Product!]
    products: NexusGenRootTypes['Product'][] | null; // [Product!]
    searchCheckins: NexusGenRootTypes['Checkin'][] | null; // [Checkin!]
    searchProducts: NexusGenRootTypes['Product'][] | null; // [Product!]
    searchUsers: NexusGenRootTypes['User'][] | null; // [User!]
    subCategories: NexusGenRootTypes['SubCategory'][] | null; // [SubCategory!]
    user: NexusGenRootTypes['User'][] | null; // [User!]
    users: NexusGenRootTypes['User'][] | null; // [User!]
  }
  SubCategory: { // field return type
    category: NexusGenRootTypes['Category']; // Category!
    id: string; // ID!
    name: string; // String!
    products: NexusGenRootTypes['Product'][] | null; // [Product!]
  }
  Subscription: { // field return type
    friendRequest: NexusGenRootTypes['FriendRequestSubscriptionPayload'] | null; // FriendRequestSubscriptionPayload
    product: NexusGenRootTypes['ProductSubscriptionPayload'] | null; // ProductSubscriptionPayload
    user: NexusGenRootTypes['UserSubscriptionPayload'] | null; // UserSubscriptionPayload
  }
  User: { // field return type
    admin: boolean; // Boolean!
    checkins: NexusGenRootTypes['Checkin'][] | null; // [Checkin!]
    email: string | null; // String
    firstName: string; // String!
    friends: NexusGenRootTypes['User'][] | null; // [User!]
    id: string; // ID!
    lastName: string; // String!
  }
  UserPreviousValues: { // field return type
    admin: boolean; // Boolean!
    createdAt: any; // DateTime!
    email: string | null; // String
    firstName: string; // String!
    id: string; // ID!
    lastName: string; // String!
    password: string; // String!
    updatedAt: any; // DateTime!
  }
  UserSubscriptionPayload: { // field return type
    mutation: NexusGenEnums['MutationType']; // MutationType!
    node: NexusGenRootTypes['User'] | null; // User
    previousValues: NexusGenRootTypes['UserPreviousValues'] | null; // UserPreviousValues
    updatedFields: string[] | null; // [String!]
  }
}

export interface NexusGenArgTypes {
  Category: {
    products: { // args
      after?: string | null; // String
      before?: string | null; // String
      first?: number | null; // Int
      last?: number | null; // Int
      orderBy?: NexusGenEnums['ProductOrderByInput'] | null; // ProductOrderByInput
      skip?: number | null; // Int
      where?: NexusGenInputs['ProductWhereInput'] | null; // ProductWhereInput
    }
    subCategory: { // args
      after?: string | null; // String
      before?: string | null; // String
      first?: number | null; // Int
      last?: number | null; // Int
      orderBy?: NexusGenEnums['SubCategoryOrderByInput'] | null; // SubCategoryOrderByInput
      skip?: number | null; // Int
      where?: NexusGenInputs['SubCategoryWhereInput'] | null; // SubCategoryWhereInput
    }
  }
  Company: {
    products: { // args
      after?: string | null; // String
      before?: string | null; // String
      first?: number | null; // Int
      last?: number | null; // Int
      orderBy?: NexusGenEnums['ProductOrderByInput'] | null; // ProductOrderByInput
      skip?: number | null; // Int
      where?: NexusGenInputs['ProductWhereInput'] | null; // ProductWhereInput
    }
  }
  FriendRequest: {
    receiver: { // args
      after?: string | null; // String
      before?: string | null; // String
      first?: number | null; // Int
      last?: number | null; // Int
      orderBy?: NexusGenEnums['UserOrderByInput'] | null; // UserOrderByInput
      skip?: number | null; // Int
      where?: NexusGenInputs['UserWhereInput'] | null; // UserWhereInput
    }
    sender: { // args
      after?: string | null; // String
      before?: string | null; // String
      first?: number | null; // Int
      last?: number | null; // Int
      orderBy?: NexusGenEnums['UserOrderByInput'] | null; // UserOrderByInput
      skip?: number | null; // Int
      where?: NexusGenInputs['UserWhereInput'] | null; // UserWhereInput
    }
  }
  Mutation: {
    acceptFriendRequest: { // args
      id?: string | null; // ID
    }
    addProduct: { // args
      categoryId?: string | null; // ID
      company?: string | null; // String
      name?: string | null; // String
      subCategories?: string[] | null; // [String!]
    }
    createCategory: { // args
      name?: string | null; // String
    }
    createCheckin: { // args
      authorId?: string | null; // ID
      comment?: string | null; // String
      productId?: string | null; // ID
      rating?: number | null; // Int
    }
    createCompany: { // args
      name?: string | null; // String
    }
    createFriendRequest: { // args
      message?: string | null; // String
      receiverId?: string | null; // ID
      senderId?: string | null; // ID
    }
    createSubCategory: { // args
      categoryId?: string | null; // ID
      name?: string | null; // String
    }
    deleteCategory: { // args
      id?: string | null; // ID
    }
    deleteCheckin: { // args
      id?: string | null; // ID
    }
    deleteFriend: { // args
      friendId?: string | null; // ID
      id?: string | null; // ID
    }
    deleteFriendRequest: { // args
      id?: string | null; // ID
    }
    deleteProduct: { // args
      id?: string | null; // ID
    }
    deleteUser: { // args
      id?: string | null; // ID
    }
    login: { // args
      email?: string | null; // String
      password?: string | null; // String
    }
    signup: { // args
      email?: string | null; // String
      firstName?: string | null; // String
      lastName?: string | null; // String
      password?: string | null; // String
    }
    updateCheckin: { // args
      comment?: string | null; // String
      id?: string | null; // ID
      rating?: number | null; // Int
    }
    updateProduct: { // args
      categoryId?: string | null; // ID
      company?: string | null; // String
      id?: string | null; // ID
      name?: string | null; // String
      subCategories?: string[] | null; // [String!]
    }
    updateUser: { // args
      email?: string | null; // String
      firstName?: string | null; // String
      id?: string | null; // ID
      lastName?: string | null; // String
    }
  }
  Product: {
    category: { // args
      after?: string | null; // String
      before?: string | null; // String
      first?: number | null; // Int
      last?: number | null; // Int
      orderBy?: NexusGenEnums['CategoryOrderByInput'] | null; // CategoryOrderByInput
      skip?: number | null; // Int
      where?: NexusGenInputs['CategoryWhereInput'] | null; // CategoryWhereInput
    }
    checkins: { // args
      after?: string | null; // String
      before?: string | null; // String
      first?: number | null; // Int
      last?: number | null; // Int
      orderBy?: NexusGenEnums['CheckinOrderByInput'] | null; // CheckinOrderByInput
      skip?: number | null; // Int
      where?: NexusGenInputs['CheckinWhereInput'] | null; // CheckinWhereInput
    }
    subCategory: { // args
      after?: string | null; // String
      before?: string | null; // String
      first?: number | null; // Int
      last?: number | null; // Int
      orderBy?: NexusGenEnums['SubCategoryOrderByInput'] | null; // SubCategoryOrderByInput
      skip?: number | null; // Int
      where?: NexusGenInputs['SubCategoryWhereInput'] | null; // SubCategoryWhereInput
    }
  }
  Query: {
    checkin: { // args
      id?: string | null; // ID
    }
    company: { // args
      id?: string | null; // ID
    }
    friendRequest: { // args
      id?: string | null; // ID
    }
    product: { // args
      id?: string | null; // ID
    }
    searchCheckins: { // args
      filter?: string | null; // String
    }
    searchProducts: { // args
      filter?: string | null; // String
    }
    searchUsers: { // args
      filter?: string | null; // String
    }
    user: { // args
      id?: string | null; // ID
    }
  }
  SubCategory: {
    products: { // args
      after?: string | null; // String
      before?: string | null; // String
      first?: number | null; // Int
      last?: number | null; // Int
      orderBy?: NexusGenEnums['ProductOrderByInput'] | null; // ProductOrderByInput
      skip?: number | null; // Int
      where?: NexusGenInputs['ProductWhereInput'] | null; // ProductWhereInput
    }
  }
  Subscription: {
    friendRequest: { // args
      id?: string | null; // ID
    }
  }
  User: {
    checkins: { // args
      after?: string | null; // String
      before?: string | null; // String
      first?: number | null; // Int
      last?: number | null; // Int
      orderBy?: NexusGenEnums['CheckinOrderByInput'] | null; // CheckinOrderByInput
      skip?: number | null; // Int
      where?: NexusGenInputs['CheckinWhereInput'] | null; // CheckinWhereInput
    }
    friends: { // args
      after?: string | null; // String
      before?: string | null; // String
      first?: number | null; // Int
      last?: number | null; // Int
      orderBy?: NexusGenEnums['UserOrderByInput'] | null; // UserOrderByInput
      skip?: number | null; // Int
      where?: NexusGenInputs['UserWhereInput'] | null; // UserWhereInput
    }
  }
}

export interface NexusGenAbstractResolveReturnTypes {
}

export interface NexusGenInheritedFields {}

export type NexusGenObjectNames = "AuthPayload" | "Category" | "Checkin" | "Company" | "FriendRequest" | "FriendRequestPreviousValues" | "FriendRequestSubscriptionPayload" | "Mutation" | "Product" | "ProductPreviousValues" | "ProductSubscriptionPayload" | "Query" | "SubCategory" | "Subscription" | "User" | "UserPreviousValues" | "UserSubscriptionPayload";

export type NexusGenInputNames = "CategoryWhereInput" | "CheckinWhereInput" | "CompanyWhereInput" | "FriendRequestWhereInput" | "ProductWhereInput" | "SubCategoryWhereInput" | "UserWhereInput";

export type NexusGenEnumNames = "CategoryOrderByInput" | "CheckinOrderByInput" | "MutationType" | "ProductOrderByInput" | "SubCategoryOrderByInput" | "UserOrderByInput";

export type NexusGenInterfaceNames = never;

export type NexusGenScalarNames = "Boolean" | "DateTime" | "Float" | "ID" | "Int" | "String";

export type NexusGenUnionNames = never;

export interface NexusGenTypes {
  context: types.Context;
  inputTypes: NexusGenInputs;
  rootTypes: NexusGenRootTypes;
  argTypes: NexusGenArgTypes;
  fieldTypes: NexusGenFieldTypes;
  allTypes: NexusGenAllTypes;
  inheritedFields: NexusGenInheritedFields;
  objectNames: NexusGenObjectNames;
  inputNames: NexusGenInputNames;
  enumNames: NexusGenEnumNames;
  interfaceNames: NexusGenInterfaceNames;
  scalarNames: NexusGenScalarNames;
  unionNames: NexusGenUnionNames;
  allInputTypes: NexusGenTypes['inputNames'] | NexusGenTypes['enumNames'] | NexusGenTypes['scalarNames'];
  allOutputTypes: NexusGenTypes['objectNames'] | NexusGenTypes['enumNames'] | NexusGenTypes['unionNames'] | NexusGenTypes['interfaceNames'] | NexusGenTypes['scalarNames'];
  allNamedTypes: NexusGenTypes['allInputTypes'] | NexusGenTypes['allOutputTypes']
  abstractTypes: NexusGenTypes['interfaceNames'] | NexusGenTypes['unionNames'];
  abstractResolveReturn: NexusGenAbstractResolveReturnTypes;
}