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

const updateUser = gql`
  mutation updateUser($id: ID, $user: UserInput) {
    updateUser(
      id: $id,
      user: $user
    ) {
      id
      name
      email
      company {
        name
      }
    }
  }
`

export { getAllUsers, getUserDetail, updateUser }
