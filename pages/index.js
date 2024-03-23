import { Button } from "@mui/material";
import SignUpFormButton from "../components/sign-up-form-button";
import InsuranceSection from "../components/insurance-section";
import styles from "./index.module.css";

const Home = () => {
  return (
    <div className={styles.home}>
      <SignUpFormButton />
      <div className={styles.nexusWrapper}>
        <b className={styles.nexus}>nexus</b>
      </div>
      <div className={styles.defiInsuranceCorpWrapper}>
        <h3 className={styles.defiInsuranceCorp}>DeFi Insurance Corp.</h3>
      </div>
      <section className={styles.blockchainIntegratedInsurancWrapper}>
        <div className={styles.blockchainIntegratedInsurancContainer}>
          <span className={styles.blockchainIntegratedInsuranc}>
            Blockchain integrated insurance corporation
          </span>
          <span>, your money is in safe hands.</span>
        </div>
      </section>
      <section className={styles.ellipseParent}>
        <div className={styles.frameChild} />
        <img
          className={styles.ne1Icon}
          loading="lazy"
          alt=""
          src="/ne-1@2x.png"
        />
        <div className={styles.frameItem} />
        <img
          className={styles.dPathsLines1Copy11}
          alt=""
          src="/3-d-paths-lines-1-copy.gif"
        />
        <img
          className={styles.ne2RemovebgPreview1Icon}
          loading="lazy"
          alt=""
          src="/ne--2-removebgpreview-1@2x.png"
        />
      </section>
      <section className={styles.nexusIsTheBestAgriculturalWrapper}>
        <div className={styles.nexusIsThe}>
          Nexus is the best agricultural insurance protocol in the galaxy. The
          protocol is completely audited by 2 independent - leading 3rd party
          security agencies and hence safe to use.
        </div>
      </section>
      <section className={styles.nexusIsTheFirstCropInsuWrapper}>
        <div
          className={styles.nexusIsThe1}
        >{`Nexus is the first crop - insurance protocol and a farmer’s best friend. Our pools are always solvent given enough time and users. You can find the white paper below. `}</div>
      </section>
      <section className={styles.youCanChooseFromAnyOfTheWrapper}>
        <div
          className={styles.youCanChoose}
        >{`You can choose from any of the 3 plans depending on the cover you want and the amount of cover you want. You can claim your cover autonomously for a month, one year after activation of your purchase. `}</div>
      </section>
      <section className={styles.youCanGetStartedInNoTimeWrapper}>
        <div className={styles.youCanGet}>
          You can get started in no time. Buying your cover only takes 2 minutes
          and you can get started now
        </div>
      </section>
      <section className={styles.homeInner}>
        <Button
          className={styles.frameInner}
          disableElevation={true}
          variant="contained"
          sx={{
            textTransform: "none",
            color: "#fff",
            fontSize: "70",
            background: "#30df61",
            borderRadius: "40px",
            "&:hover": { background: "#30df61" },
            width: 356,
            height: 109,
          }}
        >
          Start now!!
        </Button>
      </section>
      <InsuranceSection />
    </div>
  );
};

export default Home;
