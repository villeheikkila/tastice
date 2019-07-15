// Code generated by Prisma (prisma@1.34.1). DO NOT EDIT.
  // Please don't change this file manually but run `prisma generate` to update it.
  // For more information, please read the docs: https://www.prisma.io/docs/prisma-client/

export const typeDefs = /* GraphQL */ `type AggregateCheckin {
  count: Int!
}

type AggregateProduct {
  count: Int!
}

type AggregateUser {
  count: Int!
}

type BatchPayload {
  count: Long!
}

type Checkin {
  id: ID!
  rating: Int!
  comment: String!
  author: User!
  product: Product!
  createdAt: DateTime!
  updatedAt: DateTime!
}

type CheckinConnection {
  pageInfo: PageInfo!
  edges: [CheckinEdge]!
  aggregate: AggregateCheckin!
}

input CheckinCreateInput {
  id: ID
  rating: Int!
  comment: String!
  author: UserCreateOneWithoutCheckinsInput!
  product: ProductCreateOneInput!
}

input CheckinCreateManyWithoutAuthorInput {
  create: [CheckinCreateWithoutAuthorInput!]
  connect: [CheckinWhereUniqueInput!]
}

input CheckinCreateWithoutAuthorInput {
  id: ID
  rating: Int!
  comment: String!
  product: ProductCreateOneInput!
}

type CheckinEdge {
  node: Checkin!
  cursor: String!
}

enum CheckinOrderByInput {
  id_ASC
  id_DESC
  rating_ASC
  rating_DESC
  comment_ASC
  comment_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
}

type CheckinPreviousValues {
  id: ID!
  rating: Int!
  comment: String!
  createdAt: DateTime!
  updatedAt: DateTime!
}

input CheckinScalarWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  rating: Int
  rating_not: Int
  rating_in: [Int!]
  rating_not_in: [Int!]
  rating_lt: Int
  rating_lte: Int
  rating_gt: Int
  rating_gte: Int
  comment: String
  comment_not: String
  comment_in: [String!]
  comment_not_in: [String!]
  comment_lt: String
  comment_lte: String
  comment_gt: String
  comment_gte: String
  comment_contains: String
  comment_not_contains: String
  comment_starts_with: String
  comment_not_starts_with: String
  comment_ends_with: String
  comment_not_ends_with: String
  createdAt: DateTime
  createdAt_not: DateTime
  createdAt_in: [DateTime!]
  createdAt_not_in: [DateTime!]
  createdAt_lt: DateTime
  createdAt_lte: DateTime
  createdAt_gt: DateTime
  createdAt_gte: DateTime
  updatedAt: DateTime
  updatedAt_not: DateTime
  updatedAt_in: [DateTime!]
  updatedAt_not_in: [DateTime!]
  updatedAt_lt: DateTime
  updatedAt_lte: DateTime
  updatedAt_gt: DateTime
  updatedAt_gte: DateTime
  AND: [CheckinScalarWhereInput!]
  OR: [CheckinScalarWhereInput!]
  NOT: [CheckinScalarWhereInput!]
}

type CheckinSubscriptionPayload {
  mutation: MutationType!
  node: Checkin
  updatedFields: [String!]
  previousValues: CheckinPreviousValues
}

input CheckinSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: CheckinWhereInput
  AND: [CheckinSubscriptionWhereInput!]
  OR: [CheckinSubscriptionWhereInput!]
  NOT: [CheckinSubscriptionWhereInput!]
}

input CheckinUpdateInput {
  rating: Int
  comment: String
  author: UserUpdateOneRequiredWithoutCheckinsInput
  product: ProductUpdateOneRequiredInput
}

input CheckinUpdateManyDataInput {
  rating: Int
  comment: String
}

input CheckinUpdateManyMutationInput {
  rating: Int
  comment: String
}

input CheckinUpdateManyWithoutAuthorInput {
  create: [CheckinCreateWithoutAuthorInput!]
  delete: [CheckinWhereUniqueInput!]
  connect: [CheckinWhereUniqueInput!]
  set: [CheckinWhereUniqueInput!]
  disconnect: [CheckinWhereUniqueInput!]
  update: [CheckinUpdateWithWhereUniqueWithoutAuthorInput!]
  upsert: [CheckinUpsertWithWhereUniqueWithoutAuthorInput!]
  deleteMany: [CheckinScalarWhereInput!]
  updateMany: [CheckinUpdateManyWithWhereNestedInput!]
}

input CheckinUpdateManyWithWhereNestedInput {
  where: CheckinScalarWhereInput!
  data: CheckinUpdateManyDataInput!
}

input CheckinUpdateWithoutAuthorDataInput {
  rating: Int
  comment: String
  product: ProductUpdateOneRequiredInput
}

input CheckinUpdateWithWhereUniqueWithoutAuthorInput {
  where: CheckinWhereUniqueInput!
  data: CheckinUpdateWithoutAuthorDataInput!
}

input CheckinUpsertWithWhereUniqueWithoutAuthorInput {
  where: CheckinWhereUniqueInput!
  update: CheckinUpdateWithoutAuthorDataInput!
  create: CheckinCreateWithoutAuthorInput!
}

input CheckinWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  rating: Int
  rating_not: Int
  rating_in: [Int!]
  rating_not_in: [Int!]
  rating_lt: Int
  rating_lte: Int
  rating_gt: Int
  rating_gte: Int
  comment: String
  comment_not: String
  comment_in: [String!]
  comment_not_in: [String!]
  comment_lt: String
  comment_lte: String
  comment_gt: String
  comment_gte: String
  comment_contains: String
  comment_not_contains: String
  comment_starts_with: String
  comment_not_starts_with: String
  comment_ends_with: String
  comment_not_ends_with: String
  author: UserWhereInput
  product: ProductWhereInput
  createdAt: DateTime
  createdAt_not: DateTime
  createdAt_in: [DateTime!]
  createdAt_not_in: [DateTime!]
  createdAt_lt: DateTime
  createdAt_lte: DateTime
  createdAt_gt: DateTime
  createdAt_gte: DateTime
  updatedAt: DateTime
  updatedAt_not: DateTime
  updatedAt_in: [DateTime!]
  updatedAt_not_in: [DateTime!]
  updatedAt_lt: DateTime
  updatedAt_lte: DateTime
  updatedAt_gt: DateTime
  updatedAt_gte: DateTime
  AND: [CheckinWhereInput!]
  OR: [CheckinWhereInput!]
  NOT: [CheckinWhereInput!]
}

input CheckinWhereUniqueInput {
  id: ID
}

scalar DateTime

scalar Long

type Mutation {
  createCheckin(data: CheckinCreateInput!): Checkin!
  updateCheckin(data: CheckinUpdateInput!, where: CheckinWhereUniqueInput!): Checkin
  updateManyCheckins(data: CheckinUpdateManyMutationInput!, where: CheckinWhereInput): BatchPayload!
  upsertCheckin(where: CheckinWhereUniqueInput!, create: CheckinCreateInput!, update: CheckinUpdateInput!): Checkin!
  deleteCheckin(where: CheckinWhereUniqueInput!): Checkin
  deleteManyCheckins(where: CheckinWhereInput): BatchPayload!
  createProduct(data: ProductCreateInput!): Product!
  updateProduct(data: ProductUpdateInput!, where: ProductWhereUniqueInput!): Product
  updateManyProducts(data: ProductUpdateManyMutationInput!, where: ProductWhereInput): BatchPayload!
  upsertProduct(where: ProductWhereUniqueInput!, create: ProductCreateInput!, update: ProductUpdateInput!): Product!
  deleteProduct(where: ProductWhereUniqueInput!): Product
  deleteManyProducts(where: ProductWhereInput): BatchPayload!
  createUser(data: UserCreateInput!): User!
  updateUser(data: UserUpdateInput!, where: UserWhereUniqueInput!): User
  updateManyUsers(data: UserUpdateManyMutationInput!, where: UserWhereInput): BatchPayload!
  upsertUser(where: UserWhereUniqueInput!, create: UserCreateInput!, update: UserUpdateInput!): User!
  deleteUser(where: UserWhereUniqueInput!): User
  deleteManyUsers(where: UserWhereInput): BatchPayload!
}

enum MutationType {
  CREATED
  UPDATED
  DELETED
}

interface Node {
  id: ID!
}

type PageInfo {
  hasNextPage: Boolean!
  hasPreviousPage: Boolean!
  startCursor: String
  endCursor: String
}

type Product {
  id: ID!
  name: String!
  producer: String
  type: String
}

type ProductConnection {
  pageInfo: PageInfo!
  edges: [ProductEdge]!
  aggregate: AggregateProduct!
}

input ProductCreateInput {
  id: ID
  name: String!
  producer: String
  type: String
}

input ProductCreateOneInput {
  create: ProductCreateInput
  connect: ProductWhereUniqueInput
}

type ProductEdge {
  node: Product!
  cursor: String!
}

enum ProductOrderByInput {
  id_ASC
  id_DESC
  name_ASC
  name_DESC
  producer_ASC
  producer_DESC
  type_ASC
  type_DESC
}

type ProductPreviousValues {
  id: ID!
  name: String!
  producer: String
  type: String
}

type ProductSubscriptionPayload {
  mutation: MutationType!
  node: Product
  updatedFields: [String!]
  previousValues: ProductPreviousValues
}

input ProductSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: ProductWhereInput
  AND: [ProductSubscriptionWhereInput!]
  OR: [ProductSubscriptionWhereInput!]
  NOT: [ProductSubscriptionWhereInput!]
}

input ProductUpdateDataInput {
  name: String
  producer: String
  type: String
}

input ProductUpdateInput {
  name: String
  producer: String
  type: String
}

input ProductUpdateManyMutationInput {
  name: String
  producer: String
  type: String
}

input ProductUpdateOneRequiredInput {
  create: ProductCreateInput
  update: ProductUpdateDataInput
  upsert: ProductUpsertNestedInput
  connect: ProductWhereUniqueInput
}

input ProductUpsertNestedInput {
  update: ProductUpdateDataInput!
  create: ProductCreateInput!
}

input ProductWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  name: String
  name_not: String
  name_in: [String!]
  name_not_in: [String!]
  name_lt: String
  name_lte: String
  name_gt: String
  name_gte: String
  name_contains: String
  name_not_contains: String
  name_starts_with: String
  name_not_starts_with: String
  name_ends_with: String
  name_not_ends_with: String
  producer: String
  producer_not: String
  producer_in: [String!]
  producer_not_in: [String!]
  producer_lt: String
  producer_lte: String
  producer_gt: String
  producer_gte: String
  producer_contains: String
  producer_not_contains: String
  producer_starts_with: String
  producer_not_starts_with: String
  producer_ends_with: String
  producer_not_ends_with: String
  type: String
  type_not: String
  type_in: [String!]
  type_not_in: [String!]
  type_lt: String
  type_lte: String
  type_gt: String
  type_gte: String
  type_contains: String
  type_not_contains: String
  type_starts_with: String
  type_not_starts_with: String
  type_ends_with: String
  type_not_ends_with: String
  AND: [ProductWhereInput!]
  OR: [ProductWhereInput!]
  NOT: [ProductWhereInput!]
}

input ProductWhereUniqueInput {
  id: ID
}

type Query {
  checkin(where: CheckinWhereUniqueInput!): Checkin
  checkins(where: CheckinWhereInput, orderBy: CheckinOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Checkin]!
  checkinsConnection(where: CheckinWhereInput, orderBy: CheckinOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): CheckinConnection!
  product(where: ProductWhereUniqueInput!): Product
  products(where: ProductWhereInput, orderBy: ProductOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Product]!
  productsConnection(where: ProductWhereInput, orderBy: ProductOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): ProductConnection!
  user(where: UserWhereUniqueInput!): User
  users(where: UserWhereInput, orderBy: UserOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [User]!
  usersConnection(where: UserWhereInput, orderBy: UserOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): UserConnection!
  node(id: ID!): Node
}

type Subscription {
  checkin(where: CheckinSubscriptionWhereInput): CheckinSubscriptionPayload
  product(where: ProductSubscriptionWhereInput): ProductSubscriptionPayload
  user(where: UserSubscriptionWhereInput): UserSubscriptionPayload
}

type User {
  id: ID!
  email: String
  firstName: String!
  lastName: String!
  password: String!
  admin: Boolean!
  checkins(where: CheckinWhereInput, orderBy: CheckinOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Checkin!]
  friends(where: UserWhereInput, orderBy: UserOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [User!]
}

type UserConnection {
  pageInfo: PageInfo!
  edges: [UserEdge]!
  aggregate: AggregateUser!
}

input UserCreateInput {
  id: ID
  email: String
  firstName: String!
  lastName: String!
  password: String!
  admin: Boolean!
  checkins: CheckinCreateManyWithoutAuthorInput
  friends: UserCreateManyInput
}

input UserCreateManyInput {
  create: [UserCreateInput!]
  connect: [UserWhereUniqueInput!]
}

input UserCreateOneWithoutCheckinsInput {
  create: UserCreateWithoutCheckinsInput
  connect: UserWhereUniqueInput
}

input UserCreateWithoutCheckinsInput {
  id: ID
  email: String
  firstName: String!
  lastName: String!
  password: String!
  admin: Boolean!
  friends: UserCreateManyInput
}

type UserEdge {
  node: User!
  cursor: String!
}

enum UserOrderByInput {
  id_ASC
  id_DESC
  email_ASC
  email_DESC
  firstName_ASC
  firstName_DESC
  lastName_ASC
  lastName_DESC
  password_ASC
  password_DESC
  admin_ASC
  admin_DESC
}

type UserPreviousValues {
  id: ID!
  email: String
  firstName: String!
  lastName: String!
  password: String!
  admin: Boolean!
}

input UserScalarWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  email: String
  email_not: String
  email_in: [String!]
  email_not_in: [String!]
  email_lt: String
  email_lte: String
  email_gt: String
  email_gte: String
  email_contains: String
  email_not_contains: String
  email_starts_with: String
  email_not_starts_with: String
  email_ends_with: String
  email_not_ends_with: String
  firstName: String
  firstName_not: String
  firstName_in: [String!]
  firstName_not_in: [String!]
  firstName_lt: String
  firstName_lte: String
  firstName_gt: String
  firstName_gte: String
  firstName_contains: String
  firstName_not_contains: String
  firstName_starts_with: String
  firstName_not_starts_with: String
  firstName_ends_with: String
  firstName_not_ends_with: String
  lastName: String
  lastName_not: String
  lastName_in: [String!]
  lastName_not_in: [String!]
  lastName_lt: String
  lastName_lte: String
  lastName_gt: String
  lastName_gte: String
  lastName_contains: String
  lastName_not_contains: String
  lastName_starts_with: String
  lastName_not_starts_with: String
  lastName_ends_with: String
  lastName_not_ends_with: String
  password: String
  password_not: String
  password_in: [String!]
  password_not_in: [String!]
  password_lt: String
  password_lte: String
  password_gt: String
  password_gte: String
  password_contains: String
  password_not_contains: String
  password_starts_with: String
  password_not_starts_with: String
  password_ends_with: String
  password_not_ends_with: String
  admin: Boolean
  admin_not: Boolean
  AND: [UserScalarWhereInput!]
  OR: [UserScalarWhereInput!]
  NOT: [UserScalarWhereInput!]
}

type UserSubscriptionPayload {
  mutation: MutationType!
  node: User
  updatedFields: [String!]
  previousValues: UserPreviousValues
}

input UserSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: UserWhereInput
  AND: [UserSubscriptionWhereInput!]
  OR: [UserSubscriptionWhereInput!]
  NOT: [UserSubscriptionWhereInput!]
}

input UserUpdateDataInput {
  email: String
  firstName: String
  lastName: String
  password: String
  admin: Boolean
  checkins: CheckinUpdateManyWithoutAuthorInput
  friends: UserUpdateManyInput
}

input UserUpdateInput {
  email: String
  firstName: String
  lastName: String
  password: String
  admin: Boolean
  checkins: CheckinUpdateManyWithoutAuthorInput
  friends: UserUpdateManyInput
}

input UserUpdateManyDataInput {
  email: String
  firstName: String
  lastName: String
  password: String
  admin: Boolean
}

input UserUpdateManyInput {
  create: [UserCreateInput!]
  update: [UserUpdateWithWhereUniqueNestedInput!]
  upsert: [UserUpsertWithWhereUniqueNestedInput!]
  delete: [UserWhereUniqueInput!]
  connect: [UserWhereUniqueInput!]
  set: [UserWhereUniqueInput!]
  disconnect: [UserWhereUniqueInput!]
  deleteMany: [UserScalarWhereInput!]
  updateMany: [UserUpdateManyWithWhereNestedInput!]
}

input UserUpdateManyMutationInput {
  email: String
  firstName: String
  lastName: String
  password: String
  admin: Boolean
}

input UserUpdateManyWithWhereNestedInput {
  where: UserScalarWhereInput!
  data: UserUpdateManyDataInput!
}

input UserUpdateOneRequiredWithoutCheckinsInput {
  create: UserCreateWithoutCheckinsInput
  update: UserUpdateWithoutCheckinsDataInput
  upsert: UserUpsertWithoutCheckinsInput
  connect: UserWhereUniqueInput
}

input UserUpdateWithoutCheckinsDataInput {
  email: String
  firstName: String
  lastName: String
  password: String
  admin: Boolean
  friends: UserUpdateManyInput
}

input UserUpdateWithWhereUniqueNestedInput {
  where: UserWhereUniqueInput!
  data: UserUpdateDataInput!
}

input UserUpsertWithoutCheckinsInput {
  update: UserUpdateWithoutCheckinsDataInput!
  create: UserCreateWithoutCheckinsInput!
}

input UserUpsertWithWhereUniqueNestedInput {
  where: UserWhereUniqueInput!
  update: UserUpdateDataInput!
  create: UserCreateInput!
}

input UserWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  email: String
  email_not: String
  email_in: [String!]
  email_not_in: [String!]
  email_lt: String
  email_lte: String
  email_gt: String
  email_gte: String
  email_contains: String
  email_not_contains: String
  email_starts_with: String
  email_not_starts_with: String
  email_ends_with: String
  email_not_ends_with: String
  firstName: String
  firstName_not: String
  firstName_in: [String!]
  firstName_not_in: [String!]
  firstName_lt: String
  firstName_lte: String
  firstName_gt: String
  firstName_gte: String
  firstName_contains: String
  firstName_not_contains: String
  firstName_starts_with: String
  firstName_not_starts_with: String
  firstName_ends_with: String
  firstName_not_ends_with: String
  lastName: String
  lastName_not: String
  lastName_in: [String!]
  lastName_not_in: [String!]
  lastName_lt: String
  lastName_lte: String
  lastName_gt: String
  lastName_gte: String
  lastName_contains: String
  lastName_not_contains: String
  lastName_starts_with: String
  lastName_not_starts_with: String
  lastName_ends_with: String
  lastName_not_ends_with: String
  password: String
  password_not: String
  password_in: [String!]
  password_not_in: [String!]
  password_lt: String
  password_lte: String
  password_gt: String
  password_gte: String
  password_contains: String
  password_not_contains: String
  password_starts_with: String
  password_not_starts_with: String
  password_ends_with: String
  password_not_ends_with: String
  admin: Boolean
  admin_not: Boolean
  checkins_every: CheckinWhereInput
  checkins_some: CheckinWhereInput
  checkins_none: CheckinWhereInput
  friends_every: UserWhereInput
  friends_some: UserWhereInput
  friends_none: UserWhereInput
  AND: [UserWhereInput!]
  OR: [UserWhereInput!]
  NOT: [UserWhereInput!]
}

input UserWhereUniqueInput {
  id: ID
  email: String
}
`