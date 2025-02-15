import { gql } from "@apollo/client";

export const HELLO = gql`
	query hello {
		hello
	}
`;

export const LOGIN = gql`
	mutation modelLogin($data: LoginInput!) {
		modelLogin(data: $data) {
			user {
				id
				email
				username
				name
				avatar
				profileSetupStep
				profileComplete
				documentsVerified
			}
			token
		}
	}
`;

export const REGISTER = gql`
	mutation modelRegister($data: RegisterInput!) {
		modelRegister(data: $data) {
			user {
				id
				email
				username
				name
				avatar
				profileSetupStep
				profileComplete
				documentsVerified
			}
			token
		}
	}
`;

export const UPDATE_AVATAR = gql`
	mutation updateAvatar($filename: String!) {
		updateAvatar(filename: $filename) {
			id
			email
			username
			name
			avatar
			profileSetupStep
			profileComplete
			documentsVerified
		}
	}
`;

export const UPDATE_DOCUMENTS = gql`
	mutation updateDocument($filename: String!,$docType:UploadDocsInputType!) {
		updateDocument(filename: $filename,docType:$docType){
			id
			email
			username
			name
			avatar
			profileSetupStep
			profileComplete
			documentsVerified
		}
	}
`;



export const ADD_BASIC_INFO = gql`
	mutation addBasicInfo($data: AddBasicInfo!) {
		addBasicInfo(data: $data) {
			id
			email
			username
			name
			avatar
			profileSetupStep
			profileComplete
			documentsVerified
		}
	}
`;

export const MODEL_DATA = gql`
	query modelData {
		modelData {
			id
			email
			username
			name
			avatar
			profileSetupStep
			profileComplete
			documentsVerified
			basic_info{
				id
			}
			address {
				id
			}
			documents {
				passport_front
				passport_back
				selfie_with_id
				proof_of_address
				business_certification
			}
		}
	}
`;

export const GET_CLOUD_PUT_URL = gql`
	query getCloudPutUrl($filename: String!, $mimetype: String!, $bucket: String) {
		getCloudPutUrl(filename: $filename, mimetype: $mimetype, bucket: $bucket)
	}
`;
