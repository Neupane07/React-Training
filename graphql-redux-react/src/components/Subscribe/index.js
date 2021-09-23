import React from "react";
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  useSubscription,
  gql,
} from "@apollo/client";
import { WebSocketLink } from "@apollo/client/link/ws";

const link = new WebSocketLink({
  uri: `ws://localhost:4000/`,
  options: {
    reconnect: true,
  },
});

const client = new ApolloClient({
  link,
  uri: "http://localhost:4000/",
  cache: new InMemoryCache(),
});

const GET_MESSAGES = gql`
  subscription {
    messages {
      id
      content
      user
    }
  }
`;

const Messages = () => {
  const { data } = useSubscription(GET_MESSAGES);
  if (!data) {
    return null;
  }

  return (
    <div>
      <h1>Subscription</h1>
      <div 
        style={{
            display: "flex",
            justifyContent: "center",
            paddingBottom: "1em",
        }}>
          <div
            style={{
              background:  "blue",
              color: "white",
              padding: "1em",
              borderRadius: "1em",
              maxWidth: "60%",
            }}
          >
            {data.messages.map(message => {
              return (
                <div key={message.id}>
                  {message.content}
                </div>
              )
            })}
          </div>
      </div>
    </div>
  );
};


const Subscribe = () => (
  <ApolloProvider client={client}>
    <Messages />
  </ApolloProvider>
);

export default Subscribe