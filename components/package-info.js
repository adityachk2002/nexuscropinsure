import { useCallback } from "react";
import { useRouter } from "next/router";
import PerUserPerYearBilledAnnu from "./per-user-per-year-billed-annu";
import RectangleComponent from "./rectangle-component";
import styles from "./package-info.module.css";

const PackageInfo = () => {
  const router = useRouter();

  const onRectangleButtonClick = useCallback(() => {
    router.push("/dashboard");
  }, [router]);

  return (
    <div className={styles.packageDetails}>
      <div className={styles.packageDetailsChild} />
      <div className={styles.packageDetails1}>
        <div className={styles.basic}>Basic</div>
      </div>
      <div className={styles.packageDetails2}>
        <div className={styles.parent}>
          <div className={styles.div}>$100</div>
          <div className={styles.perUserPerYearBilledAnnuWrapper}>
            <PerUserPerYearBilledAnnu />
          </div>
        </div>
        <div className={styles.resultDisplay}>
          <RectangleComponent onRectangleButtonClick={onRectangleButtonClick} />
        </div>
      </div>
      <div className={styles.returns16xWrapper}>
        <div className={styles.returns16x}>Returns 1.6x</div>
      </div>
    </div>
  );
};

export default PackageInfo;
