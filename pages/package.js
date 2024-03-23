import { useCallback } from "react";
import { useRouter } from "next/router";
import PackageInfo from "../components/package-info";
import PerUserPerYearBilledAnnu from "../components/per-user-per-year-billed-annu";
import RectangleComponent from "../components/rectangle-component";
import styles from "./package.module.css";
import Date from "date-fns";

const Package = () => {
  const router = useRouter();

 const onRectangleButtonClick = useCallback(() => {
  const clickedDate = Date(); // Get the current date
  console.log("Button 1 clicked on:", clickedDate); // Log for demonstration

  // Store or utilize the clickedDate as needed

  router.push("/dashboard");
}, [router]);

const onRectangleButton2Click = useCallback(() => {
  const clickedDate = Date(); // Get the current date
  console.log("Button 2 clicked on:", clickedDate); // Log for demonstration

  // Store or utilize the clickedDate as needed

  router.push("/dashboard");
}, [router]);

  return (
    <div className={styles.package}>
      <div className={styles.ourPackagesWrapper}>
        <h1 className={styles.ourPackages}>Our Packages</h1>
      </div>
      <div className={styles.packageDetails}>
        <div className={styles.packageDetails1}>
          <PackageInfo />
        </div>
        <div className={styles.packageDetails2}>
          <PerUserPerYearBilledAnnu />
          <div className={styles.rectangleParent}>
            <div className={styles.frameChild} />
            <div className={styles.standardPackage}>
              <div className={styles.standard}>Standard</div>
            </div>
            <div className={styles.parent}>
              <div className={styles.div}>$200</div>
              <div className={styles.instanceWrapper}>
                <RectangleComponent
                  onRectangleButtonClick={onRectangleButtonClick}
                />
              </div>
            </div>
            <div className={styles.returns18xWrapper}>
              <div className={styles.returns18x}>Returns 1.8x</div>
            </div>
          </div>
        </div>
        <div className={styles.packageDetails3}>
          <PerUserPerYearBilledAnnu />
          <div className={styles.rectangleGroup}>
            <div className={styles.frameItem} />
            <div className={styles.premiumWrapper}>
              <div className={styles.premium}>Premium</div>
            </div>
            <div className={styles.group}>
              <div className={styles.div1}>$400</div>
              <div className={styles.standardPackage1}>
                <RectangleComponent
                  onRectangleButtonClick={onRectangleButton2Click}
                />
              </div>
            </div>
            <div className={styles.returns2xWrapper}>
              <div className={styles.returns2x}>Returns 2x</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Package;
