import { Col } from "react-bootstrap";
import styles from "../../styles/Contact.module.css";

const Form = () => {
  return (
    <Col lg="6">
      <div className={styles.contactFormWrapper}>
        <h4>Get In Touch</h4>
        <form name="contact" className={styles.contactForm}>
          <div className={styles.formField}>
            <label htmlFor="name">Enter Your Name</label>
            <input type="text" name="name" id="contact-form-name" />
          </div>
          <div className={styles.formField}>
            <label htmlFor="email">Enter Your Email</label>
            <input type="text" name="email" id="contact-form-email" />
          </div>
          <div className={styles.formField}>
            <label htmlFor="subject">Enter Your Subject</label>
            <input type="text" name="subject" id="contact-form-subject" />
          </div>
          <div className={styles.formField}>
            <label htmlFor="message">Enter Your Message</label>
            <textarea
              name="message"
              id="contact-form-message"
              cols="30"
              rows="6"
            ></textarea>
          </div>
          <div className={styles.formField}>
            <button className="btnStyle" type="submit">
              Send Mail
            </button>
          </div>
          <input type="hidden" name="form-name" value="contact" />
        </form>
      </div>
    </Col>
  );
};

export default Form;
