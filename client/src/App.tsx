import React from 'react';
import './App.css';
import {ApolloClient, ApolloProvider, InMemoryCache} from "@apollo/client";
import CreateUsers from "./Components/CreateUsers";

function App() {
  const client = new ApolloClient({
    uri: 'http://localhost:4000/graphql',
    cache: new InMemoryCache()
  });
  return (
    <>
    <ApolloProvider client={client}>
      <CreateUsers />
    </ApolloProvider>
    </>
  );
}

export default App;
