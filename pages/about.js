import styles from "../styles/About.module.css";
import AboutArea from "../components/About/AboutArea"
import MyTech from "../components/About/MyTech"

const about = () => {
  return(
    <div className={styles.aboutArea}>
      <AboutArea />
      <MyTech />
    </div>
  )
}


export default about