import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faTwitter, faLinkedin, faInstagram } from '@fortawesome/free-brands-svg-icons'
import Link from 'next/link';

const Social = (props) => {

    console.log(props)
  return (
    <ul className="social">
                <li>
                    <a target="_blank" href="https://twitter.com/ca1ven" rel="noopener noreferrer">
                    <FontAwesomeIcon icon={faTwitter} size={props.size}/>
                    </a>
                </li>
                <li>
                    <a target="_blank" href="https://instagram.com/calvindonladson" rel="noopener noreferrer">
                    <FontAwesomeIcon icon={faInstagram} size={props.size}/>
                    </a>
                </li>
                <li>
                    <a target="_blank" href="https://github.com/calvin1337" rel="noopener noreferrer">
                    <FontAwesomeIcon icon={faGithub} size={props.size}/>
                    </a>
                </li>
                <li>
                    <a target="_blank" href="https://www.linkedin.com/in/calvindonaldson/" rel="noopener noreferrer">
                    <FontAwesomeIcon icon={faLinkedin} size={props.size}/>
                    </a>
                </li>
            </ul>
  );
};




export default Social;
