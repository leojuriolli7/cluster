import { gql } from '@apollo/client'

export const LOGIN = gql`
  mutation Login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        id
        username
        displayName
      }
    }
  }
`

export const REGISTER = gql`
  mutation Register(
    $email: String!
    $username: String!
    $displayName: String!
    $password: String!
  ) {
    register(
      email: $email
      username: $username
      displayName: $displayName
      password: $password
    ) {
      token
      user {
        id
        username
        displayName
      }
    }
  }
`

export const ADD_COMMENT = gql`
  mutation AddComment($postId: ID!, $comment: String!) {
    addComment(postId: $postId, comment: $comment) {
      id
    }
  }
`

export const DELETE_COMMENT_BY_ID = gql`
  mutation DeleteComment($id: ID!) {
    deleteComment(id: $id)
  }
`

export const EDIT_COMMENT_BY_ID = gql`
  mutation EditComment($id: ID!, $comment: String!) {
    updateComment(id: $id, comment: $comment) {
      id
    }
  }
`

export const CREATE_POST = gql`
  mutation CreatePost($title: String!, $body: String!) {
    createPost(title: $title, body: $body) {
      id
    }
  }
`

export const DELETE_POST_BY_ID = gql`
  mutation DeletePost($postId: ID!) {
    deletePost(postId: $postId)
  }
`

export const UPDATE_POST_BY_ID = gql`
  mutation UpdatePost($id: ID!, $title: String!, $body: String!) {
    updatePost(id: $id, title: $title, body: $body) {
      id
    }
  }
`
