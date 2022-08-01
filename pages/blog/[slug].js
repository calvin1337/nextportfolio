import {Container} from "react-bootstrap";
import { GraphQLClient, gql } from "graphql-request";

const graphcms = new GraphQLClient(
  "https://api-eu-west-2.hygraph.com/v2/cl65zao3d98lk01ukerb2coua/master"
);

const QUERY = gql`
  query Post($slug: String!) {
    post(where: { slug: $slug }) {
        id,
        title,
        datePublished,
        slug,
        content{
            html
        }
        coverPhoto{
            url,
            id
        }
    }
  }
`;

const SLUGLIST = gql`
{
    posts{
        slug
    }
}
`

export async function getStaticPaths(){
  const {posts} = await graphcms.request(SLUGLIST);
  return {
      paths: posts.map(post => ({
          params: {
              slug: post.slug
          }
      })),
      fallback: false
  }
}


export async function getStaticProps({params}) {
  const slug = params.slug;
  const data = await graphcms.request(QUERY, {slug});
  const post = data.post
  return {
    props: {
      post
    },
    revalidate: 10,
  };
}



const blogpost = ({post}) => {
  console.log({post})
  return (
    <div className="blogDetails contentSection padding-bottom-120">
        <Container>
            <p>
            <img src={post.coverPhoto.url} alt="" />
            </p>
            <h3>{post.title}</h3>
            <div className="testing" dangerouslySetInnerHTML={{__html: post.content.html}}></div>
        </Container>
    </div> 
  )
}

export default blogpost