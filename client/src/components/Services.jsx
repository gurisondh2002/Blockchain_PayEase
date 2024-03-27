import { BsShieldFillCheck } from "react-icons/bs";
import { BiSearchAlt } from "react-icons/bi";
import { RiHeart2Fill } from "react-icons/ri";
import styles from './Services.module.css'


const Services = () => (
  <div className={`${styles.flexCenter} gradient-bg-services`}>
    <div className={`${styles.customStyle}`}>
      <div className={`${styles.servicesClass}`}>
        <h1 className={`${styles.headingServices} text-gradient`}>
          Services that we
          <br />
          continue to improve
        </h1>
        <p className={`${styles.customParagraph} text-base`}>
          The best choice for buying and selling your crypto assets, with the
          various super friendly services we offer
        </p>
      </div>

      <div className={`${styles.customFlexContainer}`}>
        <div className={`${styles.customContForIcon} white-glassmorphism`}>
          <div className={`${styles.iconContainer}`}>
            <BsShieldFillCheck fontSize={21} style={{color:'white'}} />
          </div>
          <div className={`${styles.customFlexContainerDesc}`}>
            <h3 className={`${styles.nameContaienr}`}>Security gurantee</h3>
            <p className={`${styles.descP}`}>
              Security is guranteed. We always maintain privacy and maintain the quality of our products
            </p>
          </div>
        </div>
        <div className={`${styles.customContForIcon1} white-glassmorphism`}>
          <div className={`${styles.iconContainer1}`}>
          <BiSearchAlt fontSize={21} style={{color:'white'}} />
          </div>
          <div className={`${styles.customFlexContainerDesc1}`}>
          <h3 className={`${styles.nameContaienr1}`}>Best exchange rates</h3>
          <p className={`${styles.descP1}`}>
            Security is guranteed. We always maintain privacy and maintain the quality of our products
            </p>
          </div>
        </div>
        <div className={`${styles.customContForIcon2} white-glassmorphism`}>
        <div className={`${styles.iconContainer2}`}>
          <RiHeart2Fill fontSize={21} style={{color:'white'}} />
          </div>
          <div className={`${styles.customFlexContainerDesc2}`}>
          <h3 className={`${styles.nameContaienr2}`}>Fastest transactions</h3>
          <p className={`${styles.descP2}`}>
            Security is guranteed. We always maintain privacy and maintain the quality of our products
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default Services;