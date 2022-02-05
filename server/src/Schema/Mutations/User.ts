import UserType from "../TypeDefs/User";
import {GraphQLID, GraphQLNonNull, GraphQLString} from "graphql";
import {Users} from "../../Entities/UsersTable";

export const CREATE_USER = {
  type: UserType,
  args: {
    username: {type: new GraphQLNonNull(GraphQLString)},
    email: {type: new GraphQLNonNull(GraphQLString)},
    password: {type: new GraphQLNonNull(GraphQLString)}
  },
  async resolve(root: any, args: any) {
    const {username, email, password} = args;
    return await Users.insert({username, email, password})
      .catch((err: any) => {
        console.log(err);
      });
  }
};

export const UPDATE_USER = {
  type: UserType,
  args: {
    id: {type: new GraphQLNonNull(GraphQLID)},
    username: {type: GraphQLString},
    email: {type: GraphQLString},
    password: {type: new GraphQLNonNull(GraphQLString)}
  },
  async resolve(root: any, args: any) {
    const {id, username, email, password} = args;
    const user = await Users.findOne(id);
    const oldPassword = user?.password;
    if (oldPassword === password) {
      return await Users.update({id}, {username, password})
        .catch((err: any) => {
          console.log(err);
        });
    } else {
      return null;
    }
  }

};

export const DELETE_USER = {
  type: UserType,
  args: {
    id: {type: new GraphQLNonNull(GraphQLID)}
  },
  async resolve(root: any, args: any) {
    const {id} = args;
    await Users.delete({id}).then(() => {
      return ["User deleted"];
    }).catch(() => {
      return ["User not found"];
    });
  }
};