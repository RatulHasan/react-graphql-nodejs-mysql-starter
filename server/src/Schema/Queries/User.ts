import UserType from "../TypeDefs/User";
import {GraphQLList} from "graphql";
import {Users} from "../../Entities/UsersTable";

export const ALL_USERS = {
  type: new GraphQLList(UserType),
  resolve() {
    return Users.find();
  }
}