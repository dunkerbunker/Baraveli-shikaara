import { card } from "../assets";
import styles, { layout } from "../style";
import Button from "./Button";

const CardDeal = () => (
  <section className={layout.section}>
    <div className={layout.sectionInfo}>
      <h2 className={styles.heading2}>
        Why choose us? <br className="sm:block hidden" /> 
      </h2>
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
      <p className="text-white font-poppins font-semibold">
    Bug Disclosure:</p>
  <p className="">
    Hackers can securely submit bug reports, identifying vulnerabilities in systems or applications.</p>
  <br/>
  <p className="text-white font-poppins font-semibold">
    Coordinated Disclosure:</p>
  <p className="">
    We responsibly disclose vulnerabilities to companies in a coordinated manner.</p>
  <br/>
  <p className="text-white font-poppins font-semibold">
    Bug Bounty Negotiations:</p>
  <p className="">
    Our experts ensure fair compensation for disclosed vulnerabilities through bug bounty negotiations.</p>
  <br/>
  <p className="text-white font-poppins font-semibold">
    Community Engagement:</p>
  <p className="">
    Our platform fosters community collaboration, learning, and mentorship for ethical hackers.</p>
      </p>

      <Button styles={`mt-10`} />
    </div>

    <div className={layout.sectionImg}>
      <img src={card} alt="billing" className="w-[100%] h-[100%]" />
    </div>
  </section>
);

export default CardDeal;
