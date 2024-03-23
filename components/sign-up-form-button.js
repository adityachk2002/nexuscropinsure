import { useCallback } from "react";
import { Button } from "@mui/material";
import { useRouter } from "next/router";
import styles from "./sign-up-form-button.module.css";

const SignUpFormButton = () => {
  const router = useRouter();

  const onRectangleClick = useCallback(() => {
    router.push("/sign-up");
  }, [router]);

  return (
    <header className={styles.signUpButton}>
      <nav className={styles.signInButton}>
        <div className={styles.signInButtonInner}>
          <button className={styles.vectorParent}>
            <img
              className={styles.frameChild}
              alt=""
              src="/rectangle-15.svg"
              onClick={onRectangleClick}
            />
            <b className={styles.signUp}>Sign up</b>
          </button>
        </div>
        <div className={styles.mainNavBarWrapper}>
          <div className={styles.mainNavBar}>
            <div className={styles.mainNavBarChild} />
            <b className={styles.signIn}>Sign in</b>
          </div>
        </div>
        <Button
          className={styles.signInButtonChild}
          variant="contained"
          sx={{
            textTransform: "none",
            color: "#fff",
            fontSize: "20",
            background: "#000",
            borderRadius: "60px",
            "&:hover": { background: "#000" },
            width: 159,
            height: 52,
          }}
        >
          About Us
        </Button>
      </nav>
    </header>
  );
};

export default SignUpFormButton;
