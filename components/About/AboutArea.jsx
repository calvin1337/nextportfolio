import { Container, Row, Col } from "react-bootstrap";
import styles from "../../styles/About.module.css";


const AboutArea = () => {
    return(
        <div className="aboutArea contentSection">
                <Container>
                <div className="sectionTitle">
                        <h2>
                        About Me
                        </h2>
                        <span>About Me</span>
                    </div>
                    <Row>
                        <Col lg="6">
                            <div className={styles.aboutImg}>
                                <img src="https://picsum.photos/200/300" alt="Random" />
                            </div>
                            <a className={styles.btnStyle} >Download CV</a>
                        </Col>
                        <Col lg="6">
                            <div className={styles.aboutContent}>
                                <h3>Hey guys! My name&apos;s <span className={styles.colorTheme}>Calvin </span></h3>

                                <p> 
                                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Corporis nemo dolores vitae. Iure inventore architecto nobis dignissimos doloremque unde repudiandae error repellendus, veritatis consectetur accusantium! Nemo repellendus rem officia nostrum iusto voluptatem quos atque iste excepturi consectetur exercitationem quisquam nisi suscipit non quaerat tempore consequuntur quo, inventore accusantium iure animi velit fugit quia! Temporibus id eos consectetur, corrupti facere in.
                                    </p>                           
                                <ul>
                                <li>
                                    <b>Full Name</b>
                                    Calvin Donaldson
                                </li>
                                <li>
                                    <b>Age</b>
                                    24
                                </li>
                                <li>
                                    <b>Nationality</b>
                                    Scottish
                                </li>                              
                                <li>
                                    <b>Stack</b>
                                    MERN
                                </li>
                                <li>
                                    <b>JS Libery</b>
                                    React 
                                </li>
                                <li>
                                    <b>Freelance</b>
                                    Available
                                </li>
                                </ul>
                               
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
    )
}


export default AboutArea;