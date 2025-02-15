import { ApolloClient, InMemoryCache , HttpLink , ApolloLink } from '@apollo/client';
import { setContext } from '@apollo/client/link/context';
const PRODUCTION = false
const url = PRODUCTION ? 'https://api.globalfun.cam/graphql' : 'http://localhost:4000/graphql'
const sfuUrl  =  PRODUCTION ? 'https://sfu.globalfun.cam/graphql' : "http://localhost:4001/graphql"

const mainServer = new HttpLink({
  uri: url,
});

const sfuServer = new HttpLink({
  uri: sfuUrl,
});


const authLink = setContext((_, { headers }) => {
  // get the authentication token from local storage if it exists
  // const token = 'assssss'
  let data = localStorage.getItem('persist:root');
  data = JSON.parse(data)
  let user = data.user
  user = JSON.parse(user)
  let token = user.token
  // console.log(token,"testtttttttttttttt")
  // return the headers to the context so httpLink can read them
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : "",
    }
  }
});


const getLink = () => {
    return ApolloLink.split(
      operation => operation.getContext().apiName === 'sfu', // boolean check
      sfuServer,  // if fa
      mainServer, // if true
    )
}

const client = new ApolloClient({
  link: authLink.concat(getLink()),
  cache: new InMemoryCache()
});


// const client = new ApolloClient({
//   uri: url,
//   cache: new InMemoryCache(),
// });

export default client