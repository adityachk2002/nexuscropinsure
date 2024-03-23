import styles from "./insurance-section.module.css";

const InsuranceSection = () => {
  return (
    <section className={styles.ne2RemovebgPreview2Parent}>
      <img
        className={styles.ne2RemovebgPreview2Icon}
        loading="lazy"
        alt=""
        src="/ne--2-removebgpreview-2@2x.png"
      />
      <div className={styles.rectangleParent}>
        <div className={styles.frameChild} />
        <div className={styles.frameItem} />
        <div className={styles.frameParent}>
          <div className={styles.frameWrapper}>
            <div className={styles.ne4Parent}>
              <img
                className={styles.ne4Icon}
                loading="lazy"
                alt=""
                src="/ne-4@2x.png"
              />
              <div className={styles.frameGroup}>
                <div className={styles.nexusInsuranceCorporationWrapper}>
                  <div className={styles.nexusInsuranceCorporationContainer}>
                    <p className={styles.nexus}>Nexus</p>
                    <p className={styles.insuranceCorporation}>
                      Insurance corporation
                    </p>
                  </div>
                </div>
                <div className={styles.allRightsReserved}>
                  All rights reserved.
                </div>
              </div>
            </div>
          </div>
          <div className={styles.mutualFundInvestmentsContainer}>
            <p className={styles.mutualFundInvestments}>
              Mutual Fund investments are subject to market risks, read all
              scheme related documents carefully. The NAVs of the schemes may go
              up or down depending upon the factors and forces affecting the
              securities market including the fluctuations in the interest
              rates. The past performance of the mutual funds is not necessarily
              indicative of future performance of the schemes. The Mutual Fund
              is not guaranteeing or assuring any dividend under any of the
              schemes and the same is subject to the availability and adequacy
              of distributable surplus. Investors are requested to review the
              prospectus carefully and obtain expert professional advice with
              regard to specific legal, tax and financial implications of the
              investment/participation in the scheme.
            </p>
            <p className={styles.whileAllEfforts}>
              While all efforts have been taken to make this web site as
              authentic as possible, please refer to the print versions,
              notified Gazette copies of Acts/Rules/Regulations for authentic
              version or for use before any authority. We will not be
              responsible for any loss to any person/entity caused by any
              short-coming, defect or inaccuracy inadvertently or otherwise
              crept in the Mutual Funds Sahi Hai web site.
            </p>
          </div>
        </div>
        <div className={styles.frameContainer}>
          <div className={styles.followUsOnParent}>
            <div className={styles.followUsOn}>Follow us on:</div>
            <div className={styles.frameDiv}>
              <div className={styles.vectorWrapper}>
                <img
                  className={styles.vectorIcon}
                  loading="lazy"
                  alt=""
                  src="/vector.svg"
                />
              </div>
              <div className={styles.vectorContainer}>
                <img
                  className={styles.vectorIcon1}
                  loading="lazy"
                  alt=""
                  src="/vector-1.svg"
                />
              </div>
              <img
                className={styles.vectorIcon2}
                loading="lazy"
                alt=""
                src="/vector-2.svg"
              />
              <div className={styles.vectorFrame}>
                <img
                  className={styles.vectorIcon3}
                  loading="lazy"
                  alt=""
                  src="/vector-3.svg"
                />
              </div>
              <img className={styles.vectorIcon4} alt="" src="/vector-4.svg" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InsuranceSection;
