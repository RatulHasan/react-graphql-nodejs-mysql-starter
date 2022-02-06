import {gql} from "@apollo/client"

export const CREATE_USER = gql`
    mutation CreateUser($username: String!, $password: String!, $email: String!) {
        createUser(username: $username, password: $password, email: $email) {
            id
            username
            email
            password
            createdAt
            updatedAt
        }
    }`;