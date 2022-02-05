import express from 'express';
import {graphqlHTTP} from 'express-graphql';
import cors from 'cors';
import {createConnection} from 'typeorm';
import {schema} from "./Schema";
import {Users} from "./Entities/UsersTable";
import {Posts} from "./Entities/PostsTable";

const main = async () => {
  await createConnection({
    type: 'mysql',
    host: '127.0.0.1',
    port: 3306,
    username: 'root',
    password: 'password1234',
    database: 'crud_graphQL',
    logging: true,
    synchronize: false,
    entities: [Users, Posts]
  });

  const app = express();
  app.use(cors());
  app.use(express.json());
  app.use('/graphql', graphqlHTTP({
    schema: schema,
    graphiql: true,
  }));

  app.listen(4000, () => {
    console.log('Running a GraphQL API server at localhost:4000/graphql');
  });
};

main().catch(err => console.error(err));