import gql from 'graphql-tag'

const getAllUsers = gql`
  {
    users {
      id
      name
      email
      company {
        name
      }
    }
  }
`

const getUserDetail = gql`
  query($id: ID!) {
    userdetail(id: $id) {
      id
      name
      email
      company {
        name
      }
    }
  }
`

export { getAllUsers, getUserDetail }
