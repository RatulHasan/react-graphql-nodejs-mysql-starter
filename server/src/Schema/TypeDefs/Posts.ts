import {GraphQLObjectType, GraphQLString, GraphQLInt, GraphQLID, GraphQLList} from 'graphql';

export const PostType = new GraphQLObjectType({
    name: 'Post',
    fields: () => ({
      id: {type: GraphQLID},
      post_author: {type: GraphQLID},
      post_date: {type: GraphQLString},
      post_date_gmt: {type: GraphQLString},
      post_content: {type: GraphQLString},
      post_title: {type: GraphQLString},
      post_excerpt: {type: GraphQLString},
      post_status: {type: GraphQLString},
      comment_status: {type: GraphQLString},
      ping_status: {type: GraphQLString},
      post_password: {type: GraphQLString},
      post_name: {type: GraphQLString},
      to_ping: {type: GraphQLString},
      pinged: {type: GraphQLString},
      post_modified: {type: GraphQLString},
      post_modified_gmt: {type: GraphQLString},
      post_content_filtered: {type: GraphQLString},
      post_parent: {type: GraphQLID},
      guid: {type: GraphQLString},
      menu_order: {type: GraphQLInt},
      post_type: {type: GraphQLString},
      post_mime_type: {type: GraphQLString},
      comment_count: {type: GraphQLInt},
    })
});