import styles from "../styles/Layout.module.css";
import Navigation from "./Navigation";

const Layout = ({children}) => {
  return(
    <div className={styles.wrapper} >
                
                <div className={styles.bgLines}>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
                <Navigation  id="nav" />
                {children}
            </div>
  )
}

export default Layout