import { refreshApiClient } from './client'
import { refreshS3Client } from './services/s3'
import { refreshLambdaClient } from './services/lambda'
import { refreshDynamoDBClient } from './services/dynamodb'
import { refreshSQSClient } from './services/sqs'
import { refreshSNSClient } from './services/sns'
import { refreshAPIGatewayClient } from './services/api-gateway'
import { refreshKinesisClient } from './services/kinesis'
import { refreshKMSClient } from './services/kms'
import { refreshSecretsManagerClient } from './services/secrets-manager'
import { refreshEventBridgeClient } from './services/eventbridge'
import { refreshCloudWatchClient } from './services/cloudwatch'
import { refreshSSMClient } from './services/ssm'

// Centralized function to refresh all API clients when settings change
export function refreshAllClients(): void {
  refreshApiClient()
  refreshS3Client()
  refreshLambdaClient()
  refreshDynamoDBClient()
  refreshSQSClient()
  refreshSNSClient()
  refreshAPIGatewayClient()
  refreshKinesisClient()
  refreshKMSClient()
  refreshSecretsManagerClient()
  refreshEventBridgeClient()
  refreshCloudWatchClient()
  refreshSSMClient()
}
