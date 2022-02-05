import {PostType} from "../TypeDefs/Posts";
import {GraphQLList} from "graphql";
import {Posts} from "../../Entities/PostsTable";

export const ALL_POSTS = {
  type: new GraphQLList(PostType),
  resolve() {
    return Posts.find();
  }
}
export const ALL_POSTS_BY_TYPE = {
  type: new GraphQLList(PostType),
  resolve(parent: any, args: { type: any; }) {
    return Posts.find({'post_type': args.type});
  }
}