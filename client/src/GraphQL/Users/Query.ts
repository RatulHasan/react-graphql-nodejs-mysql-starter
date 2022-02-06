import {gql} from "@apollo/client"

export const GET_ALL_USERS = gql`
    query allUsers {
        allUsers {
            id
            email
            username
            password
            createdAt
            updatedAt
        }
    }
`

export const GET_ALL_POSTS = gql`
    query allPosts {
        allPosts(limit: 10) {
            id
            post_title
            post_content
            post_author
            allUsers {
                id
                email
                username
                password
                createdAt
                updatedAt
            }
            post_category
            post_tags
            post_status
            post_image
            post_date
            post_modified
        }
    }
`