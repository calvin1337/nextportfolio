import {Container, Row} from "react-bootstrap";
import { GraphQLClient, gql } from "graphql-request";
import BlogPost from "../components/Blog/BlogPost";

const graphcms = new GraphQLClient(
  "https://api-eu-west-2.hygraph.com/v2/cl65zao3d98lk01ukerb2coua/master"
);

const QUERY = gql`
  {
    posts {
      id
      title
      datePublished
      slug
      content {
        html
      }
      coverPhoto {
        publishedAt
        createdBy {
          id
        }
        url
      }
    }
  }
`;

export async function getStaticProps() {
  const {posts} = await graphcms.request(QUERY);
  console.log(QUERY)
  return {
    props: {
      posts,
    },
    revalidate: 10,
  };
}



const blog = ({posts}) => {
  return(
    <div className="blogSection contentSection">
    <Container>
        <div className="sectionTitle">
            <h2>Recent Blogs</h2>
            <span>Recent Blogs</span>         
        </div>
        <Row className="mt-30-reverse">
            {/* Blog Posts */}

            {posts.map((post) => (
          <BlogPost
            title={post.title}
            coverPhoto={post.coverPhoto}
            key={post.id}
            datePublished={post.datePublished}
            slug={post.slug}
          />
        ))}
        </Row>
    </Container>
</div>
  )
}


export default blog