import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Social from "../Socials/Social";
import styles from "../../styles/Contact.module.css";

const ContactSocial = (props) => {
  return (
    <div className={styles.contactInfoBlock}>
      <span className={styles.contactIcon}>
        <FontAwesomeIcon icon={props.icon} />
      </span>
      <div className={styles.contactSocial}>
        <h6>{props.title}</h6>
        <Social size={props.size} />
      </div>
    </div>
  );
};

export default ContactSocial;
