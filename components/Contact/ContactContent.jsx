import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from "../../styles/Contact.module.css";

const ContactContent = (props) => {
  return (
    <div className={styles.contactInfoBlock}>
      <span className={styles.contactIcon}>
        <FontAwesomeIcon icon={props.icon} />
      </span>
      <div className={styles.contactContent}>
        <h6>{props.title}</h6>
        <p>{props.info}</p>
      </div>
    </div>
  );
};

export default ContactContent;
