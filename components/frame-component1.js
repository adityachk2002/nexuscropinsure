import { useCallback, useEffect, useState } from "react";
import { TextField, InputAdornment, Icon, IconButton } from "@mui/material";
import axios from 'axios';

// import { useEffect, useState } from "react";

import InputArea from "./input-area";
import { useRouter } from "next/router";
import styles from "./frame-component1.module.css";

const formData = [];


const submitForm = async (data) => {
  // Access form data (replace with your logic)
  const username = 'user123'; // Replace with actual retrieval
  const password = 'password123'; // Replace with actual retrieval
  const email = 'user@example.com'; // Replace with actual retrieval

  try {
    const response = await axios.post('http://localhost:5000/submit-form', {
      username,
      password,
      email,
    });
    console.log('Form submission response:', response.data);
    // Handle successful submission (e.g., display success message)
  } catch (error) {
    console.error('Error submitting form:', error);
    // Handle submission errors (e.g., display error message)
  }
};

const FrameComponent1 = () => {
  const [isMetaMaskInstalled, setIsMetaMaskInstalled] = useState(false);

  useEffect(() => {
    const checkMetaMask = () => {
      setIsMetaMaskInstalled(!!window.ethereum); // Check for `window.ethereum`
    };

    checkMetaMask();
  }, []);

  const connectToMetaMask = async () => {
    if (!isMetaMaskInstalled) {
      console.error("MetaMask not detected!");
      return;
    }
  
    try {
      const accounts = await window.ethereum.request({ method: "eth_requestAccounts" });
      console.log("Connected Accounts:", accounts);
      // Successful connection, navigate to packages page
      router.push("/package");
    } catch (error) {
      console.error("Error connecting to MetaMask:", error);
    }
  };
  

  const router = useRouter();

  const onConnectWalletLabelClick = useCallback(() => {
    router.push("/package");
  }, [router]);

  const handleFormSubmit = () => {
    // Perform any validation or pre-submission actions here
    submitForm();
  };
  
  
  
  return (
    <div className={styles.rectangleParent}>
      <div className={styles.frameChild} />
      <div className={styles.frameParent}>
        <InputArea username="Username" />
        <div className={styles.frameWrapper}>
          <div className={styles.frameGroup}>
            <div className={styles.passwordWrapper}>
              <div className={styles.password}>Password</div>
            </div>
            <TextField
              className={styles.frameItem}
              variant="outlined"
              sx={{
                "& fieldset": { borderColor: "#000" },
                "& .MuiInputBase-root": {
                  height: "52px",
                  backgroundColor: "#d2e5f7",
                  borderRadius: "60px",
                },
              }}
            />
          </div>
        </div>
        <InputArea username="Confirm Password" propMinWidth="unset" />
        <div className={styles.frameContainer}>
          <div className={styles.userEmailIdWrapper}>
            <div className={styles.userEmailId}>User email id</div>
          </div>
          <input className={styles.frameInner} type="text" />
        </div>
      </div>
      <div className={styles.frameDiv}>
      <div className={styles.connectWalletLabelParent}>
  <div className={styles.connectWalletLabel} onClick={connectToMetaMask} />
  <h3 className={styles.connectWallet}>Connect Wallet</h3>
</div>
<button onClick={handleFormSubmit}>Submit Form</button>

      </div>
    </div>
  );
};

export default FrameComponent1;
