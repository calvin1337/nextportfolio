import {Container} from "react-bootstrap";
import { GraphQLClient, gql } from "graphql-request";
import Carousel from "../../components/Portfolio/Carousel";


const graphcms = new GraphQLClient(
  "https://api-eu-west-2.hygraph.com/v2/cl65zao3d98lk01ukerb2coua/master"
);

const QUERY = gql`
  query Project($slug: String!) {
    project(where: { slug: $slug }) {
        title,
        id,
        slug,
        repo,
        type,
        description,
        demo,
        tags,
        coverPhoto{
          url
        }
    }
  }
`;

const SLUGLIST = gql`
{
    projects {
        slug
    }
}
`

export async function getStaticPaths(){
  const {projects} = await graphcms.request(SLUGLIST);
  return {
      paths: projects.map(project => ({
          params: {
              slug: project.slug
          }
      })),
      fallback: false
  }
}


export async function getStaticProps({params}) {
  const slug = params.slug;
  const data = await graphcms.request(QUERY, {slug});
  const project = data.project
  return {
    props: {
      project
    },
    revalidate: 10,
  };
}

const PortfolioContent = ({project}) => {

  // ADD IMAGE CAROUSEL
  
  return (
  <div className="blogDetails contentSection padding-bottom-120">
      <Container>
          <div>
          <Carousel />
          </div>
          <h3>{project.title}</h3>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid veritatis vero deleniti blanditiis inventore, quae culpa veniam est nam obcaecati qui quidem itaque aspernatur fugit reiciendis rerum! Deleniti, asperiores harum.Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis, dicta? Consectetur itaque ipsam facilis sequi quisquam dolor, sunt unde quam.</p>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Explicabo molestiae aliquid voluptatibus repellendus vel enim repellat natus consequatur quam inventore.</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias excepturi consequatur culpa amet nihil minima enim quod placeat veritatis? Sint ipsam iusto reiciendis ducimus dicta rerum repudiandae corrupti quae tempora?</p>
      </Container>
  </div> 
  );
}

export default PortfolioContent