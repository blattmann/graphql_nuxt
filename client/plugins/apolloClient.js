export default function(context){
  return {
    httpEndpoint: 'https://3k7kj7xpmv.lp.gql.zone/graphql',
    getAuth:() => 'Bearer my-static-token' // use this method to overwrite functions
  }
}