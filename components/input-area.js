import { useMemo } from "react";
import { TextField, InputAdornment, Icon, IconButton } from "@mui/material";
import styles from "./input-area.module.css";

const InputArea = ({ username, propMinWidth }) => {
  const usernameStyle = useMemo(() => {
    return {
      minWidth: propMinWidth,
    };
  }, [propMinWidth]);

  return (
    <div className={styles.usernameInputParent}>
      <div className={styles.usernameInput}>
        <div className={styles.username} style={usernameStyle}>
          {username}
        </div>
      </div>
      <TextField
        className={styles.frameChild}
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
  );
};

export default InputArea;
