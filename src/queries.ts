import { gql } from "@apollo/client";

export const HELLO = gql`
	query hello {
		hello
	}
`;

export const ADMIN_LOGIN = gql`
	mutation adminLogin($data: LoginInput!) {
		adminLogin(data: $data) {
			user {
				id
				email
				username
				name
				avatar
			}
			token
		}
	}
`;

export const CREATE_ADMIN = gql`
	mutation createAdmin {
		createAdmin{
			user {
				id
				email
				username
				name
				avatar
			}
			token
		}
	}
`;

export const VERIFY_MODEL_DOCS = gql`
	mutation verifyModelDocuments($username:String!) {
		verifyModelDocuments(username:$username)
	}
`;

export const DELETE_MODEL = gql`
	mutation deleteModel($username:String!) {
		deleteModel(username:$username)
	}
`;

export const GET_ALL_MODELS = gql`
	query getAllModels {
		getAllModels{
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


export const GET_MODEL_DATA = gql`
	query getModelData($username:String!) {
		getModelData(username:$username){
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
				dob
				eyecolor
				gender
				haircolor
				height
				weight
				profession
			}
			address {
				id
				city
				country
				country_code
				telephone
				zipcode
				address
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
