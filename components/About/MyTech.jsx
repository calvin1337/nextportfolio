import {Container, Row, Col} from "react-bootstrap"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHtml5, faGit, faCss3, faReact, faJs, faPython } from '@fortawesome/free-brands-svg-icons'
import styles from "../../styles/About.module.css";

const MyTech = () => {
    return(
        <div className="aboutArea contentSection">
        <Container>
        <div className="sectionTitle">
                <h2>
                What I Work With
                </h2>
                <span>What I Work With</span>
            </div>
            <Row>
                <Col lg="12">

                <div className="stack">
                <p>I enjoy building in my free time to learn new technologies. 
                    It&apos;s enjoyable to try out different concepts to strengthen my knowledge. 
                    
                    I&apos;m currently focusing on learning more about the backend with PHP and mySQL.
                    </p>
                    <p>
                    The technologies below are the ones I have the most experience in. 
                    </p>
                    <ul className={styles.techContainer}>
                        <li>
                        <FontAwesomeIcon icon={faHtml5} size="4x"/>
                           
                        </li>
                        <li>
                        <FontAwesomeIcon icon={faCss3} size="4x"/>
                           
                        </li>
                        <li>
                        <FontAwesomeIcon icon={faJs} size="4x"/>
                           
                        </li>
                        <li>
                        <FontAwesomeIcon icon={faReact} size="4x"/>
                           
                        </li>
                        <li>
                        <FontAwesomeIcon icon={faPython} size="4x"/>
                           
                        </li>
                        <li>
                        <FontAwesomeIcon icon={faGit} size="4x"/>
                           
                        </li>
                    </ul>
                </div>
                </Col>
            </Row>
        </Container>
    </div>
    )
}


export default MyTech;