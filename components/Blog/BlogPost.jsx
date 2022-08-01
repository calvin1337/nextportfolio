import {Col} from "react-bootstrap";
import styles from "../../styles/Blog.module.css";
import Link from "next/link";
import { faCalendar} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


const BlogPost = ({title, coverPhoto, datePublished, slug}) => {

  
  return(
      <Col lg="6" className="mt-30">
              <div className={styles.blogPost}>
                   <div className={styles.blogImg}>
                   <Link href={"/blog/" + slug}>
                          <img src={coverPhoto.url} alt="" />
                   </Link>
                          
                      <div className={styles.blogDate}>
                          <span className={styles.date}><FontAwesomeIcon  icon={faCalendar}/></span>
                          <span className={styles.month}>{datePublished}</span>
                      </div>
                  </div>
                  <div className={styles.blogContent}>
                  <h5>
                      
                  <Link href={"/blog/" + slug} >
                      {title}
                  </Link>
                     
                  </h5>
                  </div>
              </div>
          </Col>
  )
}

export default BlogPost;