import VueApollo from 'vue-apollo'
import Vue from 'vue'
import {createHttpLink} from 'apollo-link-http'
import ApolloClient from 'apollo-client'
import { InMemoryCache } from 'apollo-cache-inmemory';

Vue.use(VueApollo)

const httpLink = createHttpLink({
  // GraphQLサーバーのエンドポイント
  uri: 'https://zu75tebgkjhpzga6wfscusd6z4.appsync-api.ap-northeast-1.amazonaws.com/graphql',
  headers: {
    'x-api-key':'xxx'
  }
});

const apolloClient = new ApolloClient({
  link: httpLink,
  cache: new InMemoryCache({}),
  connectToDevTools: true
});

const apolloProvider = new VueApollo({
  defaultClient: apolloClient, 
});

export default apolloProvider

