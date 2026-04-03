/**
 * API Services - Barrel Export
 * Re-exports all AWS service API clients for convenient imports
 * @module api/services
 */

// S3 Service (class-based)
export {
  s3Service,
  listBuckets,
  createBucket,
  deleteBucket,
  emptyBucket,
  headBucket,
  listObjects,
  listObjectsV2,
  putObject,
  getObject,
  headObject,
  deleteObject,
  S3Service,
} from './s3'

// Lambda Service (class-based)
export {
  lambdaService,
  listFunctions,
  createFunction,
  getFunction,
  getFunctionConfiguration,
  deleteFunction,
  updateFunctionCode,
  invoke,
  getEventSourceMapping,
  listEventSourceMappings,
  createEventSourceMapping,
  LambdaService,
} from './lambda'

// DynamoDB Service (class-based)
export {
  dynamodbService,
  createTable,
  deleteTable,
  describeTable,
  listTables,
  updateTable,
  putItem,
  getItem,
  deleteItem,
  updateItem,
  query,
  scan,
  batchWriteItem,
  batchGetItem,
  DynamoDBService,
} from './dynamodb'

// SQS Service (functional)
export {
  listQueues,
  getQueueUrl,
  getQueueAttributes,
  createQueue,
  deleteQueue,
  sendMessage,
  deleteMessage,
  purgeQueue,
  setQueueAttributes,
} from './sqs'

// SNS Service (functional)
export {
  listTopics,
  createTopic,
  deleteTopic,
  getTopicAttributes,
  subscribe,
  listSubscriptions,
  listSubscriptionsByTopic,
  unsubscribe,
  publish,
  confirmSubscription,
  getSubscriptionAttributes,
  setSubscriptionAttributes,
  listTagsForResource,
} from './sns'

// IAM Service
export {
  createUser,
  getUser,
  listUsers,
  deleteUser,
  createRole,
  getRole,
  listRoles,
  deleteRole,
  listPolicies,
  getPolicy,
  createAccessKey,
  listAccessKeys,
  attachRolePolicy,
  detachRolePolicy,
  listAttachedRolePolicies,
} from './iam'

// KMS Service
export {
  createKey,
  describeKey,
  listKeys,
  encrypt,
  decrypt,
  generateDataKey,
  sign,
  verify,
  enableKey,
  disableKey,
  scheduleKeyDeletion,
  deleteKey,
  cancelKeyDeletion,
  getKeyRotationStatus,
  enableKeyRotation,
  disableKeyRotation,
} from './kms'

// Secrets Manager Service
export {
  createSecret,
  getSecretValue,
  listSecrets,
  putSecretValue,
  deleteSecret,
  updateSecret,
  describeSecret,
  rotateSecret,
  getRandomPassword,
  restoreSecret,
} from './secrets-manager'

// EventBridge Service
export {
  createEventBus,
  listEventBuses,
  describeEventBus,
  deleteEventBus,
  putRule,
  listRules,
  describeRule,
  deleteRule,
  disableRule,
  enableRule,
  putTargets,
  removeTargets,
  putEvents,
} from './eventbridge'

// CloudWatch Service
export {
  createLogGroup,
  describeLogGroups,
  deleteLogGroup,
  describeLogStreams,
  getLogEvents,
  putMetricData,
  getMetricStatistics,
  listMetrics,
} from './cloudwatch'

// Step Functions Service
export {
  createStateMachine,
  listStateMachines,
  describeStateMachine,
  describeExecution,
  listExecutions,
  startExecution,
  stopExecution,
  getExecutionHistory,
  updateStateMachine,
  deleteStateMachine,
  describeActivity,
  listActivities,
} from './step-functions'

// Cognito Service
export {
  createUserPool,
  listUserPools,
  describeUserPool,
  deleteUserPool,
  updateUserPool,
  adminCreateUser,
  adminListUsers,
  adminGetUser,
  adminDeleteUser,
  adminDisableUser,
  adminEnableUser,
  createUserPoolClient,
  listUserPoolClients,
  describeUserPoolClient,
} from './cognito'

// API Gateway Service
export {
  createRestApi,
  getRestApis,
  getRestApi,
  updateRestApi,
  deleteRestApi,
  createResource,
  getResources,
  deleteResource,
  getMethod,
  deleteMethod,
  createDeployment,
  createStage,
  getStages,
  createHttpApi,
  getHttpApis,
  getHttpApi,
  deleteHttpApi,
  createRoute,
  getRoutes,
  deleteRoute,
  createIntegration,
  getIntegrations,
  deleteIntegration,
  refreshAPIGatewayClient,
} from './api-gateway'

// Kinesis Service
export {
  createStream,
  listStreams,
  describeStream,
  describeStreamSummary,
  deleteStream,
  putRecord,
  putRecords,
  getRecords,
  getShardIterator,
  listShards,
  splitShard,
  mergeShards,
  updateShardCount,
} from './kinesis'

// CloudFormation Service
export {
  createStack,
  deleteStack,
  listStacks,
  describeStacks,
  describeStackResources,
  updateStack,
  cancelUpdateStack,
  describeStackEvents,
  describeStackResource,
  estimateTemplateCost,
  validateTemplate,
  getTemplate,
  getTemplateSummary,
  describeChangeSet,
  createChangeSet,
  listChangeSets,
  deleteChangeSet,
  executeChangeSet,
} from './cloudformation'

// SSM Parameter Store Service
export {
  putParameter,
  getParameter,
  getParameters,
  getParametersByPath,
  deleteParameter,
  describeParameters,
  getParameterHistory,
  addTagsToResource,
  removeTagsFromResource,
} from './ssm'

// Re-export APIError for convenience
export { APIError } from '../client'

// Re-export parseXML for convenience
export { parseXML } from '../client'
