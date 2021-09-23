import{
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  gql,
  useQuery,
  
} from '@apollo/client'

const client = new ApolloClient({
  uri: 'http://localhost:4000',
  cache: new InMemoryCache()
})

const QUERY_MESSAGES = gql`
  query{
    messages{
      id
      content
      user
    }
  }
`


const Messages = () => {
  const { data } = useQuery(QUERY_MESSAGES);
  console.log(data)
  if (!data) {
    return null;
  }

  return (
    <>
      {data.messages && data.messages.map(message => {
        return (<div key={message.id}>{message.content}</div>)
      })}
    </>
  );
};

const Query = () => (
  <ApolloProvider client={client}>
    <Messages />
  </ApolloProvider>
);

export default Query