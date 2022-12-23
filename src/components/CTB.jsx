import styles from "../style";
import SponsorButton from "./SponsorButton";

const CTB = () => (
  <section className={`${styles.flexCenter} ${styles.marginY} ${styles.padding} sm:flex-row flex-col bg-black-gradient-2 rounded-[20px] box-shadow`}>
    <div className="flex-1 flex flex-col">
      <h2 className={styles.heading2}>Interested in Sponsoring</h2>
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
        Sponsor us to improve the Web3 ecosystem with more Developers 
        and Projects.
      </p>
    </div>

    <div className={`${styles.flexCenter} sm:ml-10 ml-0 sm:mt-0 mt-10`}>
      <SponsorButton />
    </div>
  </section>
);

export default CTB;
