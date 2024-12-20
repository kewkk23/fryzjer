import request, { gql } from "graphql-request"
const getAllBlogs = async () => {
    const resp = gql`
    query allBlogs {
  blogs {
    title
    image {
      url
    }
    shortDesc
    slug
  }
}
`
    const result = await request(`https://eu-west-2.cdn.hygraph.com/content/${process.env.NEXT_PUBLIC_GRAPHQL_KEY}/master`, resp)
    return result

}
const getOneBlog = async (slug) => {
    const resp = gql`
    query oneBlog {
  blogs(where: {slug: "${slug}"}) {
    id
    title
    image {
      url
    }
    desc {
      html
    }
  }
}`
    const result = await request(`https://eu-west-2.cdn.hygraph.com/content/${process.env.NEXT_PUBLIC_GRAPHQL_KEY}/master`, resp)
    return result
}

export default {
    getAllBlogs,
    getOneBlog
}