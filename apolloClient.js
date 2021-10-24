import { ApolloClient, InMemoryCache } from '@apollo/client';

const client = new ApolloClient({
    uri: 'https://api-eu-central-1.graphcms.com/v2/ckv4ry5x93i7801yz7fwd9hdr/master',
    cache: new InMemoryCache(),
});

export default client;
