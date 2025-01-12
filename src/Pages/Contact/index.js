import {
  Box,
  Button,
  TextField,
  Typography,
  Snackbar,
  Alert,
} from "@mui/material";
import { useState } from "react";
import emailjs from "emailjs-com";
import useResponsive from "../../hooks/useResponsive";

const Contact = () => {
  const [name, setName] = useState("");
  const [contact, setContact] = useState("");
  const [email, setEmail] = useState("");
  const [detail, setDetail] = useState("");
  const [open, setOpen] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState("");
  const [snackbarSeverity, setSnackbarSeverity] = useState("success");

  const isDesktop = useResponsive();
  const handleName = (event) => {
    setName(event.target.value);
  };

  const handleContact = (event) => {
    setContact(event.target.value);
    if (contact.length >= 10) {
      alert("Contact number must be 10 digits long.");
      return;
    }
  };
  const handleEmail = (event) => {
    setEmail(event.target.value);
  };
  const handleDetail = (event) => {
    setDetail(event.target.value);
  };

  const handleSnackbarOpen = (message, severity) => {
    setSnackbarMessage(message);
    setSnackbarSeverity(severity);
    setOpen(true);
  };

  const handleSnackbarClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setOpen(false);
  };

  const handleButton = () => {
    if (contact.length === 10) {
      const formData = {
        name: name,
        contact: contact,
        email: email,
        detail: detail,
      };

      emailjs
        .send(
          "service_edpcjtq",
          "template_0fkz6vu",
          formData,
          "NwnLIDq1-INQJQ14s"
        )
        .then((response) => {
          console.log("SUCCESS!", response.status, response.text);
          handleSnackbarOpen("Email sent successfully!", "success");
        })
        .catch((err) => {
          handleClear();
          console.log("FAILED...", err);
          handleSnackbarOpen(
            "Failed to send email. Please try again.",
            "error"
          );
        });
    } else {
      alert("Try again");
    }
  };

  const handleClear = () => {
    setName("");
    setContact("");
    setEmail("");
    setDetail("");
  };

  return (
    <>
      <Box
        style={{
          height: "90vh",
          width: "100%",
          display: "flex",
          fontWeight: "bold",
          alignItems: "center",
          textAlign: "center",
          paddingBottom: 100,
          justifyContent: "center",
          flexDirection: "column",
        }}
      >
        <Typography variant="h3" paddingBottom={3}>
          Contact Me
        </Typography>
        <Typography variant="h6" paddingBottom={2}>
          I will contact you as soon as possible
        </Typography>
        <Box
          style={{
            height: "70%",
            width: isDesktop ? "40%" : "90%",
            border: "2px solid lightgrey",
            display: "flex",
            boxShadow: "0px 4px 10px rgba(2, 2, 2, 2)",
            borderRadius: "1.5%",
            alignItems: "center",
            textAlign: "right",
            justifyContent: "center",
          }}
        >
          <form>
            <Box style={{ padding: 10 }}>
              <label style={{ padding: 10 }}>Name :</label>
              <TextField
                type="text"
                placeholder="Name"
                value={name}
                onChange={handleName}
                size="small"
              />
            </Box>
            <Box style={{ padding: 10 }}>
              <label style={{ padding: 10 }}>Contact :</label>
              <TextField
                type="number"
                placeholder="Mobile Number"
                value={contact}
                onChange={handleContact}
                size="small"
                inputProps={{ maxLength: 10 }}
              />
            </Box>
            <Box style={{ padding: 10 }}>
              <label style={{ padding: 10 }}>Email ID :</label>
              <TextField
                type="text"
                placeholder="Email Id"
                value={email}
                onChange={handleEmail}
                size="small"
              />
            </Box>
            <Box style={{ padding: 10 }}>
              <label style={{ padding: 10 }}>Detail :</label>
              <TextField
                type="text"
                placeholder="Detail"
                value={detail}
                onChange={handleDetail}
                size="small"
                multiline={true}
                rows={3}
                style={{ width: 220 }}
              />
            </Box>
            <Box style={{ display: "flex", justifyContent: "center" }}>
              <Button
                variant="contained"
                onClick={handleButton}
                disabled={name === "" || contact === "" || email === ""}
                style={{ margin: 10 }}
              >
                Submit
              </Button>
              <Button
                variant="contained"
                onClick={handleClear}
                style={{ margin: 10 }}
                disabled={
                  name === "" && contact === "" && email === "" && detail === ""
                }
              >
                Clear
              </Button>
            </Box>
          </form>
        </Box>
      </Box>

      <Snackbar
        open={open}
        autoHideDuration={6000}
        onClose={handleSnackbarClose}
        anchorOrigin={{ vertical: "top", horizontal: "center" }}
      >
        <Alert
          onClose={handleSnackbarClose}
          severity={snackbarSeverity}
          sx={{ width: "100%" }}
        >
          {snackbarMessage}
        </Alert>
      </Snackbar>
    </>
  );
};

export default Contact;
