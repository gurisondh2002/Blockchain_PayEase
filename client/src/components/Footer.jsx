import logo from "../assets/logo1.png";
import styles from './Footer.module.css'; // Import CSS module

const Footer = () => (
  <div className={`${styles.footerContainer}  gradient-bg-footer`}>
    <div className={styles.logoContainer}>
      <img src={logo} alt="logo" className={styles.logo} />
    </div>
    <div className={styles.linksContainer}>
      <p className={styles.link}>Market</p>
      <p className={styles.link}>Exchange</p>
      <p className={styles.link}>Tutorials</p>
      <p className={styles.link}>Wallets</p>
    </div>
    <div className={styles.infoContainer}>
      <p className={styles.infoText}>Come join us and hear for the unexpected miracle</p>
      <p className={styles.infoEmail}>info@payease.com</p>
    </div>
    <div className={styles.separator}></div>
    <div className={`${styles.footerText} ${styles.copyRight}`}>
      <p className={styles.footerText}>@payeasr2024</p>
      <p className={styles.footerText}>All rights reserved</p>
    </div>
  </div>
);

export default Footer;
