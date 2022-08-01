import {Container, Row} from "react-bootstrap";
import SinglePortfolio from "../components/Portfolio/SinglePortfolio";
import { GraphQLClient, gql } from "graphql-request";

const graphcms = new GraphQLClient(
  "https://api-eu-west-2.hygraph.com/v2/cl65zao3d98lk01ukerb2coua/master"
);

const QUERY = gql`
{
  projects {
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
`
export async function getStaticProps() {
  const {projects} = await graphcms.request(QUERY);
  return {
    props: {
      projects,
    },
    revalidate: 10,
  };
}

const portfolio = ({projects}) => {
  console.log({projects})

  return(
    <main className="portfolio contentSection padding-bottom-120">
                <Container>
                    <div className="sectionTitle">
                        <h2>Portfolio</h2>
                        <span>Portfolio</span>
                    </div>
                    <Row>
                    {projects.map((project) => (
                      <SinglePortfolio
                        title={project.title}
                        coverPhoto={project.coverPhoto}
                        key={project.id}
                        slug={project.slug}
                        description={project.description}
                        demo={project.demo}
                        repo={project.repo}
                        tags={project.tags}
                        type={project.type}
                      />
                    ))}
                    </Row>
                </Container>
            </main>
  )
}

export default portfolio