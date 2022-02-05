import {GraphQLObjectType, GraphQLString, GraphQLID, GraphQLList} from 'graphql';
import {PostType} from "./Posts";
import {Posts} from "../../Entities/PostsTable";

const UserType = new GraphQLObjectType({
  name: 'User',
  fields: () => ({
    id: {type: GraphQLID},
    username: {type: GraphQLString},
    email: {type: GraphQLString},
    password: {type: GraphQLString},
    createdAt: {type: GraphQLString},
    updatedAt: {type: GraphQLString},
    posts: {
      type: new GraphQLList(PostType),
      resolve(parent, args){
        return Posts.find({post_author: parent.id});
      }
    }
  })
});

export default UserType;