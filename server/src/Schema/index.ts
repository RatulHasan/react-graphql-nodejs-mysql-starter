import {GraphQLObjectType, GraphQLSchema} from 'graphql';
import { ALL_USERS } from './Queries/User';
import {CREATE_USER, DELETE_USER, UPDATE_USER} from "./Mutations/User";
import {ALL_POSTS, ALL_POSTS_BY_TYPE} from "./Queries/Posts";

const RootQuery = new GraphQLObjectType({
  name: 'RootQueryType',
  fields: () =>({
    all_users: ALL_USERS,
    all_posts: ALL_POSTS,
  })
});

const RootMutation = new GraphQLObjectType({
  name: 'RootMutationType',
  fields: {
    create_user: CREATE_USER,
    delete_user: DELETE_USER,
    update_user: UPDATE_USER,
  }
});

export const schema = new GraphQLSchema({
  query: RootQuery,
  mutation: RootMutation
});