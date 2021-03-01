export const graphql_api = "http://localhost:4000/";

export const get_news_query = `
query GetPosts{posts(pagination: {
    limit: 10
    offset: 0
  }){
    id
    title
    content
    image
    createdAt
  }
}
`;
