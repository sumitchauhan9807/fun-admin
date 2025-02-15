import { gql } from "@apollo/client";

export const HELLO = gql`
	query hello {
		hello
	}
`;

export const GET_RTP_CAPABILITIES = gql`
	mutation getRtpCapabilities {
		getRtpCapabilities
	}
`;

export const CREATE_PRODUCER_TRANSPORT = gql`
	mutation createProducerTransport($modelId: String!) {
		createProducerTransport(modelId: $modelId) {
			id
			iceParameters
			iceCandidates
			dtlsParameters
		}
	}
`;

export const CONNECT_PRODUCER_TRANSPORT = gql`
mutation ConnectProducerTransport($transportId: String!, $dtlsParameters: String!) {
  connectProducerTransport(transportId: $transportId, dtlsParameters: $dtlsParameters)
} `;



export const START_PRODUCING = gql`
mutation startProducing($transportId: String!, $rtpParameters: String!, $kind: String!) {
  startProducing(transportId: $transportId, rtpParameters: $rtpParameters, kind: $kind)
}`;


export const CREATE_CONSUMER_TRANSPORT = gql`
	mutation createConsumerTransport($clientId: String!,$modelId:String!) {
		createConsumerTransport(clientId: $clientId,modelId:$modelId) {
			id
			iceParameters
			iceCandidates
			dtlsParameters
		}
	}
`;


export const CONSUME_MEDIA = gql`
	mutation consumeMedia($rtpCapabilities: String!,$clientId:String!,$modelId:String!,$kind:String!) {
		consumeMedia(rtpCapabilities: $rtpCapabilities,clientId:$clientId,modelId:$modelId,kind:$kind) {
			producerId
			id
			kind
			rtpParameters
		}
	}
`;

export const CONNECT_CONSUMER_TRANSPORT = gql`
	mutation connectConsumerTransport($clientId: String!,$modelId:String!,$dtlsParameters:String!) {
		connectConsumerTransport(clientId: $clientId,modelId:$modelId,dtlsParameters:$dtlsParameters)
	}
`;

export const UNPAUSE_CONSUMER = gql`
	mutation unpauseConsumer($clientId: String!,$modelId:String!,$kind:String!) {
		unpauseConsumer(clientId: $clientId,modelId:$modelId,kind:$kind)
	}
`;



