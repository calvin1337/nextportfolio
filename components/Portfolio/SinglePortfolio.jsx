import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faLink} from "@fortawesome/free-solid-svg-icons";
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import {Col} from "react-bootstrap";
import styles from "../../styles/Portfolio.module.css";
import Link from "next/link";

const SinglePortfolio = ({title, description, slug, demo, repo, coverPhoto, tags, type}) => {

  

  return(
  <Col lg="6" md="6" col="12" className="mt-30">
      <div className={styles.portfolioSingle}>
          <div className={styles.portfolioImg}>
              <Link href="/" target="_blank" rel="noopener noreferrer">
              <img src={coverPhoto.url} alt="my project" />

              </Link>
          </div>
              <a href={""} target="_blank" rel="noopener noreferrer">
          <h5>{title}</h5>

              </a>
                  <h6>{description}</h6>
              <div className={styles.tagContainer}>
              
              {
              tags?.length > 0
              ? (
                  
                  tags.map((tag) => (
                      <div key={tag} className={styles.tag}>{tag}</div> 
                  ))
          
              ) :
              (
                  ""
              )
              }
              
              <span className={styles.typeTag}>{type}</span>
              </div>
              <div className={styles.typeContainer}>
                
                  {/* TEMP BUTTON? */}
                  <Link href={"/portfolio/" + slug}>
              <button className={styles.btnStyle} type="submit">
                  Read more
              </button>
              </Link>
              <div style={{marginTop:"10px"}} className={styles.gitLink}>
                  <a href={demo} target="_blank" rel="noopener noreferrer">
                  <FontAwesomeIcon icon={faLink} size="2x" />
                  </a>
                  <a href={repo} target="_blank" rel="noopener noreferrer">
                  <FontAwesomeIcon icon={faGithub} size="2x" />
                  </a>
              </div>
              </div>
              
      </div>    
  </Col>
  )
}

export default SinglePortfolio;