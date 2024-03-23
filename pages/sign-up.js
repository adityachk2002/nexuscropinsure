import FrameComponent1 from "../components/frame-component1";
import styles from "./sign-up.module.css";

const SignUp = () => {
  return (
    <div className={styles.signUp}>
      <FrameComponent1 />
      <div className={styles.ne2Wrapper}>
        <img
          className={styles.ne2Icon}
          loading="lazy"
          alt=""
          src="/public/ne-2@2x.png"
        />
      </div>
    </div>
  );
};

export default SignUp;
