import { Container, Row, Col } from "react-bootstrap";
import styles from "../styles/Contact.module.css";
import {faPhone,faEnvelope,faUsers} from "@fortawesome/free-solid-svg-icons";
import Form from "../components/Contact/Form"
import ContactContent from "../components/Contact/ContactContent"
import ContactSocial from "../components/Contact/ContactSocial"


const contact = () => {
  return(
    <main className="contactArea contentSection">
      <Container>
        <div className="sectionTitle">
          <h2>Contact Me</h2>
          <span>Contact Me</span>
        </div>
        <Row>
          <Form />

          <Col lg="6">
            <div className="contactInfo">
              <ContactContent title="Phone" info="" icon={faPhone} />
              <ContactContent
                title="Email"
                info="calvindonaldson1997313@gmail.com"
                icon={faEnvelope}
              />
              <ContactSocial title="Socials" size="2x" icon={faUsers} />
            </div>
          </Col>
        </Row>
      </Container>
    </main>
  )
}

export default contact